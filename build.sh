git config --global --add safe.directory "${PWD}"
git checkout -b master
git pull
yarn install --immutable
yarn add react react-dom --ignore-workspace-root-check
node docker-prebuild.js
yarn rw build api
RUN yarn rw build web

git checkout -b deploy

