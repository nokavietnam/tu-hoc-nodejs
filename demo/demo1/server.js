//console.log('Hello World');
//console.info(global);

const os = require('os');
const path = require('path');
const { add, subtract, multiply, divide } = require('./math');

console.info(add(2, 4));
console.info(subtract(10, 2));
console.info(multiply(2, 5));
console.info(divide(100, 5));

// console.info(os.homedir());
// console.info(os.version());
// console.info(os.type());

// console.info(__dirname);
// console.info(__filename);

// console.info(path.dirname(__filename));
// console.info(path.basename(__filename));
// console.info(path.extname(__filename));

// console.info(path.parse(__filename));
