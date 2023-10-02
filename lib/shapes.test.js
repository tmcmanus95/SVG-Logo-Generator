const { Circle, Triangle, Square } = require("./shapes");

//Tests Circle Shape
describe("Circle Test", () => {
  test("Circle Shape Created", () => {
    const shape = new Circle();
    const color = "red";
    const text = "CIR";
    shape.chooseColor(color);
    expect(shape.create()).toEqual(
      `<circle cx="150" cy="100" r="80" fill=${color}/>`
    );
  });
});

//Tests Square Shape
describe("Square Test", () => {
  test("Square Shape Created", () => {
    const shape = new Square();
    const color = "green";
    shape.chooseColor(color);
    expect(shape.create()).toEqual(
      `<rect x="50" height="200" width="200" fill=${color}/>`
    );
  });
});

//Tests Triangle Shape
describe("Triangle Test", () => {
  test("Triangle Shape Created", () => {
    const shape = new Triangle();
    const color = "blue";
    shape.chooseColor(color);
    expect(shape.create()).toEqual(
      `<polygon height="100" width="100" points="0,200 300,200 150,0" fill="${color}"/>`
    );
  });
});
