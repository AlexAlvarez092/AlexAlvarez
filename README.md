# alexalvarez

## Deployment in production

- Install `npm`

```bash
sudo apt update
sudo apt install npm
```

- Install `pm2`

```bash
npm install -g pm2
```

- Create `deploy.sh`

```bash
#! /bin/bash

pm2 stop all
pm2 delete all

rm -rf alexalvarez

git clone https://github.com/AlexAlvarez092/alexalvarez.git

mkdir alexalvarez/server/ssl
cp keys/* alexalvarez/server/ssl/

(cd alexalvarez/server && npm install)
(cd alexalvarez/server && npm run start)
```

- Install `ufw` and open ports

```bash
sudo apt install ufw
ufw enable ssh
ufw enable https
ufw status verbose
```
