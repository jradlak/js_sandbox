var http = require('http');
var args = process.argv;

http.get(args[2], function(res) {
	res.setEncoding('utf8');
	res.on("data", function(data) {
		console.log(data)
	});
});
