@echo off
echo Installing Healthcare Portal dependencies...
echo.
cd /d "%~dp0"
call npm install
echo.
echo Installation complete!
echo.
echo To start the application:
echo 1. Run: npm run server (in one terminal)
echo 2. Run: npm start (in another terminal)
echo.
pause
