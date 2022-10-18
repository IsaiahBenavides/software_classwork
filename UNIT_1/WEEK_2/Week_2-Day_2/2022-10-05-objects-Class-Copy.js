// Everything is an object, even functions
// know the difference between arrays and objects

// key (always a string): value (any type) pair
// if you do this, then each of the keys has an undefined value and it will cause an error
// const car = {
//     make, 
//     model,
//     color,
//     year
// }
// console.log(car)

// unless you have a good reason to, it's best to assign the values to the keys 
const car = {
    make: "BMW",
    model: "M3",
    color: "Black",
    year: "2026"
}
// the below console log shows the entire car object
console.log(car)


// to access the data in an object, we use dot notation
// this will show "BMW"
console.log(car.make)
// using interpolation
console.log(`the car's make is: ${car.make}`)
// this will show 2026
console.log(car.year)

// Can we access the keys?
// yes, by using the Object method Object.keys()
console.log(Object.keys(car))

// you can change a value by reassigning the key 
car.color = "white"
console.log(car)

// ALL keys must be unique, otherwise the value of the key will be overwritten by the most recent assignment

car.doors = '2'
console.log(car)

// to delete a key, you can use delete
delete car.doors
console.log(car)