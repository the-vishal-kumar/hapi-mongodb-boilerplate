/**
 * userRoute.js
 * Vishal Kumar
 */

`use strict`;

const Joi = require(`@hapi/joi`);
const { User: UserController } = require(`../controllers`);
const {
	Rest: { successAction, failAction },
} = require(`../util`);
const {
	i18n: {
		gender: { UNDISCLOSED },
	},
} = require(`../constants`);

module.exports = [
	{
		method: `POST`,
		path: `/user/signup`,
		// eslint-disable-next-line no-unused-vars
		handler: async (req, h) => {
			try {
				const data = await UserController.create(req.payload);
				return successAction(data);
			} catch (error) {
				return failAction(error);
			}
		},
		options: {
			description: `create a user account`,
			notes: `create a user account`,
			tags: [`api`, `User`],
			plugins: {
				"hapi-swagger": {
					payloadType: `form`,
				},
			},
			validate: {
				payload: Joi.object({
					firstName: Joi.string().trim().required(),
					lastName: Joi.string().trim().required(),
					email: Joi.string().trim().email().required(),
					password: Joi.string().trim().min(6).required().strict(),
					confirmPassword: Joi.string()
						.trim()
						.valid(Joi.ref(`password`))
						.required()
						.strict(),
					gender: Joi.string().trim().optional().default(UNDISCLOSED),
					// .valid([
					//     MALE,
					//     FEMALE,
					//     UNDISCLOSED,
					// ]),
				}),
				failAction,
			},
		},
	},
	{
		method: `POST`,
		path: `/user/login`,
		// eslint-disable-next-line no-unused-vars
		handler: async (req, h) => {
			try {
				const data = await UserController.login(req.payload);
				return successAction(data);
			} catch (error) {
				return failAction(error);
			}
		},
		options: {
			description: `login a user account`,
			notes: `login a user account`,
			tags: [`api`, `User`],
			plugins: {
				"hapi-swagger": {
					payloadType: `form`,
				},
			},
			validate: {
				payload: Joi.object({
					email: Joi.string().trim().email().required(),
					password: Joi.string().trim().min(6).required().strict(),
				}),
				failAction,
			},
		},
	},
	{
		method: `GET`,
		path: `/user/getCurrentInteger`,
		// eslint-disable-next-line no-unused-vars
		handler: async (req, h) => {
			try {
				const user = req && req.auth && req.auth.credentials;
				const data = UserController.getCurrentInteger(user);
				return successAction(data);
			} catch (error) {
				return failAction(error);
			}
		},
		options: {
			auth: `userAuth`,
			description: `get current integer`,
			notes: `get current integer`,
			tags: [`api`, `Integer`],
			plugins: {
				"hapi-swagger": {
					payloadType: `form`,
				},
			},
			validate: {
				failAction,
			},
		},
	},
	{
		method: `GET`,
		path: `/user/getNextInteger`,
		// eslint-disable-next-line no-unused-vars
		handler: async (req, h) => {
			try {
				const user = req && req.auth && req.auth.credentials;
				const data = await UserController.getNextInteger(user);
				return successAction(data);
			} catch (error) {
				return failAction(error);
			}
		},
		options: {
			auth: `userAuth`,
			description: `get next integer`,
			notes: `get next integer`,
			tags: [`api`, `Integer`],
			plugins: {
				"hapi-swagger": {
					payloadType: `form`,
				},
			},
			validate: {
				failAction,
			},
		},
	},
	{
		method: `PUT`,
		path: `/user/resetInteger`,
		// eslint-disable-next-line no-unused-vars
		handler: async (req, h) => {
			try {
				const user = req && req.auth && req.auth.credentials;
				const data = await UserController.resetInteger(user, req.payload);
				return successAction(data);
			} catch (error) {
				return failAction(error);
			}
		},
		options: {
			auth: `userAuth`,
			description: `reset integer`,
			notes: `reset integer`,
			tags: [`api`, `Integer`],
			plugins: {
				"hapi-swagger": {
					payloadType: `form`,
				},
			},
			validate: {
				payload: Joi.object({
					integer: Joi.number().positive().required(),
				}),
				failAction,
			},
		},
	},
];
