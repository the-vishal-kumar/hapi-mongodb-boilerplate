/**
 * dbConfig.js
 * Vishal Kumar
 */

"use strict";

require(`dotenv`).config();
// eslint-disable-next-line no-undef
const NODE_ENV = process.env.NODE_ENV || `development`;
const { name } = require(`../../package.json`);

// eslint-disable-next-line no-undef
const mongoUri = process.env.MONGO_CLUSTER_URI || `mongodb://localhost:27017/${name}-${NODE_ENV}`;

module.exports = {
	mongoUri,
	dbOptions: {
		useCreateIndex: true,
		useNewUrlParser: true,
		useUnifiedTopology: true,
		connectTimeoutMS: 1000,
	},
};
