/**
 * config/index.js
 * Vishal Kumar
 */

"use strict";

const serverConfig = require(`./serverConfig`);
const dbConfig = require(`./dbConfig`);
const plugins = require(`./plugins`);

module.exports = {
	serverConfig,
	dbConfig,
	plugins,
};
