var fsFilteredModule = require('./fsFilteredModule');
var args = process.argv;

fsFilteredModule(args[2], args[3], function(err, data) {
	for (f in data) {
		console.log(data[f]);
	}
});

