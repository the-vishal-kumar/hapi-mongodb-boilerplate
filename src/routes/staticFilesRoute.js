/**
 * staticFilesRoute.js
 * Vishal Kumar
 */

"use strict";

module.exports = [
	{
		method: `GET`,
		path: `/favicon.ico`,
		options: {
			handler: (req, h) => {
				// eslint-disable-next-line no-undef
				return h.file(`${__basedir}/public/favicon.ico`);
			},
			description: `fetch favicon`,
			notes: `fetch favicon`,
			tags: [`app`],
			plugins: {
				"hapi-swagger": {
					payloadType: `form`,
				},
			},
		},
	},
];
