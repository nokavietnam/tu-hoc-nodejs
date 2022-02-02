const fs = require('fs');
const path = require('path');
const fsPromises = require('fs').promises;

// fs.readFile('./files/note.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// fs.readFile(path.join(__dirname, 'files', 'note.txt'), 'utf-8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// console.log('hello');

// process.on('uncaughtException', (err) => {
//   console.log(`There are an uncaught error: ${err}`);
//   process.exit(0);
// });

// fs.writeFile(
//   path.join(__dirname, 'files', 'reply.txt'),
//   'Nice to meet you',
//   (err) => {
//     if (err) throw err;
//     console.log('write complete');
//   }
// );

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, 'files', 'note.txt'),
      'utf-8'
    );
    console.log(data);
    await fsPromises.writeFile(
      path.join(__dirname, 'files', 'promiseWrite.txt'),
      data
    );
    await fsPromises.appendFile(
      path.join(__dirname, 'files', 'promiseWrite.txt'),
      '\n\nNice to meet you'
    );
    await fsPromises.rename(
      path.join(__dirname, 'files', 'promiseWrite.txt'),
      path.join(__dirname, 'files', 'writeComplete.txt')
    );
    const newData = await fsPromises.readFile(
      path.join(__dirname, 'files', 'writeComplete.txt'),
      'utf-8'
    );
    console.log(newData);
  } catch (err) {
    console.err(err);
  }
};

fileOps();
