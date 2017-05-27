'use strict';

'use strict';

let buf = new Buffer(26);

console.log(
	buf,
	buf.length,
	buf.toString()
);

for ( let i = 0; i < buf.length; i++ ) {
	// 97 en ASCII es a
	buf[i] = i + 97;
}

console.log( buf.toString() );