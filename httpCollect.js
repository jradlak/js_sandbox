//solition to LEARNYOUNODE HTTP COLLECT problem

var bl = require('bl');
var http = require('http');
var args = process.argv;

http.get(args[2], function(res) {
	res.setEncoding('utf8');
	res.pipe(bl(function(err, data) {
		console.log(data.toString().length);
		console.log(data.toString());
	}));
});

