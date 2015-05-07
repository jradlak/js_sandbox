function logger(namespace) {
	return function() {
		var args = [namespace];
		for (var i = 0; i < arguments.length; i++) {
			args.push(arguments[i]);
		}

		return console.log.apply(null, args);
	};
}

module.exports = logger;