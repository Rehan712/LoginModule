module.exports = app => {
	app.get('/login', (req, res) => {
		res.sendFile(require('path').join(__dirname, '../../dist/index.html'));
	});

	app.get('/student', (req, res) => {
		res.sendFile(require('path').join(__dirname, '../../dist/index.html'));
	});

	app.get(
		'/students',
		require('passport').authenticate('jwt', { session: false }),
		require('../handlers/getDataHandler')
	);

	app.post('/loginConfirmed', require('../handlers/postDataHandler'));
};
