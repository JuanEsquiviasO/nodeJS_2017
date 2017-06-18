'use strict';

const express = require('express'),
			app = express();

app
	.get( '/', (req, res) => res.end('<h1>Hello world from Express.js</h1>') )
	// http://localhost:3000/user/19-fokker-32
	.get( '/user/:id-:name-:age', (req, res) => {
		res.end(`
			<h1>
				${req.params.name}, welcome to Express, your id is <b>${req.params.id}</b> and you have ${req.params.age} years old.
			</h1>
		`);
	})
	.get( '/search', (req, res) => {
		res.end(`
			<h1>
				Welcome to Express, your results of search are: <mark>${req.query.s}</mark>
			</h1>
		`)
	})
	.listen( 3000, () => console.log('Starting Express in port 3000') )