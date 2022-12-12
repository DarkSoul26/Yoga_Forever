#Dockerfile
# PROD CONFIG
FROM node:16.13.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD [ "node", "app.js" ]