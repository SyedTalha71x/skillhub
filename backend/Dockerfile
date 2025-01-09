FROM node:18-alpine

RUN apk add --no-cache libssl3 openssl

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]
