#!/bin/bash
source .env
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
mv misc/.gitignore .gitignore

git add .
git commit -m "Deploy ${current_date_time}"
echo "https://${GIT_TOKEN}@github.com/${GITHUB_USERNAME}/${GITHUB_REPO}.git"

git remote add origin "https://${GITHUB_USERNAME}:${GIT_TOKEN}@github.com/${GITHUB_USERNAME}/${GITHUB_REPO}.git"
git push --force

