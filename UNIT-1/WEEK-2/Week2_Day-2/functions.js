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

*/

// 2 Ways t o write a function

// Function Declaration *Will hoist

function sayHello(name) {
    console.log('Hello ' + name + '!')
}
sayHello("Isaiah")

// Function Expression *Won't hoist

const sayHi = function(name) {
    if (typeof name !== "string") {
        console.log ("Input was not a string, try again.")
        return
    } 
    console.log('Hi ' + name + '!')
}
sayHi("Isaiah")
sayHi(1, 2, 3)

// Arrow Functions *Won't hoist
// Also an example of default values
// Implicit return of a single expression
// No highly complex movement with Arrow Functions
// Order does matter and you cannot skip over "num2" to enter a number in "num3"

const add = (num1 = 0, num2 = 1, num3 = 2) => num1 + num2 + num3;

console.log(add(9.35, 3.88, 0))
console.log(add())

function areBothEven(n1, n2) {
    if(typeof n1 !== "number" || typeof n2 !== "number") {
        console.log('Not a number... try again')
        return
    } else {
        return !(n1 % 2) && !(n2 % 2);
    }
    
  }

console.log(areBothEven(2,6))
console.log(areBothEven(4,5))
console.log(areBothEven(4,'45'))

// Example of trythy and falsey in a real scenario

const arr = []

// ! statement is giving the oposite of the following
if (!arr.length) {
    console.log('Ihave elements!')
} else {
    console.log('im empty')
}

