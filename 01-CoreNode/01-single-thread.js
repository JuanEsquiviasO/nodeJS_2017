/*Single Thread*/

'use strict';

function singleThread() {
	process.argv[2] = 'Learning Node.js';
	process.argv[3] = 19;
	process.argv[4] = null;
	process.argv[5] = true;

	console.log('---------------------------------------------');
	console.log('         THE PROCESS OF NODE.JS         ');
	console.log('Process ID.................. ' + process.pid);
	console.log('Title....................... ' + process.title);
	console.log('Node Directory.............. ' + process.execPath);
	console.log('Current Directory........... ' + process.cwd());
	console.log('Node version................ ' + process.version);
	console.log('Versions Dependencies....... ' + process.versions);
	console.log('Platform (S.O.)............. ' + process.platform);
	console.log('Architecture (S.O.)......... ' + process.arch);
	console.log('Node Active Time............ ' + process.uptime());
	console.log('Arguments of the process.... ' + process.argv);
	console.log('---------------------------------------------');
	
	
	console.log(
		process.argv[0],
		process.argv[1]
	);
	
	let key = 0;

	for (key in process.argv) {
		console.log( process.argv[key] );
	}
}

singleThread();