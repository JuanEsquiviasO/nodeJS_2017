'use strict';

const Clock = require('./Clock'),
			myData = require('./my-data'),
			swatch = new Clock();

console.log(
	myData.name,
	myData.email,
	myData._phone
);

swatch.theTime();