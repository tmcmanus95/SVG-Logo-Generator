class Shape {
  constructor() {
    this.color = "";
  }
  chooseColor(color) {
    this.color = color;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill=${this.color}/>`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="50" height="200" width="200" fill=${this.color}/>`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon height="100" width="100" points="0,200 300,200 150,0" fill="${this.color}"/>`;
  }
}

module.exports = { Circle, Square, Triangle };
