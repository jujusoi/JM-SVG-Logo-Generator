const writeFile = require('fs/promises');
const Shapes = require('./shapes.js');

const makeSVG = (lname, lcolor, lshape, lscolor, lbgcolor) => {
    console.log(`${lname}, ${lcolor}, ${lshape} ${lscolor}, ${lbgcolor}`);
    
    const chosenShape = new Shapes.lshape();

    return `
    <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="${lbgcolor}" />

  ${chosenShape.shape} ${chosenShape.color}
  <circle cx="150" cy="100" r="80" fill="green" />

  ${lcolor} ${lname}
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>
    `
}

module.exports = {
    makeSVG,
};