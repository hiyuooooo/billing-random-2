@echo off
echo.
echo ===============================================
echo  Creating Windows Executable (.exe)
echo ===============================================
echo.

echo Installing dependencies...
call npm install

echo.
echo Building application...
call npm run pack:exe:win

echo.
echo ===============================================
echo  Build Complete!
echo ===============================================
echo.
echo Your executable is ready:
echo   File: executables\node-build.exe
echo   Size: ~35MB
echo.
echo To run: Double-click the .exe file
echo.
pause
