
const inquirer = require('inquirer');
const writeSVG = require('./writesvg.js');

class CLI {
    constructor() {
        this.logoName = '';
        this.logoNameColor = '';
        this.logoShape = '';
        this.logoShapeColor = '';
        this.backgroundColor = '';
    }
    march() {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'logoNameQ',
                message: 'Enter your logo text (Up to 3 chars only):'
            },
            {
                type: 'input',
                name: 'logoNameColorQ',
                message: 'What colour do you want your logo text?',
            },
            {
                type: 'list',
                name: 'logoShapeQ',
                message: 'What shape do you want your logo?',
                choices: ['Circle', 'Triangle', 'Square'],
            },
            {
                type: 'input',
                name: 'logoShapeColorQ',
                message: 'What colour do you want your shape to be?',
            },
            {
                type: 'input',
                name: 'logoBackgroundColorQ',
                message: 'What colour do you want your background to be?',
            }
        ]).then(({logoNameQ, logoNameColorQ, logoShapeQ, logoShapeColorQ, logoBackgroundColorQ}) => {
            writeSVG.makeSVG(logoNameQ, logoNameColorQ, logoShapeQ, logoShapeColorQ, logoBackgroundColorQ);
        })
    }
}

module.exports = CLI;