'use strict';

const http = require('http').createServer(webServer),
			form = require('fs').readFileSync('./assets/form.html'),
			querystring = require('querystring'),
			util = require('util');

let dataString = '';

function webServer(req, res) {
	if (req.method  == 'GET') {
		res.writeHead(200, {'Content-Type' : 'text/html'});
		res.end(form);
	}

	if (req.method == 'POST') {
		req
			.on('data', data => dataString += data)
			.on('end', () => {
				let dataObject = querystring.parse(dataString),
					dataJSON = util.inspect(dataObject),
					html = `
						<p>The data you sent by POST as a string is: ${dataString}</p>
						<p>The data you sent by POST as JSON are: ${dataJSON}</p>
					`;
				
				console.log(html);
				res.end(html);
			});
	}
}

http.listen( 3000, 'localhost', () => console.log('Server running on http://localhost:3000/') );