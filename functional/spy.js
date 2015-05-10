function Spy(target, method) {
	var original = target[method];
	var c = 0;
	target[method] = function() {
		c++;
		original.apply(this, arguments); 
	};

	return {
		get count() { return c; }
	};
}

//test:
/*
var spy = Spy(console, "log");

console.log("rad");
console.log("jetsem");

console.log(spy.count);
*/

module.exports = Spy;