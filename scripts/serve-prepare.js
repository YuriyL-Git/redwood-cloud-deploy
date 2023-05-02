/* eslint-disable */
const fs = require('fs').promises;

const encoding = 'utf8';

setTimeout(async () => {
  clearPackageDependencies('package.json');
  /*  clearPackageDependencies('api/package.json', [
    { package: '@redwoodjs/api', version: '4.4.3' },
    { package: '@redwoodjs/graphql-server', version: '4.4.3' },
  ]);*/
}, 0);

async function clearPackageDependencies(pathToFile, dependencyKeys = []) {
  const packageContent = await fs.readFile(pathToFile, encoding);
  const packageObject = JSON.parse(packageContent);

  let dependencies = {};
  dependencyKeys.forEach((keyObj) => {
    const key = keyObj.package;
    const defaultVersion = keyObj.version;
    dependencies[key] = packageObject.dependencies[key] || defaultVersion;
  });

  packageObject.dependencies = dependencies;
  packageObject.devDependencies = {};
  const result = JSON.stringify(packageObject, null, 2);
  fs.writeFile(pathToFile, result, encoding);
}
