/**
 * plugins.js
 * 2020-06-24
 * Vishal Kumar
 */

`use strict`;

const Inert = require(`@hapi/inert`);
const Vision = require(`@hapi/vision`);
const HapiSwagger = require(`hapi-swagger`);
const HapiTraffic = require(`hapi-plugin-traffic`);
const AuthBearer = require(`hapi-auth-bearer-token`);
const serverConfig = require(`./serverConfig`);

module.exports = [
	Inert,
	Vision,
	{
		plugin: HapiSwagger,
		options: serverConfig.swaggerOptions,
	},
	HapiTraffic,
	AuthBearer,
];
