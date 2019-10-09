const { URL } = require('url');

const myURL = new URL('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
console.log('searchParams',myURL.searchParams);
console.log('searchParams.getAll()',myURL.searchParams.getAll('category'));
console.log('searchParams.get():',myURL.searchParams.get('limit'));
console.log('searchParams.has():',myURL.searchParams.has('page'));
// getall,get,has,keys,values,append,set,delete,toString 등등...
