'use strict';

const express = require('express'),
			app = express();

app
	.get( '/', (req, res) => res.end('<h1>Hello world from Express.js</h1>') )
	.listen( 3000, () => console.log('Starting Express in port 3000') );