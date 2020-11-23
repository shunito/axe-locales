#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const localeJson = {
  "locales": []
};

const axeDir = path.dirname(require.resolve('axe-core'));
const localeDir = path.join(axeDir, 'locales');
const outputFile = path.resolve('src/locales.json');

const buildLocaleFile = (dirPath) => {
  fs.readdir(dirPath, {withFileTypes: true}, (err, dirents) => {
    if (err) {
      console.error(err);
      return;
    }

    for (const dirent of dirents) {
      if (dirent.isFile() && path.extname(dirent.name) === '.json') {
        localeJson.locales.push( path.basename(dirent.name, '.json'));
      }
    }

    const jsonString = JSON.stringify(localeJson);

    // Write Locale list
    fs.writeFile(outputFile, jsonString, (err) => {
      if (err) throw err;
      console.log('Locale list builded');
      console.log(localeJson);
    });
  });
}

console.log("Build axe-locales");
console.log(`axe-core module: ${axeDir}`);
buildLocaleFile(localeDir);
