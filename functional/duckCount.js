function duckCount() {
  return (Array.prototype.slice.call(arguments, 0)).map(function(arg) {
    return Object.prototype.hasOwnProperty.call(arg,'quack');
  }).reduce(function(sum, isQuack) {
    if (isQuack === true) sum++;
    return sum;
  }, 0);
}

// It works but better use filter than reduce!!!

module.exports = duckCount;
