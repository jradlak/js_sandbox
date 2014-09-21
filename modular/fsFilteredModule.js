var fs = require('fs');
var path = require('path');


module.exports = function (directory, extension, callback) {
	fs.readdir(directory,  function (err, files) {
		if (err) 
			return callback(err);

		var result = [];
		var ext = "." + extension;
		for (f in files) {			
			if (path.extname(files[f]) === ext) {
				result.push(files[f]);
			}	
		}

		callback(null, result);
	});
}
