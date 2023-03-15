//DEPENDENCIES
const inquirer = require("inquirer");
const { writeFile } = require("fs");
//DATA
const questions = [
  {
    type: "input",
    message: "What is the name of your project?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the motivation of your project?",
    name: "motivation",
  },
  {
    type: "input",
    message: "What probelms does it solve?",
    name: "solutions",
  },
  {
    type: "input",
    message: "Insert example of your project",
    name: "example",
  },
  {
    type: "input",
    message: "What did you learn?",
    name: "learned",
  },
];

//FUNCTIONS
showQuestions();

function showQuestions() {
  console.log("show questions");
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
  });
}
