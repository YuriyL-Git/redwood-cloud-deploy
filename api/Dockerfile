FROM node:18-alpine

WORKDIR /app

COPY api api
COPY .nvmrc .
COPY graphql.config.js .
COPY package.json .
COPY redwood.toml .
COPY yarn.lock .

COPY .env .

RUN apk add --update --no-cache openssl1.1-compat
RUN apk add --no-cache --upgrade bash

RUN yarn install --immutable
RUN yarn add react react-dom --ignore-workspace-root-check
RUN yarn rw build api
RUN yarn global add @redwoodjs/api-server @redwoodjs/internal lerna prisma


RUN rm -rf ./api/src

WORKDIR /app
COPY serve-api.sh .

ENTRYPOINT ["./serve-api.sh"]
EXPOSE 8911




#WORKDIR /app/api
#ENTRYPOINT ["yarn", "rw", "serve", "api", "--port", "8911", "--rootPath", "/api" ]


