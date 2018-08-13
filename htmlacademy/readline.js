const readline = require(`readline`);

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	prompt: `OHAY>`
});

rl.prompt();

rl.on(`line`, (line) => {
	line = line.trim();

	switch (line) {
		case `hello`:
			console.log("World");
			break;
		case `bye`:
			rl.close();
			return;
		default:
			console.log(`я хз че это '${line}' `)
			break;
	}
	rl.prompt();
}).on(`close`, () => {
	console.log(`Have a great day!`)
}).on(`error`, (err) => {
	console.log(err);
	process.exit(1);
});