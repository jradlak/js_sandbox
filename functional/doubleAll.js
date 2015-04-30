function doubleAll(numbers) {
  var doubles = numbers.map(function(num) {
    return num * 2;
  });

  return doubles;
}

module.exports = doubleAll
