/* https://github.com/airbnb/javascript */

'use strict';

console.log('Hi world from Node.js');
console.log(2+5);

// console.log(window);
console.log(global);

setInterval(() => {
	console.log( 'Hi Node.js' + new Date() )
}, 1000);
