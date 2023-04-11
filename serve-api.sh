#!/bin/ash

# NOTE: Requires binaries. Install with:
# yarn global add @redwoodjs/api-server @redwoodjs/internal prisma

prisma generate
prisma migrate deploy --schema ./api/db/schema.prisma
rw-server api
