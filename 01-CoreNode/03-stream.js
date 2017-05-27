'use strict';

const fs = require('fs');

let readStream = fs.createReadStream('./assets/names.txt'),
		writeStream = fs.createWriteStream('./assets/names_copia.txt');

readStream.pipe(writeStream);

readStream
	.on( 'data', chunk => {
		console.log(chunk);
		console.log( chunk.toString() );
		console.log('I read:', chunk.length, 'characters');
	} )
	.on( 'end', () => console.log('I over to read the file') )
	.on( 'error', error => console.log('An error occurred: ', error.message) );