@echo off
echo Building SDE Tracker...
cd /d "%~dp0"
npm run build
echo.
echo Build complete. Push to GitHub to deploy:
echo   git add -A
echo   git commit -m "update"
echo   git push
echo.
echo Live at: https://wilsonacosta44.github.io/sde-transition-tracker/
pause
