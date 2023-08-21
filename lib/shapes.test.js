const shapes = require('./shapes.js');

describe('TestSuite', () => {
    describe('Renders', () => {
        it('Should generate the SVG code of a circle with the color passed through as an argument.', () => {
            const newShape = shapes.Circle;
            const chosenShape = new newShape('blue', 'Circle');
            expect(chosenShape.render()).toMatch(`
<circle cx="150" cy="100" r="80" fill="blue" />
    `)
        });
        it('Should generate the SVG code of a star with the color passed through as an argument.', () => {
            const newShape = shapes.Star;
            const chosenShape = new newShape('pink', 'Star');
            expect(chosenShape.render()).toMatch(
                `
<polygon points="150 50 160 80 200 80 165 105 185 140 150 120 115 140 135 105 100 80 140 80" fill="pink"/>
        `)
      });
      it('Should generate the SVG code of a square with the color passed through as an argument.', () => {
        const newShape = shapes.Square;
        const chosenShape = new newShape('orange', 'Square');
        expect(chosenShape.render()).toMatch(
           `
<rect x='100' y='50' width="100" height="100" fill="orange" />
        `)
       });
       it('Should generate the SVG code of a triangle with the color passed through as an argument.', () => {
        const newShape = shapes.Triangle;
        const chosenShape = new newShape('black', 'Triangle');
        expect(chosenShape.render()).toMatch(
           `
<polygon points="150,40 210,160 90,160" fill="black"/>
        `)
       });
    })
})