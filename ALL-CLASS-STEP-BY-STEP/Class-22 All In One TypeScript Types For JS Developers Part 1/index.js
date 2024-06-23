"use strict";
// Basics Types:
var num = 10;
var userName = "Sheraz";
let isBoolean = false;
let isNull = null;
let isUndefind = undefined;
let noReturn = undefined;
let isAny = "anything";
isAny = 10;
isAny = false;
let isUnknown = "string";
isUnknown = false;
console.log("is Unknown :", isUnknown);
function returnError() {
    throw new Error("Any error");
}
// Object Type
let student = {
    name: "Sheraz",
    email: "sherazirshad680@gmail.com",
    phone: 3217809767,
};
// Array Type
let data = [1, 23, 4, 5, 6, 7, 8, 9];
let dataString = ["1", "23", "4", "5", "6", "7", "8", "9"];
let tuple = ["Sheraz", 10, false];
tuple.push("Hello");
let students = [
    { name: "Sheraz", email: "sherazirshad680@gmail.com", phone: 3217809767 },
];
// Union Type
let num2 = 22;
// And Type Or Intersection
if (10 == 10 && 20 == 20) {
    console.log("Something");
}
