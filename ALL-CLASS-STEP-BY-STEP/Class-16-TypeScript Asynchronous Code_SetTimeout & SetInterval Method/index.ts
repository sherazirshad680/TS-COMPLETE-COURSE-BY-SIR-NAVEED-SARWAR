console.log("Before async code");
function doSomething() {
  console.log("print doSomething");
}
// with arrow function
// setTimeout(() => {
//   console.log("print doSomething");
// });

// setTimeout is a async function
// setTimeout(doSomething, 1000);
setInterval(doSomething, 1000);
console.log("After async code");
