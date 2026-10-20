$ErrorActionPreference = "Stop"

$repoRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$watcherPath = Join-Path $PSScriptRoot "auto-sync.ps1"
$taskName = "Aivideoacademy Auto Sync"
$powerShellPath = (Get-Command powershell.exe).Source
$currentUser = [System.Security.Principal.WindowsIdentity]::GetCurrent().Name

if (-not (Get-Command Register-ScheduledTask -ErrorAction SilentlyContinue)) {
  throw "Windows Task Scheduler cmdlets are unavailable; automatic sign-in startup was not configured."
}

if (-not (Test-Path (Join-Path $repoRoot ".git"))) {
  throw "The project folder is not a Git repository."
}

$action = New-ScheduledTaskAction `
  -Execute $powerShellPath `
  -Argument "-NoLogo -NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -File `"$watcherPath`"" `
  -WorkingDirectory $repoRoot
$trigger = New-ScheduledTaskTrigger -AtLogOn -User $currentUser
$principal = New-ScheduledTaskPrincipal -UserId $currentUser -LogonType Interactive -RunLevel Limited
$settings = New-ScheduledTaskSettingsSet `
  -StartWhenAvailable `
  -MultipleInstances IgnoreNew `
  -ExecutionTimeLimit ([TimeSpan]::Zero)

Register-ScheduledTask `
  -TaskName $taskName `
  -Action $action `
  -Trigger $trigger `
  -Principal $principal `
  -Settings $settings `
  -Description "Commits website source/assets after 30 quiet seconds and pushes commits to origin/main." `
  -Force | Out-Null

Start-ScheduledTask -TaskName $taskName
Write-Output "Installed and started '$taskName'. Website changes will sync after 30 quiet seconds."
Write-Output "Log: $env:LOCALAPPDATA\Aivideoacademy\auto-sync.log"
