// var index: number = 1;
// post increment
// var result: number = index++;
// pre increment
// var result: number = ++index;
// console.log("index: ", index);

// revision while loop
// var Index: number = 1;
// while (Index < 10) {
//   console.log(Index);
//   Index++;
// }

//  for loop
//for loop sy hmari lines of code km ho jati hnn.
// for (let index: number = 1; index < 10; index++) {
//   console.log(index);
// }

// do while loop
// agr is mai cond true ho to ye sahi chlta hai lakin agr or agr iski cond false ho to,
// ye atleast one time to chly ga hi chly ga.
let i: number = 1;
do {
  console.log("Hello world!");
  i++;
} while (i < 10);

// write a ts program, that calculates the sum of even number between 1 - 1000

var sum: number = 0;
for (let index = 1; index <= 1000; index++) {
  if (index % 2 == 0) {
    sum = sum + index;
  }
}

console.log(sum);

// write a ts program, that calculates the sum of even number between 1 - 100, and make
// the list of all even numbers and print along sum.
var sum: number = 0;
var list: number[] = [];
for (let index = 1; index <= 100; index++) {
  if (index % 2 == 0) {
    sum = sum + index;
    list.push(index);
  }
}

console.log(sum, list);
