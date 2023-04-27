const fs = require('fs').promises;

const envFile = '/usr/share/.env';
const nginxFile = '/etc/nginx/conf.d/default.conf';
const encoding = 'utf8';

setTimeout(async () => {
  prepareNginxConfig();
}, 0);

async function prepareNginxConfig() {
  const envData = await fs.readFile(envFile, encoding);
  const [, domainName] = envData
    .split('\n')
    .find((line) => line.includes('DOMAIN_NAME'))
    .split('=');
  const nginxContent = (await fs.readFile(nginxFile, encoding)).replace(
    /\${DOMAIN_NAME}/g,
    domainName
  );
  fs.writeFile(nginxContent, nginxFile, encoding);
}

//fs
