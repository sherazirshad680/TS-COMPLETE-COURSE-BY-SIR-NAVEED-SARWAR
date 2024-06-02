"use strict";
// Template Literal
// Backtick mai string define krny ko TemplateLiteral khty Hain.
var userName = `Sheraz`;
// Data Type
// Typeof is sy hum variable ki type check kr skty hain.Or is sy value get nhi ki ja skti.
var userNum = 10;
var userName = "Sheraz";
console.log(typeof userNum);
console.log(typeof userName);
// ArithMetic Operators
var num1 = 10;
var num2 = 20;
var result = num1 + num2;
var result1 = num2 - num1;
var result2 = num1 * num2;
var result3 = num1 / num2;
console.log(`After Addition:${result}`);
console.log(`After Subtraction:${result1}`);
console.log(`After Multiplication:${result2}`);
console.log(`After Division:${result3}`);
// Modulus Operators
// Iska basic kam devide krny k baad jo remainder ata hai usko show krwana hai isko,
// programing mai modulus bolty hain.
var num_1 = 9;
var num_2 = 5;
var result = num_1 % num_2;
console.log(`After Modulus:${result}`);
// Assignment Operators
// is mai Value ko Assign krty hain or is mai plus+ or minus- multiply ya phr devide,
// b kr skty hain krty hain.
var Num1 = 10;
// First Method
Num1 = Num1 + 5;
// Second Method
Num1 += 15;
// Comparision Operators
// is mai phly devision work krti hai phr multiplication then plus and minus.ye iska syntax hai
var nUm1 = 2;
var nUm2 = 5;
var nUm3 = 8;
var resultt = nUm1 + nUm2 - (nUm3 * 2) / 4;
console.log(resultt);
//Comparison Operators
// 1. Equel to operator
var nUm1 = 2;
var nUm2 = 5;
var output = nUm1 == nUm2;
console.log(output); // false
// 2. Lessthan operator
var nUm1 = 5;
var nUm2 = 3;
var output = nUm1 < nUm2;
console.log(output); // false
// 3. graterthan operator
var nUm1 = 15;
var nUm2 = 10;
var output = nUm1 > nUm2;
console.log(output); // True
// Not equal operator
var nUm1 = 20;
var nUm2 = 10;
var output = nUm1 != nUm2;
console.log(output); // True
// Logical operator
// 1. && operator means and operator mai dono sides sy values ka ans true hona chahiye
// 2. || operator means Or operator mai kisi aik side sy values ka true honi chahiye
var nUm1 = 17;
var nUm2 = 15;
var output = 5 == 5 && 2 == 2;
console.log(output); // True
var output = 5 == 5 && nUm1 == nUm2;
console.log(output); // false
// || Or operator
var nUm1 = 17;
var nUm2 = 15;
var output = 5 == 5 && 2 == 2;
console.log(output); // True
var output = 5 == 5 || nUm1 == nUm2;
console.log(output); // True
// Ternary Operator
var nUm1 = 17;
var nUm2 = 15;
var output = 5 == 5 && 2 == 2;
console.log(output); // True
// If Statement
if (7 < 5) {
    console.log("Line 1");
    console.log("Line 2");
    console.log("Line 3");
    console.log("Line 4");
    console.log("Line 5");
}
{
    console.log("Line 6");
    console.log("Line 7");
    console.log("Line 8");
    console.log("Line 9");
    console.log("Line 10");
}
var hello = "Hello World!";
