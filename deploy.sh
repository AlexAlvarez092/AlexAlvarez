#! /bin/bash

pm2 stop all
pm2 delete all

rm -rf alexalvarez

git clone https://github.com/AlexAlvarez092/alexalvarez.git

mkdir alexalvarez/app/ssl
cp keys/* alexalvarez/app/ssl/

(cd alexalvarez/app && npm install)
(cd alexalvarez/app && npm run start)