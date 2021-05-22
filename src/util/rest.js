/**
 * rest.js
 * Vishal Kumar
 */

`use strict`;

const Boom = require(`boom`);
const {
	i18n: { DB_ERROR },
} = require(`../constants`);

const successAction = (data = null, customSuccessData) => ({
	// eslint-disable-next-line no-prototype-builtins
	statusCode: typeof customSuccessData == `object` && customSuccessData.hasOwnProperty(`statusCode`) ? customSuccessData.statusCode : 200,
	// eslint-disable-next-line no-prototype-builtins
	message: typeof customSuccessData == `object` && customSuccessData.hasOwnProperty(`customMessage`) ? customSuccessData.customMessage : 200,
	data,
});

const failAction = (data) => {
	// eslint-disable-next-line no-prototype-builtins
	if (typeof data == `object` && data.hasOwnProperty(`statusCode`) && data.hasOwnProperty(`customMessage`) ) {
		const errorToSend = Boom.create(data.statusCode, data.customMessage);
		errorToSend.output.payload.responseType = data.type;
		if (data.customErrorData) {
			errorToSend.output.payload.customErrorData = data.customErrorData;
		}
		return errorToSend;
	} else {
		let errorToSend = ``;
		if (typeof data == `object`) {
			if (data.name == `MongoError`) {
				errorToSend += DB_ERROR;
				if (data.code == 11000) {
					let duplicateValue = data.errmsg && data.errmsg.substr(data.errmsg.lastIndexOf(`{ : "`) + 5);
					duplicateValue = duplicateValue.replace(`}`, ``);
					errorToSend += `Duplicate entry : ` + duplicateValue;
				}
			} else if (data.name == `ApplicationError`) {
				errorToSend += `Application error: `;
			} else if (data.name == `ValidationError`) {
				errorToSend += `Application error: ` + data.message;
			} else if (data.name == `CastError`) {
				errorToSend += `Cast error: ` + data.value;
			}
		} else {
			errorToSend = data;
		}
		let customErrorMessage = errorToSend;
		if (typeof customErrorMessage == `string`) {
			if (errorToSend.indexOf(`[`) > -1) {
				customErrorMessage = errorToSend.substr(errorToSend.indexOf(`[`));
			}
			customErrorMessage = customErrorMessage && customErrorMessage.replace(/"/g, ``);
			customErrorMessage = customErrorMessage && customErrorMessage.replace(`[`, ``);
			customErrorMessage = customErrorMessage && customErrorMessage.replace(`]`, ``);
		}
		throw Boom.badRequest(customErrorMessage);
	}
};

module.exports = {
	successAction,
	failAction,
};
