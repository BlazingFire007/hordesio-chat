@echo off

if exist install.txt (
    cd files

    title Hordes.io Chat
    call node chat
    goto :eof
)
md files
cd files

call powershell Invoke-WebRequest -Uri "https://cdn.rawgit.com/BlazingFire007/hordesio-chat/7762e92f/chat.js" -OutFile "chat.js"
call npm i socket.io-client
call npm i chalk

cd ..

echo This file confirms the installation, please do not delete it! > install.txt

cd files

title Hordes.io Chat
call node chat