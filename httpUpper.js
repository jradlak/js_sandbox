var http = require('http');
var through = require('through2');

function write (buf, _, next) {
  this.push(buf.toString().toUpperCase());
  next();
}

function end (done) { done(); }

var server = http.createServer(function (req, res) {
  if (req.method === 'POST') {
    req.pipe(through(write, end)).pipe(res);
  } else {
    res.end('send me a POST\n');
  }
});

server.listen(process.argv[2]);
