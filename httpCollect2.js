var bl = require('bl');
var http = require('http');
var args = process.argv;

function collect(url, ready) {
	http.get(url, function(res) {
		res.setEncoding('utf8');
		res.pipe(bl(function(err, data) {
			console.log((data.toString()));
			ready();
		}));
	});
}

collect(args[2], function ready () {
	collect(args[3], function ready2 () {
		collect(args[4], function ready3 () {
		});
	});
});
