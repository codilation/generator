const clear = require('clear'),
			chalk = require('chalk'),
			figlet = require('figlet');

module.exports = () => {
	const colors = ['bgGreen', 'bgCyan', 'bgBlue', 'bgMagenta', 'bgRed', 'bgYellow'];
	let = i = 0;
	setInterval(() => {
		clear();
		console.log(
			chalk[colors[i]].bold(figlet.textSync(`  Codilate   `, {horizontalLayout: 'fitted'}))
		);
		i = i === colors.length - 1 ? 0 : i + 1;
	}, 300);
}

/*
____ 
/ ___|
| |    
| |___ 
\____|
*/