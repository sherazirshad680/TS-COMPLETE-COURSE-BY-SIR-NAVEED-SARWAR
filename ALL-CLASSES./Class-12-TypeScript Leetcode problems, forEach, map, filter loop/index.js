"use strict";
// Map & Filter Method in Array in TS
const num = [1, 2, 3, 4, 5];
// Map Methods
// 1: Doubling each number
const doubleData = num.map((curVal) => curVal * 2);
console.log(doubleData);
// 2: Converting numbers to strings
const numberTostring = num.map((curElement) => curElement.toString());
console.log(numberTostring);
// Filter Methods
// 1: Filtering even numbers
const evenNumbers = num.filter((curElement) => curElement % 2 === 0);
// console.log(evenNumbers);
// 2: filtering numbers greater than 3
const numGreaterThenThree = num.filter((curElement) => curElement > 3);
console.log(numGreaterThenThree);
