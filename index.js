const data = require('./lib/data'),
	service = require('./lib/service')
;

data.get(service(), raw => {
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
