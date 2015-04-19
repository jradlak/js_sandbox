var http = require('http');
var fs = require('fs');

var portNumber = process.argv[2];
var filePath = process.argv[3];

var server = http.createServer(function(req, res) {
	var fileStr = fs.createReadStream(filePath);
	fileStr.pipe(res);
});

server.listen(portNumber);