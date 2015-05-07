var slice = Array.prototype.slice;

function test() {
	console.log(slice.call(arguments));
}

test("Ala", "ma", "kota.");