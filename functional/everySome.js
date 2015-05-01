function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(function(element) {
      return goodUsers.some(function(element2) {
        return element.id === element2.id;
      });
    });
  };
}

var goodUsers = [
      { id: 1 },
      { id: 2 },
      { id: 3 }
];

// some tests:

var testAllValid = checkUsersValid(goodUsers);

console.log(testAllValid([
      { id: 2 },
      { id: 1 }
]));

console.log(testAllValid([
      { id: 2 },
      { id: 4 },
      { id: 1 }
]));


module.exports = checkUsersValid
