var fs = require('fs');
var args = process.argv;

var buffer = fs.readFileSync(args[2]);
var numberOfLines = buffer.toString().split('\n').length - 1;
console.log(numberOfLines);