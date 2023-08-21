# JM-SVG-Logo-Generator
### License Badge
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

As an potential business owner living in this current economy, it's vital to save as many pennies as possible throughout your day-to-day life. One major expense in starting a brand is the commission costs for graphic logos and other assets. To solve this issue, I have created an application that generates a logo.svg file based on user input, which automatically generates a logo dependant on the specified parameters. Not only does it include quick and concise questions which gives the user the freedom to select any shape and color they want, but it's also free!

## Table of Contents

- [Title](#jm-svg-logo-generator)
- [License Badge](#license-badge)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contribution](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation

Either: 

1. Clone the repo and open in VS Studio 

2. Watch the video tutorial

## Usage

When executing the command 'node ./index.js' in the CLI, users are presented with a prompt asking for the name of the logo. This prompt has a character limit, meaning that if the user answers text with more than 3 characters, it will throw an error once the prompt is finished. Upon responding within the guidlines of the first question, users are then prompted a question pertaining to the color of the logo text they want. In this prompt, users can either use the color name, eg 'blue', or use a HEX code, eg '#4287f5'.

Once the user provides input for the logo text color, a multiple choice question prompt is given, allowing users to choose from one of four shape options for their logo: 'Circle', 'Triangle', 'Square', and 'Star'. Users can navigate through the options using the up and down arrow keys, and select their choice by pressing the enter key. Following the selection, two more prompts will appear, inquiring for the logo shape color, and logo background color, which have the same principles as the first color inquiry.

Once the background color question has been answered successfully, it will write the necessary code for the logo in the logo.svg file found in the examples directory, which can be viewed by the user by opening it on their browser or saving it as a file.

Video example:
https://watch.screencastify.com/v/cbg4Rm523nHoGHqvTFiY

Github Repo: 
https://github.com/jujusoi/JM-SVG-Logo-Generator

## Features

- Command line interface that accepts user input.
- Prompts information about user's logo.
- Values from prompts inform the appearence of the logo.
- Has functional shape tests.
- Uses super Shape parent object to inform shape object data.
- Generates a logo.svg file.

## Contributing

N/A

## Tests

N/A

## Questions

N/A

GitHub user:
- jujusoi, https://www.github.com/jujusoi/

If further inquiry is necessary, reach out to me through my email address: 
- jalxmcdonald@hotmail.com

## License

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  