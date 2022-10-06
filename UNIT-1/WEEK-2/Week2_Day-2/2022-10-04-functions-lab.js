// EXERCISE 1: Write a Function Declaration
// Write a function named computeAreausing the function declaration approach.

// It will have two parameters: width& height.

// It will compute the area of a rectangle (width X height) 
//and return a string in the following form:

// The area of a rectangle with a width of _ and a height of _ is ___ square units.

// Invoke the function to test it.

function computeArea(width, height) {
    let area = width * height
    console.log("The area of a rectangle with a width of " + width + " and a height of " + height + " is " + area + " square units.")
}
computeArea(20, 15)

// EXERCISE 2: Write a Function Expression
// Write a function named planetHasWaterusing the function expression syntax.

// It will have one parameter: planet.

// Return trueif the planetargument is either "Earth" or "Mars", otherwise return false.

// Bonus points if you ensure the function will work regardless of the casing of the planetbeing passed in ('earth', 'MARS', etc.).

// Invoke the function a couple of times to test it!

let planetHasWater = (planet) => {
    planet = planet.toLowerCase();
    if (planet === "earth" || planet === "mars") {
        console.log(planet);
        return true;
    } else {
        return false;
    }
}
console.log(planetHasWater("EaRth"));
console.log(planetHasWater("Mars"))

// FUNCTION REVIEW QUESTIONS
// ❓ How many different ways are there to define a function?
// 2, Function declaration & Function Expression. 3 if you count Arrow as a seperate definition
// ❓ What's the only practical difference between a function definition and a function expression?
// Expression will not hoist the function to the top and act it out globaly while declaration will.

