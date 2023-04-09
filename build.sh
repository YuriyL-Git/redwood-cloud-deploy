#!/bin/bash
current_date_time=$(date)

git config --global --add safe.directory "${PWD}"
git reset --hard
git checkout -b master
git pull
yarn install --immutable
node docker-prebuild.js
yarn rw build api
yarn rw build web

git checkout -b deploy
mv misc/.gitignore .gitignore

git add .
git commit -m "Deploy ${current_date_time}"
git push origin deploy --force
git reset --hard


