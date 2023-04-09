#!/bin/bash
current_date_time=$(date)

git config --global --add safe.directory "${PWD}"
git reset --hard
git checkout -b master
git pull
yarn install --immutable
yarn add react react-dom --ignore-workspace-root-check
node docker-prebuild.js
yarn rw build api
yarn rw build web

git checkout -b deploy
git add api/dist
git add web/dist
git commit -m "Deploy ${current_date_time}"
git push origin deploy --force
git reset --hard


