var fs = require('fs');
var args = process.argv;

var buffer = {}
fs.readFile(args[2],  function (err, data) {
  if (err) throw err;
  buffer = data;
  var numberOfLines = buffer.toString().split('\n').length - 1;
  console.log(numberOfLines);
});