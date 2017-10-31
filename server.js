const io = require('./socket.js');
const http = require('./http.js');
const {
	SOCKET_PORT,
	HTTP_PORT,
} = process.env;

// listen for socket
io.listen(SOCKET_PORT || 9000, (err) => console.log(`Socket server is listening on ${SOCKET_PORT}`));

// listen for http
http.listen(HTTP_PORT || 3000, (err) => console.log(`HTTP server is listening on ${HTTP_PORT}`));
