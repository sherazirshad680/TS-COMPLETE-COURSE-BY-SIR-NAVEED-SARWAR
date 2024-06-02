"use strict";
// Exercise 1: Write a prgram that calculates the area of a rectangle.
// The formula for calculating the area of a rectangle is based on the following formula.
// let width: number = 5;
// let height: number = 10;
// let area: number = width * height;
// console.log(area);
// Exercise 2: Write a program that takes input and calculates the vloume of a cube.
// The for mula of a cube is length * width * height.
// let _length: number = 5;
// let width: number = 10;
// let height = 15;
// let volumeOfAcube = _length * width * height;
// console.log(volumeOfAcube);
// Exercise 3: Write a program that checks the if a number is positive, negative or zero.
var number = 2;
if (number > 0) {
    console.log("The Number is positive");
}
else if (number < 0) {
    console.log("The Number is negative");
}
else
    console.log("The Number is zero");
// Exercise 4: Write a program that checks the if a number is even or odd.
if (number % 2 == 0) {
    console.log("The Number is even");
}
else {
    console.log("The Number is odd");
}
// Exercise 5: Write a program that determines if a person is eligible for vote based on their age.
var Age = 18;
if (Age >= 18) {
    console.log("You are eligible for the vote");
}
else {
    console.log("You are not eligible for the vote");
}
// Exercise 6: Write a program that calculates the result of a mathematical expression,
// ((10 + 5) * 3 - 2) / 4 % 3) - 7
var result = ((((10 + 5) * 3 - 2) / 4) % 3) - 7;
console.log(result);
