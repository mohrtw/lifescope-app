const _ = require('lodash');

const createInitialSearches = require('../util/create-initial-searches');


module.exports = async function(req, res, next) {
	if (!req.user || req.method !== 'GET') {
		next();
	}
	else {
		let hasInitialSearches = _.get(req.user, 'settings.explorer.initial_searches', false);

		if (hasInitialSearches !== true) {
			await createInitialSearches(req.user._id);
		}

		next();
	}
};
