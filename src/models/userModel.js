/**
 * userModel.js
 * Vishal Kumar
 */

`use strict`;

const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;
const {
	i18n: {
		gender: { FEMALE, MALE, UNDISCLOSED },
	},
} = require(`../constants`);

const userSchema = new Schema(
	{
		firstName: {
			type: String,
			required: true,
			index: true,
		},
		lastName: {
			type: String,
			default: ``,
			index: true,
			sparse: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			index: true,
		},
		password: {
			type: String,
			required: true,
		},
		gender: {
			type: String,
			enum: [FEMALE, MALE, UNDISCLOSED],
			default: UNDISCLOSED,
		},
		accessToken: {
			type: String,
			trim: true,
			default: null,
			index: true,
			sparse: true,
		},
		integer: {
			type: Number,
			default: 0,
		},
		isDeleted: {
			type: Boolean,
			default: false,
			index: true,
		},
		createdAt: Number,
		updatedAt: Number,
	},
	{
		// Make Mongoose use Unix time (seconds since Jan 1, 1970)
		timestamps: { currentTime: () => Math.floor(Date.now() / 1000) },
	}
);

userSchema
	.virtual(`fullName`)
	.get(() => {
		return `${this.firstName} ${this.lastName}`;
	})
	.set((x) => {
		// `x` is the value being set, so use the value to set
		// `firstName` and `lastName`.
		const firstName = x.substring(0, x.indexOf(` `));
		const lastName = x.substring(x.indexOf(` `) + 1);
		this.set({ firstName, lastName });
	});

module.exports = mongoose.model(`User`, userSchema);
