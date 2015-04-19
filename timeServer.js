var portNumber = process.argv[2];

var net = require('net');
var server = net.createServer(function(socket) {
      socket.end(prepareDate());
});

function prepareDate() {
	//returning date format: "YYYY-MM-DD hh:mm"
	var data = new Date();
	var month = addZero(data.getMonth() + 1);
    
	var result = 
		addZero(data.getFullYear()) + '-' + month + '-' + addZero(data.getDate()) + 
		' ' + addZero(data.getHours()) + ':' + addZero(data.getMinutes());

	return result;
}

function addZero(value) {
	return (value < 10 ? '0' : '') + value;
}

server.listen(portNumber);