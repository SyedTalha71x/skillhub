#!/bin/bash
cd /home/ec2-user/mern-app/backend
npm install
pm2 restart all

cd /home/ec2-user/mern-app/frontend
npm install
npm run build
pm2 serve build 3000 --name frontend

