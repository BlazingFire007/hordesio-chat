@echo off

if exist install.txt (
    call node chat
    goto :eof
)

call powershell Invoke-WebRequest -Uri "https://cdn.rawgit.com/BlazingFire007/hordesio-chat/master/chat.js" -OutFile "./chat.js"
call npm i socket.io-client
call npm i chalk

echo "This file confirms the installation, please do not delete it!" > install.txt

call node chat