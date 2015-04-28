var http = require('http');
var trumpet = require('trumpet');
var concat = require('concat-stream');

var tr = trumpet();

process.stdin.pipe(tr);

var stream = tr.select('.loud').createStream();

var concatStdin = ''

process.stdin
  .pipe(concat(function(body) {
    var result = body.toString();
    concatStdin = result;

    filterStream();
}));

function filterStream() {
  var concatFilteredBefore = '';

  stream.pipe(concat(function(body) {
    var concatFilteredBefore = body.toString();
    toUpperStream(concatFilteredBefore);
  }));
}

function toUpperStream(concatFilteredBefore) {
    var result = concatStdin.replace(concatFilteredBefore, concatFilteredBefore.toUpperCase());
    console.log(result.substring(0, result.length - 1));
}

// działa, ale to powyższe rozwiązanie to jest jakiś koszmar ;) Poniżej rozwiązanie referencyjne

/*



*/
