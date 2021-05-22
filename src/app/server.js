/**
 * server.js
 * Vishal Kumar
 */

`use strict`;

const Hapi = require(`@hapi/hapi`);
const Routes = require(`../routes`);
const {
	serverConfig: { port },
	plugins,
} = require(`../config`);
const {
	UniversalFunctions: { verifyToken },
} = require(`../util`);

const paths = [
	`/swaggerui/swagger-ui.css`,
	`/swaggerui/extend.js`,
	`/swaggerui/swagger-ui-standalone-preset.js`,
	`/swaggerui/swagger-ui-bundle.js`,
	`/swagger.json`,
	`/swaggerui/favicon-32x32.png`,
];

const init = async () => {
	const server = Hapi.server({
		port,
	});

	await server.register(plugins);

	server.auth.strategy(`userAuth`, `bearer-access-token`, {
		accessTokenName: `accessToken`,
		// eslint-disable-next-line no-unused-vars
		validate: async (request, token, h) => {
			try {
				const user = await verifyToken(token);
				if (user) return { isValid: true, credentials: user };
				else return { isValid: false, credentials: {} };
			} catch (error) {
				return { isValid: false, credentials: {} };
			}
		},
	});

	server.events.on(`response`, (request) => {
		let payload = {};
		switch (request.method) {
		case `get`:
		case `delete`:
			payload = request.query;
			break;
		case `post`:
		case `put`:
			payload = request.payload;
			break;
		default:
			break;
		}
		const traffic = request.traffic();
		const indexOfPath = paths.indexOf(request.path);
		if (indexOfPath == -1) {
			console.info(
				`\n${request.method} ${request.path} ` +
          `recv=${traffic.recvPayload}/${traffic.recvRaw} ` +
          `sent=${traffic.sentPayload}/${traffic.sentRaw} ` +
          // `start=${new Date(traffic.timeStart)} ` +
          // `finish=${new Date(traffic.timeFinish)} ` +
          `duration=${traffic.timeDuration}ms ` +
          `statusCode=${request.response.statusCode} \n` +
          `payload=${JSON.stringify(payload)}`
			);
		}
	});

	server.route(Routes);

	await server.start();

	return server;
};

module.exports = {
	init,
};
