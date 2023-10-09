import { Circle } from "./components/Circle/Circle.js";
console.clear();
import { Square } from "./components/Square/Square.js";
console.clear();
import { Pentagon } from "./components/Pentagon/Pentagon.js";

console.clear();

const root = document.getElementById("root");

// const circleElement = Circle();
// const squareElement = Square();
// const pentagonElement = Pentagon();

root.append(Circle(), Square(), Pentagon());
