FROM node:18-alpine as builder

ENV APP_PORT ${APP_PORT}
ENV NODE_OPTIONS=--max_old_space_size=2048

WORKDIR /app
COPY web web
RUN rm -rf ./web/src

FROM nginx as runner

COPY --from=builder /app/web/dist /usr/share/nginx/html
COPY web/nginx.conf /etc/nginx/conf.d/default.conf
COPY web/redwoodtest.pp.ua_key.txt /ect/ssl/redwoodtest.pp.ua_key.txt
COPY web/ssl_bundle.txt /ect/ssl/ssl_bundle.txt

RUN ls -lA /usr/share/nginx/html

EXPOSE ${APP_PORT}
