const http = require('http'),
	cfg = require('dotenv').config()
;

const APIKEY = process.env.APIKEY,
	SERVICE = 'http://api.openweathermap.org/data/2.5/forecast',
	CITY = 'zrenjanin',
	COUNTRY = 'sr'
;

const service = (city, country) => {
	city = city || CITY;
	country = country || COUNTRY;
	return SERVICE + '?q=' + city + ',' + country + '&mode=json&units=metric&APPID=' + APIKEY;
};

const request = (cback) => {
	http.get(service(), function (rsp) {
		let raw = '';
		rsp.on('data', (str) => { raw += str; });
		rsp.on('end', () => { cback(raw); });
	});
};

request(raw => {
	let data = JSON.parse(raw || '{}'),
		list = (data || {}).list || []
	;
	if (!list.length) return false;

	list.forEach(item => {
		let desc = item.weather[0].description,
			temp = item.main.temp,
			tstamp = item.dt_txt
		;
		console.log(tstamp, temp,desc);
	});
});
