const fs = require('fs').promises;
const path = require('path');

const encoding = 'utf8';
const envFile = path.join(__dirname, '..', '.env');

setTimeout(async () => {
  await updateEnvFile();
}, 0);

async function updateEnvFile() {
  const subDomainName = process.argv[2];
  const envData = await fs.readFile(envFile, encoding);
  if (subDomainName && subDomainName !== 'production') {
    const replaceText = subDomainName === 'master' ? 'stage' : subDomainName;

    const result = envData.replace(
      'DOMAIN_NAME=',
      `DOMAIN_NAME=${replaceText}.`
    );
    fs.writeFile(envFile, result, encoding);
  }
}
