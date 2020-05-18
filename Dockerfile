FROM node:10-alpine
MAINTAINER Ouranos Studio

WORKDIR /service

RUN apk add --no-cache git

COPY ["package.json", "yarn.lock", "./"]
RUN yarn --production --no-cache --frozen-lockfile && cd node_modules/ && rm -rf hermes-engine jsc-android recyclerlistview

COPY ["tsconfig.json", "tslint.json", "babel.config.js", "server.js", "server.config.js", "gulpfile.js", "./"]
COPY webpack webpack
#COPY buildtools buildtools
COPY web web
#COPY src src

#ARG API_ADDRESS
#ARG GRAPHQL_ENDPOINT
#ARG TAG

# RUN npm run build:web:prod
