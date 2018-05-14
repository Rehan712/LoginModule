var express = require('express');
var app = express();

require('./middleware')(app);

require('./passport')();
require('./routes')(app);

app.listen(3000, () => {
	console.log('node is listening on port 3000');
});
