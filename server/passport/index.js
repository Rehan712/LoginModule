var jwtOptions = require('./jwtOptions');
var passport = require('passport');
var { Strategy } = require('passport-jwt');

const data = [
	{
		id: '1',
		name: 'rehan',
		password: 'rehan007'
	},
	{
		id: '2',
		name: 'numan',
		password: 'numan007'
	},
	{
		id: '3',
		name: 'faizan',
		password: 'faizan007'
	},
	{
		id: '4',
		name: 'hanan',
		password: 'hanan007'
	}
];

module.exports = () => {
	var strategy = new Strategy(jwtOptions, (jwt_payload, next) => {
		var user = data.filter(item => {
			return item.id === jwt_payload.id;
		})[0];
		if (user) {
			next(null, user);
		} else {
			next(null, false);
		}
	});

	passport.use(strategy);
};
