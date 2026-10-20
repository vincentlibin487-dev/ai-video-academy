# Automatic GitHub sync

On Windows, run `powershell -ExecutionPolicy Bypass -File .\scripts\install-auto-sync.ps1` from the project folder once. This installs and starts a per-user Task Scheduler task, which starts the watcher whenever you sign in.

The watcher waits until website source/assets have been unchanged for 30 seconds, stages only eligible website files, creates a timestamped commit, and pushes it to `origin/main`. It does not stage `.env` files, credential/secret-named paths, or unrelated file types. It requires the current branch to track `origin/main` and for Git's existing authentication to permit non-interactive pushes. Push failures are retried once per minute and recorded in `%LOCALAPPDATA%\Aivideoacademy\auto-sync.log`.

To turn it off, run `powershell -ExecutionPolicy Bypass -File .\scripts\uninstall-auto-sync.ps1`. The watcher never changes Android app code. GitHub Pages deployment then follows the repository's configured deployment process after the push.
