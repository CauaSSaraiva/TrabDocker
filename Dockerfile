FROM node:18.16.1-slim

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN apt-get update -y && apt-get install -y openssl


EXPOSE 3000


CMD ["npm", "run", "dev"]

