"use strict";
var todos = ["learn typescript", "learn arrays", "learn loops"];
if (todos.length % 2 != 0) {
    // todos.length is odd
}
else {
    todos.splice(todos.length / 2, 2);
    // todos.even
}
todos.splice(Math.round(todos.length / 2), 2);
var index = 0;
// while (index <= 10) {
//   console.log("Hello!");
//   index++;
// }
// task write the table of 5 using while loop.
var writeTable = 1;
while (writeTable <= 10) {
    let results = writeTable * 5;
    console.log(`5 x ${writeTable} = ${results}`);
    writeTable++;
}
