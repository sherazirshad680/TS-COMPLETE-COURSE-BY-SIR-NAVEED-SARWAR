"use strict";
// Class07 : TypeScript Built-in Functions | TypeScript Arrays Functions
// language ny jo function likjy hoty hain like console.log function in functions ko pre builting function bolty hain.
// Array Methods
var numbers = [1, 2, 3, 4, 5];
// Array Methods(.length) sy hum array ki length find krty hain
console.log(numbers.length); // output 5
// var studentNames = ["Sheraz", "Ahmad", "Ali"];
// function addNewItemInArray(studentName: any) {
// studentNames[3] = studentName;
// }
// addNewItemInArray("Naveed");
// console.log(studentNames);
// let studentNames:string = ["Sheraz", "Ahmad", "Ali"];
// studentNames [studentNames.length] = "Naveed";
// console.log(studentNames);
// Array Method
let studentNames = ["Sheraz", "Ahmad", "Ali", "Raza"];
// .push method sy hum array k last mai value add krty hain
// studentNames.push("Naveed");
// .pop method sy hum array k last sy value remove krty hain
// studentNames.pop();
// .shift method sy hum array k start sy value remove krty hain
// studentNames.shift();
// .unshift method sy hum array k start mai value add krty hain
// studentNames.unshift("Irshad");
// .splice method sy hum array k kisi b index py lav add b kr skty hain or rem b kr skty hain,
//  phly hum wo index likhty hain jahan py hum ny val add krni hai then hun wo index likhty hn,
//  jahan sy val rem krni hai.phr hum ye likhty hn kya val add krni hai.chk the following example.
studentNames.splice(2, 1, "Ahsan");
console.log(studentNames);
