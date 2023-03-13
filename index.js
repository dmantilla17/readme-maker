//DEPENDENCIES
const { prompt } = require("inquirer");
const { writeFile} = require("fs");
//DATA
const questions = [
  {
    type: "input",
    question: "What is the name of your project?",
    name: "name",
  },
  {
    type: "input",
    question: "What is the motivation of your project?",
    name: "motivation",
  },
  {
    type: "input",
    question: "What probelms does it solve?",
    name: "solutions",
  },
  {
    type: "input",
    question: "Insert example of your project",
    name: "example",
  },
  {
    type: "input",
    question: "What did you learn?",
    name: "learned",
  },
];

//FUNCTIONS
const generateReadMe= ({ name,motivation,solutions,example,learned }) => {
    const template= 'README.md';
    return template; 
}
function writeToFile(READMEmd); {
    const fileName= (READMEmd);
}

const init = () => {
  //prompt the user to answer questions for the question bank
  prompt(questions).then((answers) => {
    console.log(questions);
    //generate readMe for answers
   const readMe= generateReadMe(answers);
  });
};

init();
{
}
//USER INTERACTIONS
inquirer.prompt({});

//INITIALZATIONS
