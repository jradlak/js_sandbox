function arrayMap(arr, fn, thisArg) {
 	return arr.reduce(function(acc, current, index, arr) {
 		return acc.concat(fn.call(thisArg, current));
 	}, []);
}

// test:
/* 
console.log(arrayMap([ 18, 6, 21, 18, 21, 3, 24, 18, 6, 24, 6 ], function double(item) {
      return item * 3;
}));
*/

module.exports = arrayMap;
