/**
 * dbConfig.js
 * Vishal Kumar
 */

`use strict`;

require(`dotenv`).config();

// eslint-disable-next-line no-undef
const { NODE_ENV, MONGO_CLUSTER_URI } = process.env;
const { name } = require(`../../package.json`);
const mongoUri =
	MONGO_CLUSTER_URI ||
	`mongodb://localhost:27017/${name}-${NODE_ENV || `development`}`;

module.exports = {
	mongoUri,
	dbOptions: {
		useCreateIndex: true,
		useNewUrlParser: true,
		useUnifiedTopology: true,
		connectTimeoutMS: 1000,
	},
};
