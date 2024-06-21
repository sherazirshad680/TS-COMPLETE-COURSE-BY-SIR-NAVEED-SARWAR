import chalk from "chalk";
import countries from "./countries.json" assert { type: "json" };
// console.log(
//   chalk.white.bgRed.bold("Hello World!") + "Sheraz" + chalk.bgGreen("Irshad")
// );

// for (let index = 0; index < countries.length; index++) {
//   const element = countries[index];
//   if (element.name == "Pakistan") {
//     console.log(
//       `Country Name is =`,
//       chalk.white.bgGreen.bold(element.name) +
//         "Country Code = " +
//         chalk.white.bgRed.bold(element.code)
//     );
//   }
// }

for (let index = 0; index < countries.length; index++) {
  const element = countries[index];
  if (element.name.slice(0, 1) == "p") {
    console.log(
      `Country name is =` +
        chalk.white.bgRed.bold(element.name) +
        "Country is =" +
        chalk.white.bgRed.bold(element.code)
    );
  }
}
