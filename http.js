const http = require('http')
const path = require('path');

const STATIC_BASE = path.join(__dirname, './public');

const requestHandler = (request, response) => {
	const fileLoc = path.resolve(STATIC_BASE, request.url);
	res.statusCode = 200;
	res.write(fileLoc);
	return res.end();
}

const server = http.createServer(requestHandler)

export.default = http;
