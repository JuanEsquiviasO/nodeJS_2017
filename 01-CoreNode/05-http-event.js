'use strict';

const http = require('http').createServer();

function webServer(req, res) {
	res.writeHead(200, {'Content-Type':'text/html'});
	res.end('<h1>Hi Node.js from the web as an event handler now</h1>');
}

http
	.on( 'request', webServer )
	.on( 'error', err => console.log('An error occurred: ', err.message) )
	.listen( 3000, 'localhost', () => console.log('Server running on http://localhost:3000/') );
