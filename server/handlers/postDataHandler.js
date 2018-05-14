var jwt = require('jsonwebtoken');

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

function varifyUser(userName, userPassword, userData) {
	const userArray = userData.filter(item => {
		if (item.name === userName && item.password === userPassword) {
			return true;
		} else {
			return false;
		}
	});
	return userArray;
}

module.exports = (req, res) => {
	console.log('this is the body and users', req.body);
	const userName = req.body.name;
	const userPassword = req.body.password;
	const userArray = varifyUser(userName, userPassword, data);
	if (userArray.length) {
		const user = userArray[0];
		if (user) {
			var payload = { id: user.id };
			const token = jwt.sign(
				payload,
				require('../passport/jwtOptions').secretOrKey,
				{
					expiresIn: 60 * 5
				}
			);
			res.status(201).send({ id: user.id, token });
		} else {
			res.sendStatus(401);
		}
	}
};
