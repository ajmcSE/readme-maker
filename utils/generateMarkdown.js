// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT"){
    return `![MIT](https://img.shields.io/badge/license-MIT-green)`
  }if (license === "apache"){
    return `![Apache](https://img.shields.io/badge/license-Apache-green)`
  }
  else{
  return "chosen, if you dont know what license to choose please visit [https://choosealicense.com/](https://choosealicense.com/)"
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
  }


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## description
  
${data.description}
## Table of contents

- [instalation](#instalation)
- [usage](#usage)
- [contributors](#contributors)
- [licenses](#licenses)

## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributors
  ${data.contributors}
  ## Test
  ${data.test}
  ## Licenses
  ${data.licenses}
${renderLicenseBadge(data.licenses)}


`;
}

module.exports = generateMarkdown;
