/**
 * db.js
 * Vishal Kumar
 */

`use strict`;

const mongoose = require(`mongoose`);
const {
	dbConfig: { mongoUri, dbOptions },
} = require(`../config`);

const init = async () => {
	mongoose.connection.once(`open`, async () => {
		console.info(`MongoDB event open`);
		console.debug(`MongoDB connected to ${mongoUri}`);

		mongoose.connection.on(`connected`, () => {
			console.info(`MongoDB event connected`);
		});

		mongoose.connection.on(`disconnected`, () => {
			console.warn(`MongoDB event disconnected`);
		});

		mongoose.connection.on(`reconnected`, () => {
			console.info(`MongoDB event reconnected`);
		});

		mongoose.connection.on(`error`, (err) => {
			console.error(`MongoDB event error: ` + err);
		});

		try {
			// Bootstrap dummy data
		} catch (error) {
			console.error(
				`\nMongo Syntax Error===>`,
				JSON.stringify(error),
				`---Mongo Syntax Error`
			);
		}
	});

	await mongoose.connect(mongoUri, dbOptions, (err) => {
		if (err) {
			console.error(`MongoDB connection error: ` + err);
			// eslint-disable-next-line no-undef
			process.exit(1);
		}
	});

	return mongoose;
};

module.exports = {
	init,
};
