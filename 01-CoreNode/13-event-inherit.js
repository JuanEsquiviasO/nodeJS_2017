'use strict';

const EventEmitter = require('events').EventEmitter,
			inherits = require('util').inherits;

function Clock() {
	setInterval( () => this.emit('tictac'), 1000 );
}

inherits(Clock, EventEmitter);

Clock.prototype.theTime = function () {
	let date = new Date(),
			hour = date.toLocaleTimeString();

	console.log(hour);
};

let swatch = new Clock();

swatch.on('tictac', () => {
	swatch.theTime();
});