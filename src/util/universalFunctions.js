/**
 * universalFunctions.js
 * Vishal Kumar
 */

"use strict";

const Jwt = require(`jsonwebtoken`);
const MD5 = require(`md5`);
const { User: UserService } = require(`../services`);
const {
	server: { JWT_SECRET_KEY },
} = require(`../constants`);

const encryptString = (str) => {
	return MD5(MD5(str));
};

const getTokenForUserId = async (userId) => {
	return await Jwt.sign({ userId }, JWT_SECRET_KEY);
};

const verifyToken = async (token) => {
	return new Promise((resolve, reject) => {
		Jwt.verify(token, JWT_SECRET_KEY, async (err, decoded) => {
			if (err) reject(err);
			else {
				const user = await UserService.getMany({
					_id: decoded.userId,
					accessToken: token,
				});
				if (user && user.length > 0)
					resolve(deleteUnnecessaryUserData(user[0]));
				else reject(null);
			}
		});
	});
};

const deleteUnnecessaryUserData = (data) => {
	delete data.pwd;
	delete data.accessToken;
	delete data.__v;
	return data;
};

module.exports = {
	encryptString,
	getTokenForUserId,
	verifyToken,
	deleteUnnecessaryUserData,
};
