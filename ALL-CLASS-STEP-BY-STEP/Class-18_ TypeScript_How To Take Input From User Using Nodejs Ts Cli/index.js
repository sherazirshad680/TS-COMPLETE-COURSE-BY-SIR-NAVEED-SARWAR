// import inquirer, { Answers, QuestionCollection } from "inquirer";
// const questions: QuestionCollection = [
//   {
//     name: "age",
//     type: "number",
//     message: "what is your age ?",
//   },
//   {
//     name: "userName",
//     type: "input",
//     message: "what is your name ?",
//   },
// ];
// var answers: Promise<Answers> = inquirer.prompt(questions);
// answers
//   .then((answers: Answers) => {
//     console.log("answers", answers);
//   })
//   .catch((error) => {
//     console.log("error", error);
//   });
////////////////////////////////////////////////////////////
import inquirer from "inquirer";
const questions = [
    {
        name: "num1",
        type: "number",
        message: "Enter num1",
    },
    {
        name: "num2",
        type: "number",
        message: "Enter num2",
    },
    {
        name: "Operatoions",
        type: "list",
        message: "Enter num2",
        choices: ["+", "-", "*", "/"],
    },
];
var answers = inquirer.prompt(questions);
answers
    .then((answers) => {
    console.log("answers", answers);
})
    .catch((error) => {
    console.log("error", error);
});
