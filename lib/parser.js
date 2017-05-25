const parse = (raw) => {
	let data = JSON.parse(raw || '{}'),
		list = (data || {}).list || [],
		ret = {}
	;
	if (!list.length) return false;

	list.forEach(item => {
		let desc = item.weather[0].description,
			temp = item.main.temp,
			tstamp = item.dt_txt
		;
		console.log(tstamp, temp,desc);
		ret[tstamp] = {
			temp: temp,
			desc: desc
		};
	});

	return ret;
}

module.exports = parse;
