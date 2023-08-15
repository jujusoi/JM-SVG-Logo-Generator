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
<rect width="100%" height="100%" fill="${this.color}" />
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
<polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180" fill="${this.color}"/>
        `
    }
}

class Triangle extends Shape {
    render() {
        return`
<polygon points="50,10 90,90 10,90" fill="${this.color}"/>
        `
    }
}

module.exports = {
    Square,
    Circle, 
    Star,
    Triangle,
}