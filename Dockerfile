FROM node:10-alpine
MAINTAINER Ouranos Studio

WORKDIR /home/supernova

RUN echo "API ADDRESS =====>>> $API_ADDRESS"
RUN echo $API_ADDRESS
RUN echo "DOCKER_TLS_CERTDIR =====>>> $DOCKER_TLS_CERTDIR"
RUN echo $DOCKER_TLS_CERTDIR
COPY src src
COPY package.json .
COPY tsconfig.json .
COPY webpack webpack
COPY locales locales
COPY buildtools buildtools
COPY web web
COPY .babelrc .
COPY server.js .
COPY buildconfig.js .
COPY gulpfile.js .
COPY shim-browser.js .

# for image webpack loader
RUN apk add --no-cache --virtual .build-deps \
  git \
  python \
  g++ \
  gcc \
  make \
  libpng \
  libpng-dev \
  libjpeg-turbo \
  libjpeg-turbo-dev \
  build-base \
  file \
  nasm \
  autoconf
RUN npm install
RUN npm run build:web

RUN rm -rf src
RUN rm package.json
RUN rm tsconfig.json

RUN npm prune --production
