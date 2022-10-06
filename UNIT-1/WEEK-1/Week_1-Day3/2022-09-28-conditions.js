// Conditionals and IF statements

//Operators
// === - strictly equals, compares value and datatype
// == - loose equals, only compares value
// > - greater than
// < - less than
// >= - greater than or equal to
// <= - less than or equal to
//  && - and operator, used to check for multiple expressions
// || - or operator, if at least one of the expressions is true it shall run

// Exercises

// Example of loose equals

let y = '10'

if (y == 10) {
    //do this
    console.log('That is true!!')
}
else {
    //do this
    console.log('That is false...')
}

// Example of strict equals

let x = '10'

if (x === 10) {
    //do this
    console.log('That is true!!')
}
else {
    //do this
    console.log('That is false...')
}

// Practice

let num = -20

if (num === 0) {
    console.log('It is zero!')
}
else if (num < 0) {
    console.log('It is negative!')
}
else {
    console.log('It is positive!')
}

let age = 17

if (age >= 18) {
    console.log("True, access granted")
} else {
    console.log("Access denied")
}

//Nested if statements

if (true) {
    if (true) {
        console.log("nested is running")
    } else {
        console.log("second expression is false")
    }
} else {
    console.log("first expresion is false")
}

//Exercises

// Nested
const integer2 = 21

if (integer2 > 0) {
    if (integer2 > 100) {
        console.log("integer is greater than 100")
    } else if (integer2 === 100) {
        console.log("its's 100")
    } else {
        console.log("integer is less than 100")
    }
} else {
    console.log("integer is negative")
}

//Chained else/if
const integer = 100

if (integer > 100) {
    console.log("Greater than 100 and positive!")
} else if (integer > 0 && integer < 100) {
    console.log("Less than 100 and positive!")
} else if (integer === 100) {
    console.log("It is exactly 100!")
} else {
    console.log("It is negative...")
}

let testScore = 70

if (testScore >= 90) {
    console.log("A")
} else if (testScore >= 80) {
    console.log("B")
} else if (testScore >= 70) {
    console.log("C")
} else if (testScore >= 55) {
    console.log("D")
} else {
    console.log("F")
}

