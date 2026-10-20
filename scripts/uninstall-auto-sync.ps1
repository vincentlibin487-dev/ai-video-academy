$ErrorActionPreference = "Stop"
$taskName = "Aivideoacademy Auto Sync"

if (Get-Command Unregister-ScheduledTask -ErrorAction SilentlyContinue) {
  $task = Get-ScheduledTask -TaskName $taskName -ErrorAction SilentlyContinue
  if ($task) {
    Stop-ScheduledTask -TaskName $taskName -ErrorAction SilentlyContinue
    Unregister-ScheduledTask -TaskName $taskName -Confirm:$false
    Write-Output "Removed '$taskName'."
  }
  else {
    Write-Output "The '$taskName' task is not installed."
  }
}
else {
  throw "Windows Task Scheduler cmdlets are unavailable."
}
