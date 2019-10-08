const path = require('path');

const string = __filename;

console.log('path.sep:',path.sep);
console.log('path.delimiter:',path.delimiter);
console.log('---------------------------');
console.log('path.dirname():',path.dirname(string));
console.log('path.extname():',path.extname(string));
console.log('path.parse(): ',path.parse(string));
console.log('path.normalize(): ',path.normalize('C://users//skkim/path.js'));
console.log('path.relative():',path.relative('C://users//skkim//path.js','C://'));
console.log('path.resolve() :',path.resolve(__dirname,'..','users','.','/path.js'));
