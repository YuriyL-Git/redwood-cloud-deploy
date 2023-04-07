FROM node:18-alpine
#debug file
ENV APP_PORT ${APP_PORT}

WORKDIR /app
COPY redwood.toml .
RUN apk add --no-cache --upgrade bash

RUN   sed -i "s|\"\${APP_PORT}\"|${APP_PORT}|g" redwood.toml
RUN   sed -i "s|\"\${API_URL}\"|'"${API_URL}"'|g" redwood.toml
RUN   sed -i "s|\"\${API_PORT}\"|'"$API_PORT"'|g" redwood.toml
CMD cat redwood.toml
