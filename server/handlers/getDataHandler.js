const data = [
	{
		name: 'rehan',
		password: 'rehan007'
	},
	{
		name: 'numan',
		password: 'numan007'
	},
	{
		name: 'faizan',
		password: 'faizan007'
	},
	{
		name: 'hanan',
		password: 'hanan007'
	}
];

module.exports = (req, res) => {
	res.json(data);
};
