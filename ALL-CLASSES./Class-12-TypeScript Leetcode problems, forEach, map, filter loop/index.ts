// Map & Filter Method in Array in TS

const num: number[] = [1, 2, 3, 4, 5];

// Map Methods
// 1: Doubling each number
const doubleData: number[] = num.map((curVal: number) => curVal * 2);
console.log(doubleData);
// 2: Converting numbers to strings
const numberTostring: string[] = num.map((curElement: number) =>
  curElement.toString()
);
console.log(numberTostring);

// Filter Methods
// 1: Filtering even numbers
const evenNumbers: number[] = num.filter(
  (curElement: number) => curElement % 2 === 0
);
// console.log(evenNumbers);
// 2: filtering numbers greater than 3
const numGreaterThenThree = num.filter((curElement: number) => curElement > 3);
console.log(numGreaterThenThree);
