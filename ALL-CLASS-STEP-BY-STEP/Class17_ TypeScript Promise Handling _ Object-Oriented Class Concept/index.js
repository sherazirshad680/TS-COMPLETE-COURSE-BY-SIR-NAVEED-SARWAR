"use strict";
class Car {
    constructor(color, price) {
        this.price = 0;
        this.color = "not defined";
        console.log("constructor");
    }
}
let carA = new Car("red", 123);
let carB = new Car("blue", 456);
console.log("Car A: ", carA);
console.log("before async");
let setTimeOutID = 0;
setTimeOutID = setTimeout(() => {
    console.log("setTimeOut async");
}, 10000);
if (true) {
    clearTimeout(setTimeOutID);
}
console.log("after async");
function prmiseFunction(resolve, reject) {
    if (false) {
        resolve("successfully async code executed");
    }
    else {
        reject("something went wrong");
    }
}
const result = new Promise(prmiseFunction);
result
    .then((sucess) => {
    console.log("sucess", sucess);
})
    .catch((error) => {
    console.log("error", error);
});
