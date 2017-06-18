'use strict';

const express = require('express'),
			app = express();

app
	.get( '/', (req, res) => {
		// res.end('<h1>Hello world from Express.js</h1>')
		res.send('<h1>Hello world from Express.js</h1>')
	})
	.get( '/le', (req, res) => {
		res.redirect(301, 'https://www.lego.com');
	})
	.get( '/json', (req, res) => {
		res.json({
			name : "Fokker",
			age: 27,
			alias : "Skull001"
		});
	})
	.get( '/render', (req, res) => {
		// fixed config Express.js
		res.render(`${__dirname}/index.html`);
	})

	.listen( 3000, () => console.log('Starting Express in port 3000') )