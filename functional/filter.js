function getShortMessages(messages) {
  return messages.map(function(m) {
    return m.message;
  }).filter(function(message) {
    return message.length < 50;
  });
}

module.exports = getShortMessages;
