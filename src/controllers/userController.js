/**
 * userController.js
 * Vishal Kumar
 */

"use strict";

const { User: UserService } = require(`../services`);
const {
	i18n: { UNABLE_TO_SAVE, INCORRECT_PASSWORD, NOT_FOUND },
} = require(`../constants`);
const {
	UniversalFunctions: { encryptString, getTokenForUserId },
} = require(`../util`);

const create = async (payload) => {
	const encryptedPassword = encryptString(payload.password);
	const data = await UserService.create({
		...payload,
		password: encryptedPassword,
	});
	if (data && data._id) return data;
	else throw UNABLE_TO_SAVE;
};

const login = async (payload) => {
	const encryptedPassword = encryptString(payload.password);
	const user = await UserService.getMany({ email: payload.email });
	if (user && user.length > 0) {
		if (user && user[0].password == encryptedPassword) {
			const accessToken = await getTokenForUserId(user[0]._id);
			const updatedUser = await UserService.updateOne(
				{ email: payload.email },
				{ $set: { accessToken } }
			);
			return { accessToken: updatedUser.accessToken };
		} else throw INCORRECT_PASSWORD;
	} else throw NOT_FOUND;
};

const getCurrentInteger = (user) => {
	return { integer: user.integer };
};

const getNextInteger = async (user) => {
	const updatedUser = await UserService.updateOne(
		{ _id: user._id },
		{ $inc: { integer: 1 } }
	);
	return { integer: updatedUser.integer };
};

const resetInteger = async (user, payload) => {
	const updatedUser = await UserService.updateOne(
		{ _id: user._id },
		{ $set: { integer: payload.integer } }
	);
	return { integer: updatedUser.integer };
};

module.exports = {
	create,
	login,
	getCurrentInteger,
	getNextInteger,
	resetInteger,
};
