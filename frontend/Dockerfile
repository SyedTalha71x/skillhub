FROM node:18-alpine 

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# nginx for serving the app 
FROM nginx:alpine
COPY --from=0 /usr/src/app/dist /usr/share/nginx/html

EXPOSE 80

