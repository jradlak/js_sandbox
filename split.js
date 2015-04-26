var through = require('through2');
var split = require('split');
var upper = 1;

process.stdin
  .pipe(split())
  .pipe(through(function(line, _, next) {
    var result = line.toString().toLowerCase();
    if (upper % 2 === 0) {
        result = result.toUpperCase();
    }

    this.push(result + '\n');
    upper++;
    next();
  })).pipe(process.stdout);
;
