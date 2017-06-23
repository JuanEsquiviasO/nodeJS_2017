'use strict';

const express = require('express'),
			app = express(),
			http = require('http').createServer(app),
			io = require('socket.io')(http),
			port = process.env.PORT || 3000,
			publicDir = express.static(`${__dirname}/public`);

app
	.use(publicDir)
	.get( '/', (req, res) => res.sendFile(`${publicDir}/index.html`) );

http.listen(port, () => console.log('Serving Express and Socket.io in localhost:%d', port) );

io.on('connection', (socket) => {
	socket.broadcast.emit('new user', { message: 'A new user has joined the chat' });

	socket.on( 'new message', message => io.emit('user says', message ) );

	socket.on('disconnect', () => {
		console.log('A user left the chat');
		socket.broadcast.emit('bye bye user', { message: 'A user left the chat' });
		
	});
});
