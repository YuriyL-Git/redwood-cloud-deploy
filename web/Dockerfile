FROM node:18-alpine as builder

ENV APP_PORT ${APP_PORT}
ENV NODE_OPTIONS=--max_old_space_size=2048

WORKDIR /app
COPY web web
RUN rm -rf ./web/src

FROM nginx as runner

COPY --from=builder /app/web/dist /usr/share/nginx/html
COPY web/nginx.conf /etc/nginx/conf.d/default.conf
COPY web/https_key.key /etc/nginx/conf.d/https_key.key
COPY web/https_certificate.crt /etc/nginx/conf.d/https_certificate.crt

RUN ls -lA /usr/share/nginx/html

EXPOSE ${APP_PORT}
