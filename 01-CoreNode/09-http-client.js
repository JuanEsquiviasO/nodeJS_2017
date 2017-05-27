'use strict';

const http = require('http'),
	options = {
		host : 'juanesquivias.github.io',
		port : 80,
		path : '/'
	};

http
	.get( options, res => console.log(`The website ${options.host} have answered. State Code: ${res.statusCode}`) )
	.on( 'error', err => console.log(`The website ${options.host} did not answer. State Code: ${err.code}. Error: ${err.message}`) );