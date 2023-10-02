//Creating constructor for shapes
class Shape {
  constructor() {
    this.color = "";
  }
  chooseColor(color) {
    this.color = color;
  }
}

//Circle constructor
class Circle extends Shape {
  create() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`;
  }
}

//Square constructor
class Square extends Shape {
  create() {
    return `<rect x="50" height="200" width="200" fill="${this.color}"/>`;
  }
}

//Triangle constructor
class Triangle extends Shape {
  create() {
    return `<polygon height="100" width="100" points="0,200 300,200 150,0" fill="${this.color}"/>`;
  }
}

module.exports = { Circle, Square, Triangle };
