/**
 * index.js
 * Vishal Kumar
 */

`use strict`;
// eslint-disable-next-line no-undef
global.__basedir = __dirname;

// eslint-disable-next-line no-undef
const nodeVersion = parseInt(process.versions.node);
if (nodeVersion < 12) throw `Please upgrade Node version to 12 or higher`;

const {
	db: { init: dbInit },
	server: { init: serverInit },
} = require(`./app`);

const init = async () => {
	try {
		const mongoose = await dbInit();
		console.log(
			`DB connected to ${mongoose.connections[0].host}:${mongoose.connections[0].port}/${mongoose.connections[0].name}`
		);
		const server = await serverInit();
		console.log(`Server listening on ${server.info.uri}`);
	} catch (error) {
		console.log(
			`\nFatal Error:::***>`,
			JSON.stringify(error),
			`---Fatal Error`
		);
	}
};

// eslint-disable-next-line no-undef
process.on(`unhandledRejection`, (err) => {
	console.log(`unhandledRejection===>`, err);
	// eslint-disable-next-line no-undef
	process.exit(1);
});

init();
