import inquirer, { Answers, QuestionCollection } from "inquirer";
const questions: QuestionCollection = [
  {
    type: "number",
    name: "num1",
    message: "Enter num1",
  },
  {
    type: "number",
    name: "num2",
    message: "Enter num2",
  },
];

try {
  const answers: Answers = await inquirer.prompt(questions);
} catch (Error) {
  console.log("Error", Error);
} finally {
  console.log("finally");
}

const answer: Answers = await inquirer.prompt([
  {
    type: "number",
    name: "score",
    message: "Enter your marks between 0 - 100",
  },
]);
if (answer.score > 100 || answer.score < 0) {
  throw new Error("Enter correct marks!");
}
