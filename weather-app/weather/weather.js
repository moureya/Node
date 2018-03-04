const request = require('request');

let getWeather = (lat, lng, callback) => {
	request(
		{
			url: `https://api.darksky.net/forecast/1b5127ae3f493b41450bc2bb55e92708/${lat},${lng}`,
			json: true
		},
		(error, response, body) => {
			if (!error && response.statusCode === 200) {
				callback(undefined, {
					temperature: body.currently.temperature,
					apparentTemperature: body.currently.apparentTemperature
				});
			} else {
				callback('Unable to fetch weather.');
			}
		}
	);
};

module.exports.getWeather = getWeather;
