#  ____        _ _     _   ____  _
# | __ ) _   _(_) | __| | / ___|| |_ __ _  __ _  ___
# |  _ \| | | | | |/ _` | \___ \| __/ _` |/ _` |/ _ \
# | |_) | |_| | | | (_| |  ___) | || (_| | (_| |  __/
# |____/ \__,_|_|_|\__,_| |____/ \__\__,_|\__, |\___|
#                                         |___/
FROM node:10-alpine AS build
MAINTAINER Ouranos Studio

WORKDIR /home/supernova

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
# get args
ARG PUBLIC_PATH
ARG API_ADDRESS
ARG GRAPHQL_ENDPOINT
ARG TAG
ARG ENV
RUN npm run build:web

RUN rm -rf src
RUN rm package.json
RUN rm tsconfig.json

RUN npm prune --production

#  ____                        ____  _
# / ___|  ___ _ ____   _____  / ___|| |_ __ _  __ _  ___
# \___ \ / _ \ '__\ \ / / _ \ \___ \| __/ _` |/ _` |/ _ \
#  ___) |  __/ |   \ V /  __/  ___) | || (_| | (_| |  __/
# |____/ \___|_|    \_/ \___| |____/ \__\__,_|\__, |\___|
#                                             |___/
FROM nginx:stable
COPY --from=build /home/supernova/web/* /var/www/

COPY nginx.conf/$ENV /etc/nginx/conf.d/default.conf
CMD ["nginx -g 'daemon off;'"]
