// const fs = require('fs');
// console.log(typeof fs);

// fs.writeFile('./hello.txt', 'Hello! ', function() {
//   console.log('done creating file');
// });


// const daysOfWeek = require(`./days_of_week`)
// // console.log(daysOfWeek)

// const day = daysOfWeek.getWeekday(3)
// console.log(day)

// Don't specify path when module is in node_modules
const request = require('request');
request(
	'http://jsonplaceholder.typicode.com/users',
	function(err, res, body) {
		console.log(body);
	}
);