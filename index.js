const inquirer = require('inquirer');
const fs = require('fs');

function writeReadme(data) {
  let projectLicense = data.license
  if (projectLicense == 'Apache License 2.0') {
    projectLicense = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (projectLicense == 'MIT License') {
    projectLicense = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else {
    projectLicense = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  }

  return `# ${data.projectitle}
  ${projectLicense}
  
  ## Description
  ${data.description}

  ### Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Questions
  - See my work at GitHub: [github.com/${data.github}](#https://github.com/${data.github}/)
  - If you have any questions you can email me at [${data.email}](mailto:${data.email})


  ### This readme file was automatically generated using inquirer
  `; 
}

inquirer
  .prompt([
    {
      type: 'input',
      name: 'projectitle',
      message: 'What is the title of your Project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a project description',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Add project installation instructions',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Add project usage',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How to Contribute to this project',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter testing instructions',
     },
    {
      type: 'checkbox',
      name: 'license',
      message: 'Select your license?',
      choices: ['Apache License 2.0', 'MIT License', 'Mozilla Public License 2.0'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Your Github username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Your email address',
    },
  ])
  
  .then((data) => {
    console.log(data)
    // fs.writeFile('GENERATED-README.md',  writeReadme(data), (error) => {
    //     error ? console.log(error): console.log('Success, your GENERATED-README.md file has been created!')
    //  })
});


