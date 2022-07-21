// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseBadges = {
  "Apache-2.0": '[![License: Apache-2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
  "MIT": '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
  "GPL-3.0": '[![License: GPL-3.0](https://img.shields.io/badge/license-GPL--3.0-brightgreen)](https://opensource.org/licenses/GPL-3.0)',
  "CDDL-1.0": '[![License: CDDL-1.0](https://img.shields.io/badge/license-CDDL--1.0-orange)](https://opensource.org/licenses/CDDL-1.0)',
  "none": ""
}

function renderLicenseBadge(license) {
  let licensceBage = licenseBadges[license];
  return licensceBage;
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseMarkdown = '';
  if (license !== 'none') {
    licenseMarkdown = `This project is licensed under the ${license} license.`;
  }
  return licenseMarkdown;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description 
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ~~~
  ${data.installation}
  ~~~
  ## Usage
  
  ${data.usage}
  
  ## License

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contributing}

  ## Tests
  ~~~
  ${data.testInstructions}
  ~~~
  ## Questions

  Contact me at ${data.email} with any questions. View more of my work here: [${data.username}](https://github.com/${data.username}).

`;

}

module.exports = generateMarkdown;
