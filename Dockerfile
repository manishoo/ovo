FROM node:10-alpine
MAINTAINER Ouranos Studio

WORKDIR /home/supernova

COPY src src
COPY package.json .
COPY package-lock.json .
COPY tsconfig.json .
COPY webpack webpack
COPY locales locales
COPY buildtools buildtools
COPY .babelrc .
COPY server.js .
COPY buildconfig.js .
COPY gulpfile.js .
COPY shim-browser.js .

RUN npm install
RUN npm run build:web

RUN rm -rf src
RUN rm package.json
RUN rm tsconfig.json

RUN npm prune --production
