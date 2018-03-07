const express = require('express');

let app = express();

app.get('/', (req, res) => {
	//res.send('<h1>Hello Express!</h1>');
	res.send({
		name: 'Anthony',
		likes: ['Computers', 'Cars']
	});
});

app.get('/about', (req, res) => {
	res.send('About Page');
});

// /bad - send back json with errorMessage property

app.get('/bad', (req, res) => {
	res.send({
		errorMessage: 'Error, Error, Error!'
	});
});

app.listen(3000);
