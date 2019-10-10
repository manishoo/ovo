FROM nginx:alpine
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

# Install node
RUN apk add --update nodejs nodejs-npm

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
RUN npm run build:web

RUN rm -rf src
RUN rm package.json
RUN rm tsconfig.json

RUN npm prune --production

COPY /home/supernova/public/* /var/www/
ARG ENV
COPY /home/supernova/nginx.conf/$ENV /etc/nginx/conf.d/default.conf

CMD ["nginx -g 'daemon off;'"]
