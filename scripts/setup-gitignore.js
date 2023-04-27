/* eslint-disable */
const fs = require('fs').promises;
const path = require('path');
const encoding = 'utf8';

setTimeout(async () => {
  const pathToFile = path.join(__dirname, '..', '.gitignore');
  const packageContent = await fs.readFile(pathToFile, encoding);
  let result = packageContent.replace(/dist\n/, '');

  if (!result.includes('ssl_key.key')) {
    result = result + 'ssl_key.key \n';
  }

  if (!result.includes('ssl_certificate.crt')) {
    result = result + 'ssl_certificate.crt \n';
  }

  fs.writeFile(pathToFile, result, encoding);
}, 0);
