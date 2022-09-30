//1. Get the sum of two arrays…actually the sum of 
//all their elements.P.S. Each array includes only integer numbers. Output is a number too.

let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2]; // --> 276
let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26]; // --> 351
// Example output: 
// 276 + 351 = 627

//Class Solution

let sumA = 0;
let sumB = 0;

for (let i = 0; i < arr_1.length; i++) {
    sumA += arr_1[i]
    sumB += arr_2[i]
}

// console.log(sumA, sumB, sumA + sumB)

// const sum = (...x) => {
//     let base = 0
//     console.log(x)
//     arr_2.forEach((v) => {
//         base += v
//     })
//     let base2 = 0
//     console.log(x)
//     arr_1.forEach((v) => {
//         base2 += v
//     })
//     let end = base + base2
//     return end
// }

// console.log(sum())

// let emptyArray = []
// let resultArray = []
// let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
// let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351

// for( let i = 0; i < arr_1.length; i++){
//     emptyArray[i] = arr_1[i] + arr_2[i]
//     resultArray.push(`${arr_1[i]} + ${arr_2[i]} = ${emptyArray[i]}`)
//     console.log(resultArray[i])
// }


//2. Given two arrays of integers. Add up each element in the same position and create a 
//new array containing the sum of each pair. Assume both arrays are of the same length.

let arr_3 = [4, 6, 7];
let arr_4 = [8, 1, 9];
// Example output: 
// [12, 7, 16]

//Class Solution
const sumArr = [];

for (let i = 0; i < arr_3.length; i++) {
    const sum1 = arr_3[i] + arr_4[i]
    sumArr.push(sum1)
}
console.log(sumArr)


//Lab Solution
// let arr_x = []

// for (let i = 0; i < arr_3.length; i++) {
//     arr_x.push(arr_3[i] + arr_4[i])
// }
// console.log(arr_x)


//3.  Write a function called addList that accepts any quantity of numbers as arguments, adds them together and returns the resulting sum.
//- Assume all parameters will be numbers. <=========
// - If called with no arguments, return 0 (zero).

// Examples:

// addList(1) //=> 1
// addList(1,50,1.23) //=> 52.23
// addList(7,-12) //=> -5

//Class Solution
const addList = (...args) => {
    if (!args.length) {     //this is looking to see if args.length is truthy or falsey
        return "No Argument" // ! - the bang operator looks for falsey statements
    }
    let sum = 0
    for (let i = 0; i < args.length; i++) {
        sum += args[i]
    }
    return sum
}

console.log(addList(12, 2, 51, 86, 231, 185, 2, 35, 45, 1))



//Bonus Question if you have finished the exercises:
// Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads 
// the same backward as forward, e.g., "madam" or "nurses run".

//.replace(/\s/g, '') is an example of regex, it has its own syntax and is like another language!
//this example is searching through the string and removing anything 
//that it finds which is specified

function checkPalindrome(str) {
    const trimmed = str.trim().replace(/\s/g, '')
    const flippedStr = trimmed
        .split("")
        .reverse()
        .join("")
    console.log(flippedStr)
    return flippedStr.toLowerCase() === trimmed.toLowerCase()
}

console.log(checkPalindrome("     madam    "))
console.log(checkPalindrome("   AB BA AB   "))
console.log(checkPalindrome("Mad     am"))

//Flip string with a for loop!

let str = "hello world"
let flippedStr = ""

for (let i = str.length - 1; i >= 0; i--) {
    flippedStr += str[i]
}
console.log(flippedStr)



