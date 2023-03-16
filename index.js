//DEPENDENCIES
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./generateMarkdown");
const { default: Choices } = require("inquirer/lib/objects/choices");
//DATA
const questions = [
  {
    type: "input",
    message: "What is the name of your project?",
    name: "title",
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
  {
    type: "list",
    message: "Which license would you like to choose?",
    name: "license",
    choices: ["MIT", "Mozilla", "ISC", "None"],
  },
];

//FUNCTIONS
showQuestions();

function showQuestions() {
  console.log("show questions");
  inquirer.prompt(questions).then((answers) => {
    write(answers);
  });
}

function write(answers) {
  fs.writeFileSync(
    path.join(process.cwd(), "GeneratedReadme.md"),
    generateMarkdown(answers)
  );
}
