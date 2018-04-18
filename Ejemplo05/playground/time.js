const moment = require("moment");

let date = new Date();
console.log(date.getMonth());

let dateM = moment();
dateM.add(100, 'year').subtract(9, 'months');
console.log(dateM.format("MMM Do, YYYY"));

let someTimestamp = moment().valueOf();
console.log(someTimestamp);
let createAt = 1234;
let date2 = moment(createAt);
console.log(date2.format("h:mm a"));