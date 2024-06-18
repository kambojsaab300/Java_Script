// dates

let myDate = new Date() // function 

// console.log(myDate.toDateString());
// console.log(myDate.getDate()); //date
// console.log(myDate.toLocaleString()); //date
// console.log(myDate.toDateString()); //date

// console.log(typeof myDate) // object

// let myCreatedDate = new Date( 2024, 11,  1) // month start 0 
// let myCreatedDate = new Date( 2024, 11,  1, 2, 4, 22) // 12/1/2024, 2:04:22 AM
let myCreatedDate = new Date("03-15-2024") // mm-dd-yy

// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp =  Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

// `${newDate.getday()} and time`

newDate.toLocaleString('default', {
   weekday: "long",
   timeZone: ''
})







/*

// Date : Date is an object in javascript. 
// JavaScript stores dates as number of milliseconds since January 01, 1970
const myDate = new Date();
console.log(myDate) //Output : 2023-10-09T14:38:09.847Z
// We can use various methods to convert this date into more readable value.
console.log(myDate.toString()) //Output : Mon Oct 09 2023 07:39:18 GMT-0700 (Pacific Daylight Time)

console.log(myDate.toLocaleString()) // Output : 10/9/2023, 7:44:20 AM
console.log(myDate.toLocaleDateString()) //Output : 10/9/2023
console.log(myDate.toLocaleTimeString()) // Output : 7:45:31 AM

console.log(myDate.toDateString()) //Output : Mon Oct 09 2023
console.log(myDate.toTimeString()) // Output : 07:46:40 GMT-0700 (Pacific Daylight Time)

console.log(myDate.toISOString()) // Output : 2023-10-09T14:43:39.337Z
console.log(myDate.toJSON()) //Output : 2023-10-09T14:40:58.495Z

*/


