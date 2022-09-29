// functions

// const x = 1
// const y = 2
// const z = 3
// const w = 4
//long and must be redone
// (x+y+z+w) + 3;

//this will hoist to the top!

// function addition(x, y) {
//     let sum = x + y
//     console.log(sum)
// }

// addition(a(2 * 3, 5), a(16 / 2, 7))

// addition(45, 9)

// addition('I like ', 'Turtles!')

// //Many Arguments
// //this will not hoist to the top!
// const spreadArgs = (...args) => {
//     console.log(args)
// }

// spreadArgs(1, 2, 3, 4, "chesse", 79)

// //using the return value the computer will log the 
// function a(x, y) {
//     let sum = x + y
//     return sum
// }

// //Excersise

// function addThreeNums(x, y, z) {
//     return x + y + z

// }

// let sum1 = addThreeNums
// console.log(sum1(a(3, 3), a(20, -5), a(8.5, 37 / 8)))


// const addDivide = (a, b, c) => {
//     return (a + b + c) / 3
// }

// console.log(addDivide(10, 20, 600))

// const findAverage = (...args) => {
//     let base = 0
//     console.log(args)
//     args.forEach((num) => {
//         base += num
//     })
//     return base / args.length
// }

// console.log(findAverage(2,58,89,10,53))

// let traker = 0

// function printHelloWorld(str) {
//     console.log(str)
//     printName("- Toby")
// }

// function printName (name) {
//     console.log(name)
//     //console.trace("my first trace")
// }

// const increment = () => {
//     const aVar = 'hello shvverlt'
//     traker++
//     console.log(traker)
//     printHelloWorld(aVar)
// }


// // this shall bthrow an error as aVar is only defined inside the function!
// // console.log(aVar)

// //as the increment function is called it shall increment tracker by 1!
// increment()
// increment()

for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 != 0) {
        console.log("Buzz")
    } else if (i % 3 === 0) {
        console.log("Fizz")
    } else {
        console.log(i)
    }
}

// let stinko = []
// for (let i = 1; i < 17; i++) {
//     if (i % 5 === 0 && i % 3 === 0) {
//         stinko.push("fizzbuzz")
//     } else if (i % 3 === 0) {
//         stinko.push("fizz")
//     } else if (i % 5 === 0) {
//         stinko.push("buzz")
//     } else {
//         stinko.push(i)
//     }console.log(stinko)
// }



// for (let i = 10; i <= 100; i++) {
//     if (i % 10 === 0 && i % 20 != 0) {
//         console.log(i)
//     }
// }
// for (let i = 10; i <=100; i++) {
//     if(i % 20 === 0){
//         console.log(i)
//     }
// }