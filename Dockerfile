FROM node:8
# Create app directory
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
RUN npm install
RUN npm install forever -g
RUN forever start server.js