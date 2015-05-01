function countWords(inputWords) {
  var firstElement = inputWords[0];
  var init = {};
  init[firstElement] = 0;
  return inputWords.reduce(function(a, b) {
    if (a[b] == undefined) {
      a[b] = 1;
    } else {
      a[b] = a[b] + 1;
    }

    return a;
  }, init);
}

//test
console.log(countWords(['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']));

module.exports = countWords

// solution above is rather crappy ;) (although correct), below reference solution:
/*

function countWords(arr) {
     return arr.reduce(function(countMap, word) {
       countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
       return countMap
     }, {}) // second argument to reduce initialises countMap to {}
   }

*/
