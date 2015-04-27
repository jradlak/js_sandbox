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

var concatStdin = ''

process.stdin
  .pipe(concat(function(body) {
    var result = body.toString();
    concatStdin = result;
  }));


var concatFilteredBefore = '';

stream.pipe(stream).pipe(concat(function(body) {
  var result = body.toString();
  concatFilteded = result;
}));

var concatFiltered = ''

// dokończyć: zamiana łańcucha przefiltrowanego przed upperCase na po upperCase

stream.pipe(stream).pipe(concat(function(body) {
  var result = body.toString();
  concatFilteded = result;
}));
