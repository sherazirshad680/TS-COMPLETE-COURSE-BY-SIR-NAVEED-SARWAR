"use strict";
var UserName = "Sheraz";
console.log();
var num1 = 2;
var num2 = 3;
// var result: number = num1 + num2;
// var result: number = num1 - num2;
// var result: number = num1 * num2;
// var result: number = num1 / num2;
// console.log(result);
// Template Literal
// Backtick mai string define krny ko TemplateLiteral khty Hain.
var userName = `Sheraz`;
// Data Type
// Typeof is sy hum variable ki type check kr skty hain.Or is sy value get nhi ki ja skti.
var userNum = 10;
var userName = "Sheraz";
console.log(typeof userNum);
console.log(typeof userName);
// camelCase
var camelCase;
// PascalCase
var PascalCase;
//Program to Remove Negative Numbers from an Array Using
// let num: any[] = [1, 2, -3, 4, -5];
// let resultnum = Math.abs(num);
// console.log(resultnum);
let num = [1, 2, -3, 4, -5];
let resultnum = num.map(Math.abs);
console.log(resultnum);
