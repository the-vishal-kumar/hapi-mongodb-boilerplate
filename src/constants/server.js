/**
 * i18n.js
 * Vishal Kumar
 */

`use strict`;

const crypto = require(`crypto`);

// The signing key comes from the environment. Without one, a random key is
// generated per process, so tokens stop working after a restart.
// eslint-disable-next-line no-undef
const { JWT_SECRET_KEY } = process.env;
if (!JWT_SECRET_KEY) {
	console.warn(`JWT_SECRET_KEY is not set; using a random key for this process`);
}

module.exports = {
	JWT_SECRET_KEY: JWT_SECRET_KEY || crypto.randomBytes(32).toString(`hex`),
};
