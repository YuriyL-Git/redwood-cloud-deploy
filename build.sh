#!/bin/bash
source .env
current_date_time=$(date)

git config --global --add safe.directory "${PWD}"
git reset --hard
git checkout master
git fetch --all
git reset --hard origin/master

node prebuild.js
yarn install --immutable

yarn rw build api
yarn rw build web

git checkout HEAD -- redwood.toml
git checkout deploy1

git add .
git commit -m "Deploy ${current_date_time}"
echo "https://${GIT_TOKEN}@github.com/${GITHUB_USERNAME}/${GITHUB_REPO}.git"

git remote remove origin
git remote add origin "https://${GITHUB_USERNAME}:${GIT_TOKEN}@github.com/${GITHUB_USERNAME}/${GITHUB_REPO}.git"
git push "https://${GITHUB_USERNAME}:${GIT_TOKEN}@github.com/${GITHUB_USERNAME}/${GITHUB_REPO}.git" --force

