/* eslint-disable */
const fs = require('fs').promises;
const subdomainName = process.argv[2];

const redwoodTomlFile = 'redwood.toml';
const nginxFile = 'web/nginx.conf';

const envFile = '.env';
const encoding = 'utf8';

setTimeout(async () => {
  const envObject = await getEnvVariables();

  const redwoodTomlContent = await fs.readFile(redwoodTomlFile, encoding);
  updateRedwoodToml(redwoodTomlContent, envObject);

  const nginxContent = (await fs.readFile(nginxFile, encoding)).replace(
    /\${DOMAIN_NAME}/g,
    envObject['domainName']
  );
  fs.writeFile(nginxFile, nginxContent, encoding);
}, 0);

async function getEnvVariables() {
  const envData = await fs.readFile(envFile, encoding);
  const lines = envData
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 0 && !line.startsWith('#'));

  const domainNameIndex = lines.findIndex((line) =>
    line.includes('DOMAIN_NAME')
  );
  const [domainNameKey, domainName] = lines[domainNameIndex].split('=');

  if (subdomainName) {
    lines[domainNameIndex] = `${domainNameKey}=${subdomainName}.${domainName}`;
  }

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

  const result = linesWithValuesApplied.reduce((acc, curr) => {
    const [key, value] = curr.split('=');
    acc[key] = value;
    return acc;
  }, {});

  result['domainName'] = domainName;
  return result;
}

function updateRedwoodToml(fileContent, envObject) {
  const keys = ['APP_PORT', 'API_PORT', 'API_URL', 'APP_NAME'];

  let result = fileContent;
  for (const key of keys) {
    result = result.replace(new RegExp(`\\$\{${key}\}`), envObject[key]);
  }
  fs.writeFile(redwoodTomlFile, result, encoding);
}
