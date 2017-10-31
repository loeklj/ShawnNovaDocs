const http = require('http')
const path = require('path');
const fs = require('fs');

const STATIC_BASE = path.join(__dirname, './public');

const requestHandler = (request, response) => {
  let url = request.url;
  if (url === '/') url = 'index.html';
  const fileLoc = path.resolve(STATIC_BASE, url);
  console.log({ fileLoc })
  const stream = fs.createReadStream(fileLoc);
	response.statusCode = 200;
  stream.pipe(response);
}

const server = http.createServer(requestHandler);

// listen for http
server.listen(3000, (err) => console.log(`HTTP server is listening on 3000`));
