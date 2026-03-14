@echo off
echo ==============================================
echo Iniciando SaaS Dashboard
echo ==============================================

echo Instalando dependencias (se necessario)...
call npm install

echo Iniciando o servidor de desenvolvimento...
echo Seu navegador abrira automaticamente. Se nao abrir, acesse: http://localhost:5173
call npm run dev -- --open

pause
