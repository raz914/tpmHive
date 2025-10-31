@echo off
echo Building Next.js static export...
npm run build

echo.
echo Copying files for hosting compatibility...
copy out\privacy.html out\privacy\index.html
copy out\terms.html out\terms\index.html

echo.
echo Build complete! Upload the contents of the 'out' folder to your web server.
echo.
echo Files to upload:
echo - All files in the 'out' directory
echo - Make sure .htaccess is uploaded (for Apache servers)
echo - Ensure privacy/index.html and terms/index.html are uploaded
echo.
pause
