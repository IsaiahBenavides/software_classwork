// To give an output we use the "return" keyword
// Functions are the building blocks of programs!
// "Invoke" "call" "exacute" are all interchangeable terms to run a function
// Functions allow us to break up programs into more manageable blocks of code.
// Functions provide code reuse because they can be called over and over.
// Without functions, we might have to write the same code in 
// multiple places of the app which violates a key principle known as DRY
// DRY = DON'T REPEAT YOURSELF
/*
Things to remember:
DRY = DON'T REPEAT YOURSELF
Good input (Garbage in Garbage out)
Parameter = function xY = (parameter, parameter)
Argument = xY(argument, argument)
*/

// 2 Ways t o write a function

// Function Declaration *Will hoist

function sayHello(name) {
    console.log('Hello ' + name + '!');
}
sayHello("Isaiah")

// Function Expression *Won't hoist

const sayHi = function (name) {
    if (typeof name !== "string") {
        console.log("Input was not a string, try again.")
        return
    }
    console.log('Hi ' + name + '!');
}
sayHi("Isaiah")
sayHi(1, 2, 3)

// Arrow Functions *Won't hoist
// Also an example of default values
// Implicit return of a single expression
// No highly complex movement with Arrow Functions
// Order does matter and you cannot skip over "num2" to enter a number in "num3"

const add = (num1 = 0, num2 = 1, num3 = 2) => num1 + num2 + num3;

console.log(add(9.35, 3.88, 0));
console.log(add());

function areBothEven(n1, n2) {
    if (typeof n1 !== "number" || typeof n2 !== "number") {
        console.log('Not a number... try again')
        return
    } else {
        return !(n1 % 2) && !(n2 % 2);
    }

}

console.log(areBothEven(2, 6));
console.log(areBothEven(4, 5));
//console.log returns an undefined on purpose
console.log(areBothEven(4, '45'));

// Example of trythy and falsey in a real scenario

const arr = []

// ! statement is giving the oposite of the following
if (!arr.length) {
    console.log('Ihave elements!');
} else {
    console.log('im empty');
}

// Parameters & Arguments
// Parameter is defined within the function
function bottleCapper(/*parameter*/bottle, cap) {
    return bottle + cap
}

// console.log(bottle) will return an error since bottle is a local parameter inside the bottleCapper function

// order matters, the first argument goes to the first parameter and so on

console.log(bottleCapper("green bottle (argument)", "white cap (argument)"));

// Old way to call for every argument, deprecated into the spread (...x) function
// function getDevObject(name) {
//     let skills = [];
//     console.log(arguments)
//     for (let i = 1; i < arguments.length; i++) {
//       skills.push(arguments[i]);
//     }
//     return {
//       devName: name,
//       jobSkills: skills
//     };
//   }

function getDevObject(name, age, ...skills) {
    return {
      devName: name,
      age: age,
      jobSkills: skills
    };
  }

console.log(getDevObject("josh", 28, "code", "something else"));

// Default Parameters

// ES5 version
// function setColor(bicycle, color) {
// 	// set color to 'purple' if not provided
// 	bicycle.color = color || 'purple';
// }

// const bike = bicycle();
// setColor(bike, 'blue');  // sets color to blue
// setColor(bike);  // sets color to purple by default

const bicycle = {
    brand: "mongoose",
    color: "red"
} 

function setColor(bicycle, color /*= "purple") is the same thing as line 124*/) {
    bicycle.color = color || "purple"
}

setColor(bicycle, "blue")
console.log(bicycle);



// Objects
// Key / value pairs
const arrXY = [1,2,3,4]
const person = {
    name: "Mina",
    job: "Dev",
    isAwesome: true,
    skills: ["coding", "something else", "and so on"],
    pet: {
        name: "fido"
    }
}

// ex. Dot notation
console.log(person.name);
console.log(person.pet.name);

const arrOfObj = [
    {
        username: "blah",
        email: "apwiruegth1@email.com"
    },
    {
        username: "blah",
        email: "apwiruegth2@email.com"
    },
    {
        username: "blah",
        email: "apwiruegth3@email.com"
    },
    {
        username: "blah",
        email: "apwiruegth4@email.com"
    }
]

console.log(arrOfObj[3]);

// Functions as Arguments

const z = ["red", "green", "blue"]

// Anonymous Function is not named and is only used locally 
z.forEach(function(color) {
    console.log(color);
});

// Scope
// There's a concept in programming known as The Principle of Least Access.
// The principle is based on the idea that limiting the accessibility of variables (and functions) helps reduce bugs in the code - think of it as a form of "code security".[]
    // a is a global variable
let a = 4;  // Global: a, foo

function foo(x) {   // x is a local variable
    let b = a * 4;  // foo: x, b, bar
    function bar(y) {   //y is also a local variable but it cannot be used outside of the bar function, it is nested inside the bar function which itself is inside the foo function.
        let c = y *b;   // bar: y, c
        return c;
    }
    return bar(b);
}
console.log(foo(a));
    // This will give a reference error. Although they share the same scope with foo above they cannot share local variables. (think independent buildings)
// function foo1() {
//     console.log(c)
// }

// IIFE (Immediately Invoked Function Expressions)
(() => {
    console.log("i was ran immediately");
})();

// Block Scope

// Does not follow the rules of the principle of least access
function varTest() {
    var x = 1;
    if (true) {
      var x = 2;  // same variable!
      console.log(x);  // 2
    }
    console.log(x);  // 2
  }
  
  // Follows the rules of the principle of least access
  function letTest() {
    let x = 1;
    if (true) {
      let x = 2;  // different variable
      console.log(x);  // 2
    }
    console.log(x);  // 1
  }

varTest()
letTest()