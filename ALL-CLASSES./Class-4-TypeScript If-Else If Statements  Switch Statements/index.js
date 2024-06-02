"use strict";
// if & if else Statement
// Agr if else mai 1st if hi true ho jye to usy BestCase khty hain.Or if else mai 2nd ya 3rd bar Condition true ho to usy WestCase khty.
// 1: Write a program that checks if a given nuumber is positive negative or zero.
var givenNumber = 10;
if (givenNumber > 0) {
    console.log("positive");
}
else if (givenNumber < 0) {
    console.log("negative");
}
else if (givenNumber) {
    console.log("zero");
}
// 2: Write a ts program, that print student grade, A,B,C D,F based on number, if user marks,
// greater than 80, print  A ,
var marks = 80;
if (marks >= 80) {
    console.log("Student Grade A");
}
else if (marks < 80 && marks >= 70) {
    console.log("Student Grade B");
}
else if (marks < 70 && marks >= 60) {
    console.log("Student Grade C");
}
else if (marks < 60 && marks >= 50) {
    console.log("Student Grade D");
}
else {
    console.log("Student Grade F");
}
// Switch Statement
// Switch ka Basic work hota hai matching krna auto match krna mtlb equal to ye khud hi check,
// kr ly ga if statement mai hum equals to == khud check kr rhy hain.jb k switch mai khud check kr rha hai.
// Your task is : Convert the following code into the switch statement.
var section = "A";
if (section == "A")
    console.log("Your class timing is every sunday 9AM - 1PM");
else if (section == "B")
    console.log("Your class timing is every sunday 2PM - 4PM");
else {
    console.log("if - Your class timing is every sunday 4PM - 6PM");
}
switch (section) {
    case "A": {
        console.log("Your class timing is every sunday 9AM - 1PM");
        break;
    }
    case "B":
        {
            console.log("Your class timing is every sunday 2PM - 4PM");
            break;
        }
    default:
        {
            console.log("switch - Your class timing is every sunday 4PM - 6PM");
        }
}
