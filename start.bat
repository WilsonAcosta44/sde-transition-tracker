@echo off
echo Starting SDE Tracker...
cd /d "%~dp0"
start "" "http://localhost:5173"
npm run dev
