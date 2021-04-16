const fs = require('fs');

const writeFile = fileContent => {
  fs.unlinkSync('./dist/index.html');
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', fileContent, err => {
      if (err) {
        reject(err);
        console.log('fail');
        return;
      }
      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};

// writeFile('test2');

module.exports = writeFile;