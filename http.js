const http = require('http')
const path = require('path');

const STATIC_BASE = path.join(__dirname, './public');

const requestHandler = (request, response) => {
	const fileLoc = path.resolve(STATIC_BASE, request.url);
	response.statusCode = 200;
	response.write(fileLoc);
	return response.end();
}

const server = http.createServer(requestHandler);

// listen for http
server.listen(3000, (err) => console.log(`HTTP server is listening on 3000`));
