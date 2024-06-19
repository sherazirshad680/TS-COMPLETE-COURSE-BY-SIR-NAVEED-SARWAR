import inquirer from "inquirer";
// console.log("first");
// async function uploadUsers() {
//    inquirer.prompt([
//     {
//       type: "number",
//       name: "num1",
//       message: "Enter num1 :",
//     },
//   ])
// .catch((err) => {
// })
//   .then(()=>{
//   })
//   console.log("second");
// }
// uploadUsers();
// console.log("third");
// console.log("first");
// ---------------------------------------------------------------------
// async function uploadUsers() {
//   await inquirer.prompt([
//     {
//       type: "number",
//       name: "num1",
//       message: "Enter num1 :",
//     },
//   ]);
//   console.log("second");
// }
// uploadUsers();
// console.log("third");
/////////////////////////////////////////////////////////////////////////
async function uploadUsers() {
    var restult = await inquirer.prompt;
    [
        {
            type: "number",
            name: "num1",
            message: "Enter num1 :",
        },
    ];
    console.log("Restult", restult);
}
