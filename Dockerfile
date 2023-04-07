FROM node:18-alpine

WORKDIR /app

COPY redwood.toml .
COPY docker-prebuild.js .
COPY .env .
RUN apk add --no-cache --upgrade bash
RUN yarn init -y
RUN yarn add dotenv -W

RUN node docker-prebuild.js
CMD cat redwood.toml
#ENTRYPOINT ["./serve-api.sh"]
