var through = require('through2');
var concat = require('concat-stream');
var split = require('split');
//var stream = through(write, end);

//function write(buffer, encoding, next) {
//  this.push(buffer.toString());
//  next();
//}


//function end(done) {
//  this.pipe(concat(function(body) {
//    var result = body.toString().split('').reverse().join('');
//    this.push(result);
//    console.log(result);
//  }));
//  done();
//}

process.stdin
  .pipe(concat(function(body) {
    var result = body.toString().split('').reverse().join('');
    console.log(result);
  }));
