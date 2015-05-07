function reduce(arr, fn, initial) {
  var result = undefined;
  function worker(arr, fn, work, ind) {
    if (arr.length == 0) {
      result = work;
      return;
    }
    var prev = work;
    var curr = fn(prev, arr[0], ind, arr);
    var arr = arr.slice(1);
    worker(arr, fn, curr, ++ind);
  }

  worker(arr, fn, initial, 0);
  return result;
}

// code above works and is correct, but as allways is for from perfection :)
// below reference solution:

/*
function reduce(arr, fn, initial) {
  return (function reduceOne(index, value) {
    if (index > arr.length - 1) return value // end condition
      return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
  })(0, initial) // IIFE. kick off recursion with initial values
}
*/

module.exports = reduce
