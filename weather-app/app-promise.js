const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
	.options({
		a: {
			demand: true,
			alias: 'address',
			describe: 'Address to fetch weather for',
			string: true
		}
	})
	.help('help', 'h').argv;

let encodedAddress = encodeURIComponent(argv.a);
let geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBS6QmUwVjfp7ZJjnxlL1YRgTup3Y7WHbY&address=${encodedAddress}`;

axios
	.get(geocodeUrl)
	.then(response => {
		if (response.data.status === 'ZERO_RESULTS') {
			throw new Error('Unable to find that address.');
		}
		let lat = response.data.results[0].geometry.location.lat;
		let lng = response.data.results[0].geometry.location.lng;
		let weatherUrl = `https://api.darksky.net/forecast/1b5127ae3f493b41450bc2bb55e92708/${lat},${lng}`;
		console.log(response.data.results[0].formatted_address);
		return axios.get(weatherUrl);
	})
	.then(response => {
		let temperature = response.data.currently.temperature;
		let apparentTemperature = response.data.currently.apparentTemperature;
		let precipProbability = response.data.currently.precipProbability;
		let humidity = response.data.currently.humidity;
		let summary = response.data.currently.summary;
		console.log(
			`The weather forecast for today is ${summary}.
			It's currently ${temperature}, but it feels like ${apparentTemperature}.
			Humidity is ${humidity} and the chance of rain is ${precipProbability}.`
		);
	})
	.catch(e => {
		if (e.code === 'ENOTFOUND') {
			console.log('Unable to connect to API servers.');
		} else {
			console.log(e.message);
		}
	});
