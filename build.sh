#!/bin/bash
source .env
current_date_time=$(date)
deploy_branch=deploy1

git config --global --add safe.directory "${PWD}"
git reset --hard
git checkout master
git fetch --all
git reset --hard origin/master
git checkout "${deploy_branch}"
git reset --hard "origin/${deploy_branch}"

git checkout master

node prebuild.js
yarn install --immutable

yarn rw build api
yarn rw build web

git checkout HEAD -- redwood.toml
git checkout "${deploy_branch}"

git add .
git commit -m "Deploy ${current_date_time}"
echo "https://${GIT_TOKEN}@github.com/${GITHUB_USERNAME}/${GITHUB_REPO}.git"

git remote remove origin
git remote add origin "https://${GITHUB_USERNAME}:${GIT_TOKEN}@github.com/${GITHUB_USERNAME}/${GITHUB_REPO}.git"
git push "https://${GITHUB_USERNAME}:${GIT_TOKEN}@github.com/${GITHUB_USERNAME}/${GITHUB_REPO}.git" --force

