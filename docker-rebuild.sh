#!/bin/bash

deploy_branch=deploy3
git fetch --all
git reset --hard "origin/${deploy_branch}"
docker-compose down
docker-compose build api
docker-compose build web
docker-compose up -d
