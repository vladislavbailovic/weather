require('dotenv').config();

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

module.exports = service;
