$ErrorActionPreference = "Stop"

$repoRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$logDirectory = Join-Path $env:LOCALAPPDATA "Aivideoacademy"
$logPath = Join-Path $logDirectory "auto-sync.log"
$quietPeriod = [TimeSpan]::FromSeconds(30)
$pushRetryPeriod = [TimeSpan]::FromMinutes(1)

New-Item -ItemType Directory -Path $logDirectory -Force | Out-Null

function Write-SyncLog {
  param([string]$Message)

  $line = "{0:yyyy-MM-dd HH:mm:ss} {1}" -f (Get-Date), $Message
  Add-Content -LiteralPath $logPath -Value $line -Encoding UTF8
}

function Invoke-Git {
  param([string[]]$GitArguments)

  $output = & git -C $repoRoot @GitArguments 2>&1
  if ($LASTEXITCODE -ne 0) {
    throw (($output | ForEach-Object { "$_" }) -join [Environment]::NewLine)
  }

  return $output
}

function Test-WebsitePath {
  param([string]$Path)

  $relativePath = $Path.Substring($repoRoot.Length).TrimStart("\", "/").Replace("\", "/")
  if (-not $relativePath -or $relativePath.StartsWith(".git/", [StringComparison]::OrdinalIgnoreCase)) {
    return $false
  }

  if ($relativePath -match "(?i)(^|/)\.env(?:\.|$)|(^|/)(?:secret|secrets|credential|credentials)(?:\.|/|$)") {
    return $false
  }

  if ($relativePath -match "(?i)^\.github/workflows/[^/]+\.ya?ml$") {
    return $true
  }

  if ($relativePath -match "(?i)^scripts/(?:auto-sync|install-auto-sync|uninstall-auto-sync)\.ps1$|^scripts/README\.md$") {
    return $true
  }

  return $relativePath -match "(?i)\.(html?|css|js|mjs|cjs|ts|tsx|jsx|json|webmanifest|png|jpe?g|svg|webp|gif|avif)$"
}

function Get-ChangedWebsitePaths {
  $trackedPaths = Invoke-Git -GitArguments @("diff", "--name-only", "HEAD")
  $untrackedPaths = Invoke-Git -GitArguments @("ls-files", "--others", "--exclude-standard")
  $paths = @($trackedPaths) + @($untrackedPaths)
  $uniquePaths = @{}

  foreach ($path in $paths) {
    $relativePath = "$path".Trim()
    if ($relativePath) {
      $fullPath = Join-Path $repoRoot $relativePath
      if (Test-WebsitePath -Path $fullPath) {
        $uniquePaths[$relativePath] = $true
      }
    }
  }

  return @($uniquePaths.Keys | Sort-Object)
}

function Push-LocalCommits {
  try {
    Invoke-Git -GitArguments @("push", "origin", "main") | Out-Null
    Write-SyncLog "Pushed local commits to origin/main."
    return $true
  }
  catch {
    Write-SyncLog "Push failed; will retry. $($_.Exception.Message)"
    return $false
  }
}

try {
  $branch = (Invoke-Git -GitArguments @("branch", "--show-current") | Select-Object -First 1).Trim()
  if ($branch -ne "main") {
    throw "Automatic sync requires the current branch to be main (found '$branch')."
  }

  $upstream = (Invoke-Git -GitArguments @("rev-parse", "--abbrev-ref", "--symbolic-full-name", "@{u}") | Select-Object -First 1).Trim()
  if ($upstream -ne "origin/main") {
    throw "Automatic sync requires origin/main as the branch upstream (found '$upstream')."
  }
}
catch {
  Write-SyncLog "Watcher stopped. $($_.Exception.Message)"
  exit 1
}

$watcher = New-Object System.IO.FileSystemWatcher
$watcher.Path = $repoRoot
$watcher.IncludeSubdirectories = $true
$watcher.NotifyFilter = [System.IO.NotifyFilters]"FileName, DirectoryName, LastWrite, Size"
$watcher.EnableRaisingEvents = $true

$sourcePrefix = "Aivideoacademy.AutoSync.$PID"
$sourceIdentifiers = @(
  "$sourcePrefix.Changed",
  "$sourcePrefix.Created",
  "$sourcePrefix.Deleted",
  "$sourcePrefix.Renamed"
)

Register-ObjectEvent -InputObject $watcher -EventName Changed -SourceIdentifier $sourceIdentifiers[0] | Out-Null
Register-ObjectEvent -InputObject $watcher -EventName Created -SourceIdentifier $sourceIdentifiers[1] | Out-Null
Register-ObjectEvent -InputObject $watcher -EventName Deleted -SourceIdentifier $sourceIdentifiers[2] | Out-Null
Register-ObjectEvent -InputObject $watcher -EventName Renamed -SourceIdentifier $sourceIdentifiers[3] | Out-Null

$lastRelevantChange = [DateTime]::MinValue
$nextPushAttempt = [DateTime]::MinValue
$initialChanges = Get-ChangedWebsitePaths
if ($initialChanges.Count -gt 0) {
  $lastRelevantChange = Get-Date
}

Write-SyncLog "Watcher started for main; website changes commit after 30 quiet seconds."

try {
  while ($true) {
    $eventRecord = Wait-Event -Timeout 2
    if ($eventRecord) {
      $queuedEvents = @(Get-Event | Where-Object { $_.SourceIdentifier -in $sourceIdentifiers })
      foreach ($queuedEvent in $queuedEvents) {
        $eventArgs = $queuedEvent.SourceEventArgs
        $eventPaths = @($eventArgs.FullPath)
        if ($eventArgs -is [System.IO.RenamedEventArgs]) {
          $eventPaths += $eventArgs.OldFullPath
        }
        foreach ($eventPath in $eventPaths) {
          if (Test-WebsitePath -Path $eventPath) {
            $lastRelevantChange = Get-Date
            break
          }
        }
        Remove-Event -EventIdentifier $queuedEvent.EventIdentifier -ErrorAction SilentlyContinue
      }
    }

    $now = Get-Date
    if ($lastRelevantChange -ne [DateTime]::MinValue -and ($now - $lastRelevantChange) -ge $quietPeriod) {
      $lastRelevantChange = [DateTime]::MinValue
      try {
        $changedPaths = Get-ChangedWebsitePaths
        if ($changedPaths.Count -gt 0) {
          Invoke-Git -GitArguments (@("add", "--") + $changedPaths) | Out-Null
          $commitMessage = "Website update: {0:yyyy-MM-dd HH:mm}" -f (Get-Date)
          Invoke-Git -GitArguments (@("commit", "--only", "-m", $commitMessage, "-m", "Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>", "--") + $changedPaths) | Out-Null
          Write-SyncLog "Committed $($changedPaths.Count) website file(s)."
          $nextPushAttempt = Get-Date
        }
      }
      catch {
        Write-SyncLog "Commit failed. $($_.Exception.Message)"
      }
    }

    if ($now -ge $nextPushAttempt) {
      try {
        $ahead = (Invoke-Git -GitArguments @("rev-list", "--count", "@{u}..HEAD") | Select-Object -First 1).Trim()
        if ([int]$ahead -gt 0) {
          if (Push-LocalCommits) {
            $nextPushAttempt = [DateTime]::MaxValue
          }
          else {
            $nextPushAttempt = (Get-Date) + $pushRetryPeriod
          }
        }
        else {
          $nextPushAttempt = [DateTime]::MaxValue
        }
      }
      catch {
        Write-SyncLog "Could not check for commits to push. $($_.Exception.Message)"
        $nextPushAttempt = (Get-Date) + $pushRetryPeriod
      }
    }
  }
}
finally {
  $watcher.EnableRaisingEvents = $false
  foreach ($sourceIdentifier in $sourceIdentifiers) {
    Unregister-Event -SourceIdentifier $sourceIdentifier -ErrorAction SilentlyContinue
  }
  $watcher.Dispose()
}
