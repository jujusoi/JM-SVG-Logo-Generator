const {writeFile} = require('fs/promises');
const Shapes = require('./shapes.js');

const makeSVG = (lname, lcolor, lshape, lscolor, lbgcolor) => {
    
    const chosenShapeClass = Shapes[lshape];
    const chosenShape = new chosenShapeClass(lscolor, lshape);

    if (chosenShape) {
        const result =`
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        
        <rect width="100%" height="100%" fill="${lbgcolor}" />
        ${chosenShape.render()}
        <text x="150" y="120" font-size="60" text-anchor="middle" fill="${lcolor}">${lname}</text>
        
        </svg>
            `
        if (result) {
        writeFile('./examples/logo.svg', result).then(() => console.log('Logo generated!')).catch((err) => console.error(`Something went wrong!`, err));
        } else {
            throw new Error('Result was not generated');
        }
    } else {
        throw new Error('Chosen shape not found');
    }
}

module.exports = {
    makeSVG,
};