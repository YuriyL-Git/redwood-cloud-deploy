FROM node:18-alpine

ENV API_PORT ${API_PORT}
ENV NODE_OPTIONS=--max_old_space_size=2048

WORKDIR /app

COPY api api
COPY .nvmrc .
COPY graphql.config.js .
COPY package.json .
COPY redwood.toml .
COPY yarn.lock .
COPY .env .
COPY docker-prebuild.js .

RUN apk add --update --no-cache openssl1.1-compat
RUN apk add --no-cache --upgrade bash

#RUN yarn install --immutable
#RUN yarn add react react-dom --ignore-workspace-root-check

#RUN yarn rw build api
#RUN export PATH="$(yarn global bin):$PATH"
#RUN yarn config set prefix ~/.local
RUN node docker-prebuild.js
RUN yarn global add ignite-cli
RUN yarn install --immutable

RUN yarn global add @redwoodjs/api-server @redwoodjs/internal prisma @prisma/client


RUN rm -rf ./api/src

WORKDIR /app
COPY serve-api.sh .
RUN chmod +x serve-api.sh

ENTRYPOINT ["./serve-api.sh"]
EXPOSE ${API_PORT}

