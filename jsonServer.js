var http = require('http');
var map = require('through2-map');
var url = require('url');

var portNumber = process.argv[2];

var server = http.createServer(function(req, res) {
	if (req.method == 'GET') {
		var urlParsed = url.parse(req.url, true);
		
		var pathName = urlParsed.pathname;
		if (pathName === '/api/parsetime') {
			var query = urlParsed.query;
			console.log(query);
		}
		/*
		req.pipe(map(function (chunk) {
			return chunk.toString().toUpperCase();
		})).pipe(res);
		*/
	}
});

server.listen(portNumber);