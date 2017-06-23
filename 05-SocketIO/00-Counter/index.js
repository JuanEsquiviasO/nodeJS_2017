'use strict'

const http = require('http').createServer(server),
			fs = require('fs'),
			io = require('socket.io')(http);

let conexions = 0;

function server(req, res) {
	fs.readFile('index.html', (err, data) => {
		if (err) {
			res.writeHead(500,{'Content-Type' : 'text/html'});
			return res.end('<h1>Internal Server Error</h1>');
		} else {
			res.writeHead(200,{'Content-Type' : 'text/html'});
			return res.end(data, 'utf-8');
		}
	});
}

http.listen(3000, () => console.log('Server running from localhost:3000'));

io.on('connection', (socket) => {
	socket.emit('hello', { message: 'Hi world with socket.io' });

	socket.on('another method of my invention', data => console.log(data) );

	conexions++;

	console.log(`Active connections: ${conexions}`);

	socket.emit('connect users', { numbers : conexions });
	socket.broadcast.emit('connect users', { numbers: conexions });

	socket.on('disconnect', () => {
		conexions--;
	console.log(`Active connections: ${conexions}`);
	socket.broadcast.emit('connect users', { numbers: conexions });
	});
});