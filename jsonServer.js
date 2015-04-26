var http = require('http');
var map = require('through2-map');
var url = require('url');

var portNumber = process.argv[2];

var server = http.createServer(function(req, res) {
	if (req.method == 'GET') {
		var urlParsed = url.parse(req.url, true);

		var pathName = urlParsed.pathname;
		var query = urlParsed.query;
		var qvalue = query.iso;

		var result = undefined;

		if (pathName === '/api/parsetime') {
			var timeStartIndex = qvalue.indexOf('T') + 1;
			var timeEndIndex = qvalue.indexOf('.');
			var time = qvalue.substring(timeStartIndex, timeEndIndex).split(':');
			console.log(time[0]);
			result = {
				"hour" : parseInt(time[0]) + 2,
				"minute" : parseInt(time[1]),
				"second" : parseInt(time[2])
			}
		}

		if (pathName === '/api/unixtime') {
			var timeUnix = (new Date(qvalue)).getTime();
			result = {
				"unixtime" : timeUnix
			}
		}

		res.writeHead(200, { 'Content-Type': 'application/json' })
		res.end(JSON.stringify(result));
	}
});

server.listen(portNumber);

/* reference solution:

var http = require('http')
	var url = require('url')

	function parsetime (time) {
		return {
			hour: time.getHours(),
			minute: time.getMinutes(),
			second: time.getSeconds()
		}
	}

	function unixtime (time) {
		return { unixtime : time.getTime() }
	}

	var server = http.createServer(function (req, res) {
		var parsedUrl = url.parse(req.url, true)
		var time = new Date(parsedUrl.query.iso)
		var result

		if (/^\/api\/parsetime/.test(req.url))
			result = parsetime(time)
		else if (/^\/api\/unixtime/.test(req.url))
			result = unixtime(time)

		if (result) {
			res.writeHead(200, { 'Content-Type': 'application/json' })
			res.end(JSON.stringify(result))
		} else {
			res.writeHead(404)
			res.end()
		}
	})
	server.listen(Number(process.argv[2]))


*/
