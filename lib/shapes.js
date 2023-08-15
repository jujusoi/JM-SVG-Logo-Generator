class Shape {
    constructor(color, shape) {
        this.color = color;
        this.shape = shape;
    }
    render() {
    }
}

class Square extends Shape {
    render() {
        return `
<rect x='100' y='50' width="100" height="100" fill="${this.color}" />
        `
    }
}
class Circle extends Shape {
    render() {
        return `
<circle cx="150" cy="100" r="80" fill="${this.color}" />
        `
    }
}

class Star extends Shape {
    render() {
        return `
<polygon points="150 50 160 80 200 80 165 105 185 140 150 120 115 140 135 105 100 80 140 80" fill="${this.color}"/>
        `
    }
}

class Triangle extends Shape {
    render() {
        return`
<polygon points="150,40 210,160 90,160" fill="${this.color}"/>
        `
    }
}

module.exports = {
    Square,
    Circle, 
    Star,
    Triangle,
}