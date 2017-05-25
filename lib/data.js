
const http = require('http');

const request = (url, cback) => {
	http.get(url, function (rsp) {
		let raw = '';
		rsp.on('data', (str) => { raw += str; });
		rsp.on('end', () => { cback(raw); });
	});
};

module.exports = {
	get: request
};
