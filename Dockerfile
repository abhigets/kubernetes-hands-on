FROM node:8
# Create app directory
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm install
COPY . /usr/src/app
RUN npm install forever -g
RUN pwd
RUN cd /usr/src/app
EXPOSE 8080
ENTRYPOINT npm start