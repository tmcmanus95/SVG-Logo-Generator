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

  //function that creates the shape and text elements for the svg file.
  create() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${this.logoShapeContent}
      ${this.logoTextContent}
    </svg>`;
  }

  //Text element
  setLogoText(text) {
    this.logoTextContent = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${text}</text>`;
  }

  //Shape element
  setLogoShape(shape) {
    this.logoShapeContent = shape.create();
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
  .then((answer) => {
    //Inputs from the user are then saved in a new Svg instance.
    const svg = new Svg();

    //Sets the text of the logo to user input
    svg.setLogoText(answer.text);

    //Checks the inputted shape using switch/case and sets the shape
    switch (answer.shape) {
      case "Circle":
        const circle = new Circle();
        circle.chooseColor(answer.color);
        svg.setLogoShape(circle);
        break;
      case "Triangle":
        const triangle = new Triangle();
        triangle.chooseColor(answer.color);
        svg.setLogoShape(triangle);
        break;
      case "Square":
        const square = new Square();
        square.chooseColor(answer.color);
        svg.setLogoShape(square);
        break;
      default:
        console.error("Please try inputting the shape again.");
        break;
    }

    const logo = svg.create();

    // Saves the new SVG logo
    fs.writeFileSync("logo.svg", logo);

    console.log("SVG logo successfully created!");
  });
