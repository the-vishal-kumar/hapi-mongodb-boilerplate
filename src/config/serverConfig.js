/**
 * serverConfig.js
 * Vishal Kumar
 */

`use strict`;

const { name, version } = require(`../../package`);
// eslint-disable-next-line no-undef
const port = process.env.PORT || 8000;

module.exports = {
	port,
	swaggerOptions: {
		info: {
			title: `${name} API Documentation`,
			version: version,
			contact: {
				name: `Vishal Kumar`,
				url: `https://www.linkedin.com/in/the-vishal-kumar/`,
				email: `vishal194kumar@gmail.com`,
			},
		},
	},
};
