const path = require('path');
const Promise = require('bluebird');
const fs = require('fs-extra');
const zipFolder = Promise.promisify(require('zip-folder'));

const archiveName = 'archive';
const dirName = __dirname;

function run() {
  fs
    .remove(`${dirName}/${archiveName}.zip`)
    .then(() => {
      return zipFolder(dirName, `${dirName}/${archiveName}.zip`);
    })
    .then(() => {
      console.log('success');
    })
    .catch(e => {
      console.log('shit');
    });
}

run();
