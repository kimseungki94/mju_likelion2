const url = require('url');

const URL = url.URL;
const myURL = new URL('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
console.log('new URL():',myURL);
console.log('url.format()',url.format(myURL));
console.log('--------------------------------');
const parsedUrl = url.parse('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
console.log('url.parse():',parsedUrl);
console.log('url.format()',url.format(parsedUrl));
