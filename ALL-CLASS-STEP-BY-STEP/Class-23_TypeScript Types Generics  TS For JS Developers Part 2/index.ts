// Enum
// It Retruns the index
enum COLORS {
  RED,
  GREEN,
  BLUE,
}
const WhatColor: number = COLORS.GREEN;
console.log("COLOR IS :", WhatColor);

enum USERROLE {
  ADMIN,
  USER,
}
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

function swap<T>(arr: T[]): T[] {
  return [arr[1], arr[0]];
}
const result: number[] = swap<number>([10, 20]);
console.log("Result: ", result);
const result1: string[] = swap<string>(["irshad", "sheraz"]);
console.log("Result: ", result1);
const result2: boolean[] = swap<boolean>([false, true]);
console.log("Result: ", result2);

// interfaces

interface teacher {
  class: string;
}

interface studentType extends teacher {
  rollNo: number;
  uni: string;
}

let student: studentType = {
  rollNo: 123,
  uni: "NTU",
  class: "CS",
};
