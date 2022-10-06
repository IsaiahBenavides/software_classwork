// // Intro to Objects
// // What is an object? Everything in JS is an object!
// // Very simply, objects are a collection of zero or more properties
// // What is a property? A property consists of a key: value pair, where the 
// // Functions inside of objects are methods
// // The main difference of var, let, and const is scope

// // Can state the keys without assigning values (this will throw an error if run alone)
// // const car1 = {
// //     make,
// //     model,
// //     color,
// //     year,
// // }

// const car2 = {
//     make: "Ferd",
//     model: "Cilontro",
//     color:"blue",
//     year: "2004",
//     drive: ()=> { 
//         console.log("The " + car2.make + " is driving...")
//     }
// }

// console.log(car2)

// // to access data in an object we use dot notation (obj.key)

// // you can change the value of keys on the fly!
// car2.model = "Brocolli"

// console.log(car2.model)

// // Object.keys can show all the active keys in an object
// console.log(Object.keys(car2))

// // A key is like an index in an array, but it has 1. A name 2. It is unique

// car2.doors = "4"
// console.log(car2.doors)

// delete car2.doors
// console.log(car2)

// // An object can not have more than one key with the same name. If it does, the value will default to the last key with the same name, and the prior properties will be excluded on creation.
// const borough = {
// 	name: "Brooklyn",
// 	name: "The Bronx"
// }
// // borough will return "The Bronx" in this example

// // Methods! A function inside an object! Remember to put () it is a function call!
// // Objects can have any number of methods!



// car2.drive()

// The this. key word is always refering to its local object

const car3 = {
    make: "Ford",
    model: "Cilontro",
    color: "blue",
    year: "2004",
    drive: () => {
        "The " + this.make + " is now driving..."
    }
}

console.log(car3.drive())

// Defined function example of different scope calling
const car4 = {
    make: "Ford",
    model: "Cilontro",
    color: "blue",
    year: "2004",
    drive: function () {
        console.log("The " + this.make + " is now driving...")
    },
    owners: ["bob", "sally", "sue"]
}

car4.drive()

console.log(car4.owners[1])

