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
// const request = require('request');
// request(
// 	'http://jsonplaceholder.typicode.com/users',
// 	function(err, res, body) {
// 		console.log(body);
// 	}
// );

// // Practice 1[]
// const random = require('./utilities/random');
// for (let i = 0; i < 10; i++) {
//     console.log( random.randNum(100, 200) );
// }

// // Practice 2
// const circle = require('./utilities/circle');
// console.log( circle.area(50) );  // 7853.98...
// console.log( circle.circumference(75) );  // 471.23...

// const colors = ['red', 'green', 'blue'];

// console.log('BEFORE the forEach...');

// colors.forEach(function(color, idx) {
//     console.log(`${idx + 1} - ${color}`);
// });

// console.log('AFTER the forEach...');

console.log('Code before the asynchronous function call');

setTimeout(function() {
  console.log('setTimeout code')
});

console.log('Code after the asynchronous function call');