const data = require('./lib/data'),
	service = require('./lib/service'),
	parse = require('./lib/parser')
;

data.get(service(), raw => {
	let list = parse(raw);
});
