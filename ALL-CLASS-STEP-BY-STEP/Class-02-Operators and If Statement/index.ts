// Template Literal
// Backtick mai string define krny ko TemplateLiteral khty Hain.
var userName: string = `Sheraz`;

// Data Type
// Typeof is sy hum variable ki type check kr skty hain.Or is sy value get nhi ki ja skti.
var userNum: number = 10;
var userName: string = "Sheraz";
console.log(typeof userNum);
console.log(typeof userName);

// ArithMetic Operators
var num1: number = 10;
var num2: number = 20;
var result: number = num1 + num2;
var result1: number = num2 - num1;
var result2: number = num1 * num2;
var result3: number = num1 / num2;
console.log(`After Addition:${result}`);
console.log(`After Subtraction:${result1}`);
console.log(`After Multiplication:${result2}`);
console.log(`After Division:${result3}`);

// Modulus Operators
// Iska basic kam devide krny k baad jo remainder ata hai usko show krwana hai isko,
// programing mai modulus bolty hain.
var num_1: number = 9;
var num_2: number = 5;
var result: number = num_1 % num_2;
console.log(`After Modulus:${result}`);

// Assignment Operators
// is mai Value ko Assign krty hain or is mai plus+ or minus- multiply ya phr devide,
// b kr skty hain krty hain.
var Num1: number = 10;
// First Method
Num1 = Num1 + 5;
// Second Method
Num1 += 15;

// Comparision Operators
// is mai phly devision work krti hai phr multiplication then plus and minus.ye iska syntax hai
var nUm1: number = 2;
var nUm2: number = 5;
var nUm3: number = 8;
var resultt: number = nUm1 + nUm2 - (nUm3 * 2) / 4;
console.log(resultt);

//Comparison Operators
// 1. Equel to operator
var nUm1: number = 2;
var nUm2: number = 5;
var output: boolean = nUm1 == nUm2;
console.log(output); // false

// 2. Lessthan operator
var nUm1: number = 5;
var nUm2: number = 3;
var output: boolean = nUm1 < nUm2;
console.log(output); // false

// 3. graterthan operator
var nUm1: number = 15;
var nUm2: number = 10;
var output: boolean = nUm1 > nUm2;
console.log(output); // True

// Not equal operator
var nUm1: number = 20;
var nUm2: number = 10;
var output: boolean = nUm1 != nUm2;
console.log(output); // True

// Logical operator
// 1. && operator means and operator mai dono sides sy values ka ans true hona chahiye
// 2. || operator means Or operator mai kisi aik side sy values ka true honi chahiye
var nUm1: number = 17;
var nUm2: number = 15;
var output: boolean = 5 == 5 && 2 == 2;
console.log(output); // True

var output: boolean = 5 == 5 && nUm1 == nUm2;
console.log(output); // false

// || Or operator
var nUm1: number = 17;
var nUm2: number = 15;
var output: boolean = 5 == 5 && 2 == 2;
console.log(output); // True

var output: boolean = 5 == 5 || nUm1 == nUm2;
console.log(output); // True

// Ternary Operator
var nUm1: number = 17;
var nUm2: number = 15;
var output: boolean = 5 == 5 && 2 == 2;
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

var hello: string = "Hello World!";
