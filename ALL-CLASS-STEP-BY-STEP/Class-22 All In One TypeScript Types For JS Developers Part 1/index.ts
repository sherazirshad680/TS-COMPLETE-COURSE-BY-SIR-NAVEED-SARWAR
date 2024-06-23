// Basics Types:
var num: number = 10;
var userName: string = "Sheraz";
let isBoolean: boolean = false;
let isNull: null = null;
let isUndefind: undefined = undefined;
let noReturn: void = undefined;
let isAny: any = "anything";
isAny = 10;
isAny = false;
let isUnknown: unknown = "string";
isUnknown = false;
console.log("is Unknown :", isUnknown);
function returnError(): never {
  throw new Error("Any error");
}

// Object Type
let student: {
  name: string;
  email: string;
  phone: number;
} = {
  name: "Sheraz",
  email: "sherazirshad680@gmail.com",
  phone: 3217809767,
};

// Array Type
let data: number[] = [1, 23, 4, 5, 6, 7, 8, 9];
let dataString: string[] = ["1", "23", "4", "5", "6", "7", "8", "9"];
let tuple: [string, number, boolean] = ["Sheraz", 10, false];
tuple.push("Hello");

// Object Custom Type
type studentType = {
  name: string;
  email: string;
  phone: number;
};
let students: studentType[] = [
  { name: "Sheraz", email: "sherazirshad680@gmail.com", phone: 3217809767 },
];

// Union Type
let num2: number | string = 22;

// And Type Or Intersection
if (10 == 10 && 20 == 20) {
  console.log("Something");
}
