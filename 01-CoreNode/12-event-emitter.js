'use strict';

const EventEmitter = require('events').EventEmitter,
	ee = new EventEmitter();

ee
	.on( 'myevent', message => console.log(message) )
	.once( 'myevent', message => console.log(`The first time: ${message}`) );

ee.emit('myevent', 'I am an event issuer');
ee.emit('myevent', 'Reissuing');
ee.removeAllListeners('myevent');
ee.emit('myevent', 'Redisplaying for the third time');