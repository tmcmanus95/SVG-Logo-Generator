const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle } = require("./lib/shapes");

//Creates a SVG constructor
class Svg {
  constructor() {
    //Initializes the text and shape content to an empty string
    this.logoTextContent = "";
    this.logoShapeContent = "";
  }

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${this.logoShapeContent}
      ${this.logoTextContent}
    </svg>`;
  }

  setLogoText(text) {
    this.logoTextContent = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${text}</text>`;
  }

  setLogoShape(shape) {
    this.logoShapeContent = shape.render();
  }
}

//Prompts that will appear when the user inputs node index.js
inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message: "Input three characters that will appear on the logo",
    },
    {
      type: "input",
      name: "color",
      message: "Enter a color",
    },
    {
      type: "list",
      message: "Select a shape",
      name: "shape",
      choices: ["Circle", "Triangle", "Square"],
    },
  ])
  .then((answers) => {
    //Inputs from the user are then saved in a new Svg instance.
    const svg = new Svg();

    //Sets the text of the logo to user input
    svg.setLogoText(answers.text);

    //Checks the inputted shape using switch/case and sets the shape
    switch (answers.shape) {
      case "Circle":
        const circle = new Circle();
        circle.chooseColor(answers.color);
        svg.setLogoShape(circle);
        break;
      case "Triangle":
        const triangle = new Triangle();
        triangle.chooseColor(answers.color);
        svg.setLogoShape(triangle);
        break;
      case "Square":
        const square = new Square();
        square.chooseColor(answers.color);
        svg.setLogoShape(square);
        break;
      default:
        console.error("Please try inputting the shape again.");
        break;
    }

    const logo = svg.render();

    // Saves the new SVG logo
    fs.writeFileSync("logo.svg", logo);

    console.log("SVG logo successfully created!");
  });
