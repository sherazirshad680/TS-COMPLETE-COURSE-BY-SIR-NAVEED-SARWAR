"use strict";
// var , let , const
var num1 = 10;
// Local scope k andr hum let k variable accessible nhi hota
let num2 = 20;
// Constant Variable ko hum change nhi kr skty.
const num3 = 30;
// Function
// Functoin ki body k andr local scope hota hai or func ki body k bd global scope.
// Function k andr likha hua code tb chlta hai jb mai usko chlana chahu means jb tk func,
// ko call na kryn yw execute nhi hota.
function lineOne() {
    console.log("1");
}
// lineOne();
// Write a ts program that calculates sum of two numbers 10 and 20 using function.
function sum() {
    var num1 = 10;
    var num2 = 20;
    var result = num1 + num2;
    console.log("result is =", result);
}
sum();
// Write a ts program that calculates sum of two numbers 20 and 30 using function.
// With Parameters.
function sum2(numbr1, numbr2) {
    var result = numbr1 + numbr2;
    console.log("result is = ", result);
}
sum2(20, 30);
sum2(5, 5);
// Write a ts program using function to convert temprature from celsius to fahrenheit.
function cToFTemprature() {
    var temp = 36;
    var tempF = (temp * 9) / 5 + 32;
    console.log("tempF: ", tempF);
}
cToFTemprature();
// Write a program using function that calculates the percentage.
// creatoing a function as given.
function calculatesPercentage(obtainedMarks, totalMarks) {
    var percentage = (obtainedMarks * 100) / 500;
    console.log("percentage: ", percentage);
}
calculatesPercentage(1044, 1000);
// Write a ts program that calculates sum of two numbers 10 and 20 using function,
// and add number 5 in reult after the calculation.
function sum3(num1, num2) {
    var result = num1 + num2;
    result = result + 5;
    console.log("result is =", result);
}
sum3(10, 20);
// Write a ts program that calculates sum of two numbers 20 , 30 using function,
// and add number 40 in reult after the calculation.
var addResult = sum3(20, 30);
console.log("addResult: ", addResult);
// Write a ts program that calculates sum of two numbers 10 and 20 using function,
// and add number 5 in reult after the calculation.
function sum4(num1, num2) {
    var result = num1 + num2;
    return result;
    //   console.log("result is =", result);
}
sum4(10, 20);
var sumResult = sum4(10, 20);
sumResult = sumResult + 5;
console.log("sumResult:", sumResult);
// Arrow function
var SumArrow = (num1, num2) => {
    //   var num1: number = 10;
    //   var num2: number = 20;
    var result = num1 + num2;
    return result;
    //   console.log("result is:", result);
};
var sumResult = SumArrow(10, 20);
console.log("sumResult with Arrow function is:", sumResult);
