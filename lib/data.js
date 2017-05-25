
const http = require('http'),
	service = require('./service')
;

const request = (cback) => {
	http.get(service(), function (rsp) {
		let raw = '';
		rsp.on('data', (str) => { raw += str; });
		rsp.on('end', () => { cback(raw); });
	});
};

module.exports = {
	get: request
};
