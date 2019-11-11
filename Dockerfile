FROM node:8
# Create app directory
WORKDIR /usr/src/app
COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app
COPY . /usr/src/app
RUN cd /usr/src/app
RUN npm install
RUN npm install forever -g
RUN pwd
EXPOSE 8080
ENTRYPOINT npm run forever