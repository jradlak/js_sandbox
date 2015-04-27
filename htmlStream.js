var http = require('http');
var trumpet = require('trumpet');
var through = require('through2');
var stream2 = through(write, end);

var tr = trumpet();

function write(buffer, encoding, next) {
  this.push(buffer.toString().toUpperCase());
  next();
}

function end(done) {
  done();
}

process.stdin.pipe(tr);

var stream = tr.select('.loud').createStream();

stream.pipe(stream2).pipe(process.stdout);
