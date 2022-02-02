const { format } = require('date-fns');
const { v4: uuid } = require('uuid');

const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const folderLogDefault = 'logs';
const fileLogDefault = 'eventLog.txt';

const logEvent = async (message) => {
  const dateTime = `${format(new Date(), 'dd/MM/yyyy hh:mm:ss')}`;
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
  console.log(logItem);
  try {
    if (!fs.existsSync(path.join(__dirname, folderLogDefault))) {
      await fsPromises.mkdir(path.join(__dirname, folderLogDefault));
    }

    await fsPromises.appendFile(
      path.join(__dirname, folderLogDefault, fileLogDefault),
      logItem
    );
  } catch (err) {
    console.error(err);
  }
};

module.exports = logEvent;
