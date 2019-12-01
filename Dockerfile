FROM node:10-alpine
MAINTAINER Ouranos Studio

WORKDIR /home/supernova

# All for image webpack loader
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
  autoconf \
  yarn
COPY package.json .
COPY yarn.lock .
RUN yarn

COPY src src
COPY tsconfig.json .
COPY tslint.json .
COPY webpack webpack
COPY buildtools buildtools
COPY web web
COPY babel.config.js .
COPY server.js .
COPY server.config.js .
COPY gulpfile.js .
COPY shim-browser.js .

# get args
ARG API_ADDRESS
ARG GRAPHQL_ENDPOINT
ARG TAG
RUN npm run build:web:prod
