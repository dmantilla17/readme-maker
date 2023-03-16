function renderLicense(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "Mozilla") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else if (license == "ISC") {
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  - [Motivation](#motivation) 
  -[Solutions](#solutions)
  -[Example](#example)
  -[Learned](#learned)
  ${data.license === "None" ? "" : "- [License](#license)"}
  
  
  ### Motivation
  ${data.motivation}

  ### Solutions
  ${data.solutions}

  ### Example
  ${data.example}
  
  ### Learned
  ${data.learned}

  ${data.license === "None" ? "" : "### License"}
  ${renderLicense(data.license)}

`;
}

module.exports = generateMarkdown;
