const {writeFile} = require('fs/promises');
const Shapes = require('./shapes.js');
const { error } = require('console');

const makeSVG = (lname, lcolor, lshape, lscolor, lbgcolor) => {
    const chosenShapeClass = Shapes[lshape];
    const chosenShape = new chosenShapeClass(lscolor, lshape);
    new Promise((resolve, reject) => {
if (lname.length > 3) {
    reject(new Error(`Logo text must only include 1-3 characters`));
    } else {
        const result =`
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        
        <rect width="100%" height="100%" fill="${lbgcolor}" />
        ${chosenShape.render()}
        <text x="150" y="120" font-size="60" text-anchor="middle" fill="${lcolor}" style="font-family:Arial;Sans;font-weight:650;">${lname.toUpperCase()}</text>
        
        </svg>
            `
        if (result) {
            resolve(writeFile('./examples/logo.svg', result).then(() => console.log('Logo generated!')).catch((err) => console.error(`Something went wrong!`, err)));
        }
     }
    }).catch((err) => console.error(err));
}

module.exports = {
    makeSVG,
};