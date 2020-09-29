/**
 * wrapperService.js
 * Vishal Kumar
 */

"use strict";

const Model = require(`../models`);

module.exports = (model) => {
	const Services = {};

	Services.create = async (objToSave) => {
		return await new Model[model](objToSave).save();
	};

	Services.createMany = async (arrToSave) => {
		return await Model[model].insertMany(arrToSave);
	};

	Services.getMany = async (criteria, projection, options = {}) => {
		options.lean = true;
		options.virtuals = true;
		return await Model[model].find(criteria, projection, options);
	};

	Services.getPopulatedMany = async (
		criteria,
		projection,
		populateQuery,
		options = {}
	) => {
		options.lean = true;
		options.virtuals = true;
		return await Model[model]
			.find(criteria, projection, options)
			.populate(populateQuery)
			.exec();
	};

	Services.updateOne = async (criteria, dataToUpdate, options = {}) => {
		options.new = true;
		options.lean = true;
		options.useFindAndModify = false;
		options.virtuals = true;
		return await Model[model].findOneAndUpdate(criteria, dataToUpdate, options);
	};

	Services.updateMany = async (criteria, dataToUpdate, options = {}) => {
		options.new = true;
		options.lean = true;
		options.virtuals = true;
		return await Model[model].updateMany(criteria, dataToUpdate, options);
	};

	Services.deleteOne = async (criteria) => {
		return await Model[model].deleteOne(criteria);
	};

	Services.deleteMany = async (criteria) => {
		return await Model[model].deleteMany(criteria);
	};

	Services.count = async (criteria) => {
		return await Model[model].countDocuments(criteria);
	};

	Services.aggregate = async (group) => {
		return await Model[model].aggregate(group);
	};

	return Services;
};
