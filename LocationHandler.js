 

const http = require("https");

const options = {
	"method": "GET",
	"hostname": "nearby-airport.p.rapidapi.com",
	"port": null,
	"path": "/airport/nearby?longitude=2.2922926&latitude=48.8583701&limit=3",
	"headers": {
		"x-rapidapi-host": "nearby-airport.p.rapidapi.com",
		"x-rapidapi-key": "14e6db2ea2mshd3417466d04fac6p1ac271jsnc70a82dde267",
		"useQueryString": true
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();