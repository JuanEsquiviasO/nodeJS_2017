'use strict';

const http = require('http');

function webServer(req, res) {
	res.writeHead(200, {'Content-Type':'text/html'});
	res.end('<h1>Hi Node.js from the web</h1>');
}

http
	.createServer(webServer)
	.listen( 3000, 'localhost', () => console.log('Server running on http://localhost:3000/') );