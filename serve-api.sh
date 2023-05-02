#!/bin/ash

#dont stop container for debug
#while true; do sleep 1; done

prisma generate --schema ./api/db/schema.prisma
prisma migrate deploy --schema ./api/db/schema.prisma
rw-server api
