#! /bin/bash

pm2 stop all
pm2 delete all

rm -rf alexalvarez

git clone https://github.com/AlexAlvarez092/alexalvarez.git

mkdir alexalvarez/server/ssl
cp keys/* alexalvarez/server/ssl/
cp .env alexalvarez/server

(cd alexalvarez/server && npm install)
(cd alexalvarez/server && npm run start)