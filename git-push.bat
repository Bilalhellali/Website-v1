@echo off
cd /d "%~dp0"
echo === Suppression des fichiers lock git ===
if exist .git\index.lock del /f .git\index.lock && echo index.lock supprime || echo index.lock absent
if exist .git\HEAD.lock del /f .git\HEAD.lock && echo HEAD.lock supprime || echo HEAD.lock absent
echo.
echo === Git add ===
git add -A
echo.
echo === Git commit ===
git commit -m "redesign: Sahara Editorial - toutes les pages internes"
echo.
echo === Git push ===
git push origin main
echo.
echo ============================================
echo   TERMINE ! Verifiez le resultat ci-dessus
echo ============================================
pause
