---
layout: post
title: "Linux: Learning the terminal"
categories:
  - Blog
tags:
  - linux
last_modified_at: 2020-05-03
---


Some basic/essential commands are listed here to get started with linux.

You can use TAB for auto completion of a command or files/directories name, double TAB to see available options for auto completion. Also, files/directories are case sensitive,

cd Desktop/ and cd desktop/ are different things.

File System Commands

    pwd — print working directory
    cd — change directory
    cd .. — go one directory back
    ls — list
    ls -la — list hidden files/folders, also shows permissions and more
    cp — copy
    mv — move
    rm — remove
    mkdir — make directory
    rmdir — remove directory
    rmdir -rf — remove directory with contents
    touch — create a file
    cat — view contents of files
    echo “hello” > hi.txt — create/overwrite a file (hi.txt) with hello as content
    echo “hello” >> hi.txt — append to file (hi.txt) with hello as content
    nano/vi/vim — terminal based text editors
    find/locate/whereis — search for files and binaries
    man — open manual page

Users and Privileges

    There are 3 groups — owner, members of owners’ group, other users.
    chmod — change mode (set permission)
    adduser — add a new user
    /etc/passwd file contains available users in the system.
    /etc/shadow file contains hashed passwords for available users.
    su — switch user
    passwd — change password

Network commands

    ifconfig — interface configuration
    iwconfig — dedicated to wireless networking interfaces
    ping — checks if a host can accept packets
    arp -a — displays ip address and mac address associated
    netstat -ano — displays active connections

Service commands

    service apache2 start — start an apache server
    python -m SimpleHTTPServer 80 — start a python server on port 80
    sysctl enable postgresql — starts postgresql on boot

Go to a directory and start python SimpleHTTPServer to start a python server with the present working directory as the home directory for the server. This can replace apache server where default home directory for the server is /var/www/html
Installing and Updating Tools

    apt update && apt upgrade — update and upgrade
    apt install wpscan — install tool (wpscan)
    git clone — clone a github directory to the system

Let me know if you find any **mistake** and **suggestions** are appreciated.
