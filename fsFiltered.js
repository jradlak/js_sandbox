var fs = require('fs');
var path = require('path');
var args = process.argv;

var buffer = {};
fs.readdir(args[2],  function (err, files) {
	var ext = "." + args[3];
	for (var f in files) {			
		if (path.extname(files[f]) === ext) {
			console.log(files[f]);
		}
	}
});