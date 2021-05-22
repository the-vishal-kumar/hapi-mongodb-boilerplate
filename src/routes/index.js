/**
 * routes/index.js
 * Vishal Kumar
 */

`use strict`;

const userRoute = require(`./userRoute`);
const staticFilesRoute = require(`./staticFilesRoute`);
const {
	name,
	author,
	repository: { url },
} = require(`../../package.json`);

module.exports = [
	{
		method: `GET`,
		path: `/`,
		// eslint-disable-next-line no-unused-vars
		handler: (req, h) => {
			return `Welcome to <strong>${name}</strong>.<br>
			Go to <a href='/documentation'>API Documentation</a><br>
			Contact Author <a href='https://www.linkedin.com/in/the-vishal-kumar/'>${author}</a><br>
			Go to <a href='${url}'>Github Repo</a>`;
		},
		options: {
			description: `home`,
			notes: `home`,
			tags: [`api`],
			plugins: {
				"hapi-swagger": {
					payloadType: `form`,
				},
			},
		},
	},
	{
		method: `*`,
		path: `/{any*}`,
		// eslint-disable-next-line no-unused-vars
		handler: (req, h) => {
			return `404 Error! Page Not Found!`;
		},
		options: {
			description: `Page Not Found`,
		},
	},
	...userRoute,
	...staticFilesRoute,
];
