/* eslint-disable */
const fs = require('fs').promises;

const redwoodTomlFile = 'redwood.toml';

const envFile = '.env';
const encoding = 'utf8';

setTimeout(async () => {
  const envObject = await getEnvVariables();
  const redwoodTomlContent = await fs.readFile(redwoodTomlFile, encoding);
  updateRedwoodToml(redwoodTomlContent, envObject);

  clearPackageDependencies('package.json');
  clearPackageDependencies('api/package.json', [
    { package: '@redwoodjs/api', version: '4.4.3' },
    { package: '@redwoodjs/graphql-server', version: '4.4.3' },
  ]);
}, 0);

async function getEnvVariables() {
  const envData = await fs.readFile(envFile, encoding);

  const lines = envData
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 0 && !line.startsWith('#'));

  const linesWithValuesApplied = lines.map((line) => {
    let currentLine = line;

    while (currentLine.includes('${')) {
      const [variable] = currentLine.match(/(?<=\${).+?(?=})/);
      const [, value] = lines
        .find((line) => line.includes(variable))
        ?.split('=');

      if (value) {
        currentLine = currentLine.replace(`\${${variable}}`, value);
      } else {
        throw new Error(`Variable ${variable} is not defined in .env file`);
      }
    }
    return currentLine;
  });

  return linesWithValuesApplied.reduce((acc, curr) => {
    const [key, value] = curr.split('=');
    acc[key] = value;
    return acc;
  }, {});
}

function updateRedwoodToml(fileContent, envObject) {
  const keys = ['APP_PORT', 'API_PORT', 'API_URL'];

  let result = fileContent;
  for (const key of keys) {
    result = result.replace(new RegExp(`\\$\{${key}\}`), envObject[key]);
  }
  fs.writeFile(redwoodTomlFile, result, encoding);
}

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
