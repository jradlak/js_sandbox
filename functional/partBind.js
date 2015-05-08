module.exports = function(namespace) {
	return function() {
		var args = [namespace].concat(Array.prototype.slice.call(arguments));
		return console.log.bind(undefined, args);
	};
};

// sulution above id OK, but thin one below is simpler:
/*
	module.exports = function(namespace) {
      return console.log.bind(console, namespace)
    }
*/
