#!/bin/bash
current_date_time=$(date)

git config --global --add safe.directory "${PWD}"
git reset --hard
git checkout master
git fetch --all
git reset --hard origin/master

yarn install --immutable
node docker-prebuild.js
yarn rw build api
yarn rw build web

git checkout deploy
git fetch --all
git reset --hard origin/deploy

mv misc/.gitignore .gitignore

git add .
git commit -m "Deploy ${current_date_time}"
git push origin deploy --force
git reset --hard


