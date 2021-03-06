'use strict';

const http = require('http'),
	options = {
		host : 'juanesquivias.github.io',
		port : 80,
		path : '/cursos'
	};

let htmlCode = '';

function httpClient(res) {
	console.log(`El sitio ${options.host} ha respondido. Código de Estado: ${res.statusCode}`);
	res.on('data', data => {
		htmlCode += data;
		console.log( data, data.toString() );
	});
}

function httpError(err) {
	console.log(`El sitio ${options.host} no respondió. Código de Estado: ${err.code}. Error: ${err.message}`);
}

function webServer(req, res) {
	res.writeHead(200, {'Content-Type':'text/html'});
	res.end(htmlCode);
}

//instancia cliente de HTTP
http
	.get(options, httpClient)
	.on('error', httpError);

//instancia servidor de HTTP
http
	.createServer(webServer)
	.listen( 3000, 'localhost', () => console.log('Server running on http://localhost:3000/') );