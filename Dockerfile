FROM node:8
# Create app directory
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm install forever -g
RUN pwd
RUN cd /usr/src/app
ENTRYPOINT npm start
EXPOSE 3001
EXPOSE 80