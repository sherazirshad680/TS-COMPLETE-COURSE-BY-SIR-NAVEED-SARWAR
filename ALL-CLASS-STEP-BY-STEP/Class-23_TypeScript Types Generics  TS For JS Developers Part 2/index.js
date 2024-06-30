"use strict";
// Enum
// It Retruns the index
var COLORS;
(function (COLORS) {
    COLORS[COLORS["RED"] = 0] = "RED";
    COLORS[COLORS["GREEN"] = 1] = "GREEN";
    COLORS[COLORS["BLUE"] = 2] = "BLUE";
})(COLORS || (COLORS = {}));
const WhatColor = COLORS.GREEN;
console.log("COLOR IS :", WhatColor);
var USERROLE;
(function (USERROLE) {
    USERROLE[USERROLE["ADMIN"] = 0] = "ADMIN";
    USERROLE[USERROLE["USER"] = 1] = "USER";
})(USERROLE || (USERROLE = {}));
let newAdmin = {
    role: USERROLE.ADMIN,
    name: "Naveed",
};
let newUser = {
    role: USERROLE.USER,
    name: "Sheraz",
};
if (newAdmin.role === USERROLE.ADMIN) {
    // do something
}
// Generics Type
function swap(arr) {
    return [arr[1], arr[0]];
}
const result = swap([10, 20]);
console.log("Result: ", result);
const result1 = swap(["irshad", "sheraz"]);
console.log("Result: ", result1);
const result2 = swap([false, true]);
console.log("Result: ", result2);
let student = {
    rollNo: 123,
    uni: "NTU",
    class: "CS",
};
