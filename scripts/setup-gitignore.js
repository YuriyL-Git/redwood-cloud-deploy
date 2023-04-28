/* eslint-disable */
const fs = require('fs').promises;
const path = require('path');
const encoding = 'utf8';

setTimeout(async () => {
  const pathToFile = path.join(__dirname, '..', '.gitignore');
  const packageContent = await fs.readFile(pathToFile, encoding);
  let result = packageContent.replace(/dist\n/, '');

  fs.writeFile(pathToFile, result, encoding);
}, 0);
