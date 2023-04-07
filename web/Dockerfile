FROM node:18-alpine as builder

ENV APP_PORT ${APP_PORT}

WORKDIR /app

COPY web web
COPY .nvmrc .
COPY graphql.config.js .
COPY package.json .
COPY redwood.toml .
COPY yarn.lock .
COPY docker-prebuild.js .
COPY .env .

RUN yarn install --immutable
RUN node docker-prebuild.js
RUN yarn rw build web
RUN rm -rf ./web/src

FROM nginx as runner

COPY --from=builder /app/web/dist /usr/share/nginx/html
COPY web/nginx.conf /etc/nginx/conf.d/default.conf

RUN ls -lA /usr/share/nginx/html

EXPOSE ${APP_PORT}
