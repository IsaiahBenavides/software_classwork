//================================================================================================
//                                   JAVASCRIPT TOTAL RECALL
//================================================================================================

//                   =============== I. VARIABLES & DATATYPES ===============

// ==== Q&A ====

/*
1. How do we assign a value to a variable?
    Using one of the variable keywords (const, let or var) and naming the variable as well as giving it a value.

2. How do we change the value of a variable?
    By calling back to that variables name and using the '=' operator followed by whatever value you want to set it to.

3. How do we assign an existing variable to a new variable?
    Using the '=' we can call back to existing variables or even create a new variable.

4. Remind me, what are declare, assign, and define?
    Declare is to 'name' (let, const, var) something.
    Assign refers to giving (= operator) something declared a value.
    Define states the value that something is given.(what goes beyond the = operator)

5. What is pseudocoding and why should you do it?
    Pseudocoding refers to speaking or writing a block of code in a manner that is closer to speaking with another human. This helps to understand the logic needed for coding and may also show new ways to find a solution.

6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
    This may vary depending on the assingment, if you can see a clear place to start you should start immediatly.
*/

// ==== STRINGS ====

/*
1. Create a variable called firstVariable

2. Assign it the value of the string "Hello World"

3. Change the value of this variable to some number

4. Store the value of firstVariablein a new variable called secondVariable

5. Change the value of secondVariableto any string.

6. What is the value of firstVariable?

7. Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated. ex: Hello, my name is Jean Valjean
*/

// 1.               2.
let firstVariable = `Hello World`

// 3.
firstVariable = 8

// 4.
let secondVariable = firstVariable

// 5.
secondVariable = `String`

// 6.
// firstVariable = 8

// 7.
let yourName = `Isaiah B.`

console.log(`Hello, my name is ${yourName}`)

// ==== BOOLEANS ====

/*
Using the provided variable definitions, replace the blanks so that all log statements print true in the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console
*/

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false || false || false || false || false || true);
console.log(false == false)
console.log(e === 'Kevin');
console.log(a < b <= c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a !== a < d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');

// ==== THE FARM ====

/*
1. Declare a variable animal. Set it to be either "cow" or something else

2. Write code that will print out "mooooo" if the it is equal to cow

3. Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."

4. Commit
*/

// 1.
let cow = true

if (cow === true) {
    console.log(`Mooooo`)
} else {
    console.log("Hey! You're not a cow.")
}

// ==== DRIVER'S ED ====

/*
1. Make a variable that holds a person's age; be semantic

2. Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
*/

let driversAge = 20

if (driversAge >= 16) {
    console.log("Here are the keys!")
} else {
    console.log("Sorry, you're too young.")
}

//                   =============== II. LOOPS ===============

// ==== THE BASICS ====

// for (let i = 1; i <= 10; i++){
//     console.log(i)
// }

// for (let i = 10; i <= 400; i++){
//     console.log(i)
// }

// for (let i = 12; i < 4000; i++){
//     if(i % 3 === 0){
//         console.log(i)
//     }
// }

// ==== GET EVEN ====

// for (let i = 2; i < 100; i++){
//     console.log(i)
// }

// for (let i = 2; i < 100; i++){
//     if (i % 2 === 0){
//         console.log(`${i} is an even number`)
//     } else {
//         console.log(i)
//     }
// }

// ==== GIVE ME FIVE ====

// for (let i = 0; i <= 100; i++){
//     if (i % 5 === 0){
//         console.log(`I found a ${i}. High five!`)
//     } 
// }

// for (let i = 0; i <= 100; i++){
//     if (i % 3 === 0){
//         console.log(`I found a ${i}. Three is a crowd...`)
//     } 
//     else if (i % 5 === 0){
//         console.log(`I found a ${i}. High five!`)
//     } 
// }

// for (let i = 0; i <= 100; i++){
//     if (i % 3 === 0 && i % 5 === 0){
//         console.log(`I found a ${i}.Three is a crowd... High five`)
//     }
//     else if (i % 3 === 0){
//         console.log(`I found a ${i}. Three is a crowd...`)
//     }
//     else if (i % 5 === 0){
//         console.log(`I found a ${i}. High five!`)
//     } 

// }

// ==== SAVINGS ACCOUNT ====

/*
1. Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account. Check your work! Your bank_account should have $55 in it.

2. You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2. Check your work! Your bank_account should have $10,100 in it.
*/

let bank_account = 0

// for (let i = 0; i <= 10; i++){
//     bank_account += i
//     console.log(bank_account)
// }


// for (let i = 0; i <= 100; i++){
//     bank_account += i * 2
//     console.log(bank_account)
// }

//              =============== III. ARRAYS & CONTROL FLOW ===============

// ==== TALK ABOUT IT ====

/*
1. What are the things in an array called?
    Indices, arrays are indexes and they hold indices.

2. Do Arrays guarantee those things will be in order?
    Yes, arrays will give you back the same order they have.

3. What real-life thing could you model with an array?
    A movie collection or a top 10 countdown

*/

// ==== EASY DOES IT ====

// 1. Create an array that contains three quotes and store it in a variable called quotes

let quotes = [`It is what it is`, `Such is life`, `Six of one half a dozen of the other`]

// ==== ACCESSING ELEMENTS ====

/*
Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

1. What would you write to access the 3rd element of the array?

2. Change the value of "Github" to "Octocat"

3. Add a new element, "Cloud City" to the array
*/

ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// 1.
ourClass[2]

// 2.
ourClass[4] = "Octocat"
console.log(ourClass[4])

// 3.
ourClass.push(`Cloud City`)
console.log(ourClass)

// ==== MIX IT UP ====

/*
Note: You don't really need .splice() for these. You could use it, but there are simpler array methods that are more appropriate.

Given the following array: const myArray = [5, 10, 500, 20]

1. Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.

2. Remove the 5 from the beginning of the array.

3. Add the string "Bob Marley"to the beginning of the array.

4. Remove the string of your choice from the end of the array.

5. Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse() method return anything?
 */

const myArray = [5, 10, 500, 20]

// 1.
myArray.push("Aegon")
myArray.push("Jack")
console.log(myArray)

// 2.
myArray.shift()
console.log(myArray)

// 3.
myArray.unshift("Bob Marley")
console.log(myArray)

// 4.
myArray.pop()
console.log(myArray)

// 5.
myArray.reverse()
console.log(myArray)
// .reverse inverted the array, now Aegon is first and Bob Marley is last.

// ==== BIGGIE SMALLS ====

/*
Create a variable that contains an integer.

Write an if ... else statement that:

1. console.log()s "little number" if the number is entered is less than 100

2. console.log()s "big number" if the number is greater than or equal to 100.
*/

let integer = 25

if (integer < 100) {
    console.log("Little number")
} else {
    console.log("Big number")
}

// ==== MONKEY IN THE MIDDLE ====

/*
Write an if ... else if ... else statement:

1. console.log() little number if the number entered is less than 5.

2. If the number entered is more than 10, log big number.

3. Otherwise, log "monkey".
*/

if (integer < 5) {
    console.log("Little number")
} else if (integer > 10) {
    console.log("Big number")
} else {
    console.log("Monkey")
}

// ==== WHAT'S IN YOUR CLOSET? ====

/*
Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

1.What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.

2. Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".

3. Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.

4. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.

5. In the same way, access one item from Thom's pants array.

6. Access one item from Thom's accessories array.

7. Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"

8. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
*/

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
    [
        // These are Thom's shirts
        "grey button-up",
        "dark grey button-up",
        "light blue button-up",
        "blue button-up",
    ], [
        // These are Thom's pants
        "grey jeans",
        "jeans",
        "PJs"
    ], [
        // Thom's accessories
        "wool mittens",
        "wool scarf",
        "raybans"
    ]
];

// 1.
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!")

// 2.
kristynsCloset.splice(6, 0, "raybans")
console.log(kristynsCloset)

// 3.
kristynsCloset[5] = "stained knit hat"
console.log(kristynsCloset)

// 4.
console.log(thomsCloset[0][0])

// 5.
console.log(thomsCloset[1][0])

// 6.
console.log(thomsCloset[2][0])

// 7.
console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][0]} and ${thomsCloset[2][0]}!`)

// 8.
thomsCloset[1][2] = "Footie Pajamas"
console.log(thomsCloset[1])

//                      =============== IV. FUNCTIONS ===============

// ==== PRINT GREETING ====

// Do you think you could write a function called printGreeting with a parameter namethat returns a greeting with the argument interpolated into the greeting?

let printGreeting = (name) => {
    console.log(`Hello there, ${name}`)
}

printGreeting(`Bud`)

// ==== CALCULATE CUBE ====

// Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.

let calculateCube = (number) => {
    cube = number * number * number
    return cube
}

console.log(calculateCube(5))

// ==== IS VOWEL ====

//Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.

let vowels = [`a`, `e`, `i`, `o`, `u`]

let isVowel = (letter) => {
    letter = letter.toLowerCase()
    if (vowels.includes(letter)) {
        return true
    } else {
        return false
    }
}

console.log(isVowel(`a`))
console.log(isVowel(`E`))
console.log(isVowel(`i`))
console.log(isVowel(`O`))
console.log(isVowel(`u`))
console.log(isVowel(`Q`))

// ==== GET TWO LENGTHS ====

// Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

let getTwoLengths = (str1, str2) => {
    // return ([str1.length, str2.length])

    let lengthOfStr1 = 0
    let lengthOfStr2 = 0
    let arr = []

    for (let i = 0; i < str1.length; i++) {
        lengthOfStr1++
    }
    for (let i = 0; i < str2.length; i++) {
        lengthOfStr2++
    }
    arr.push(lengthOfStr1, lengthOfStr2)
    return arr
}

console.log(getTwoLengths(`III`, ``))

// ==== GET MULTIPLE LENGTHS ====

// Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
let arr1 = []

let getMultipleLengths = (arrOfStrings) => {
    for (let i = 0; i < arrOfStrings.length; i++) {
        let strLength = 0
        for (let j = 0; j < arrOfStrings[i].length; j++) {
            strLength++
        }
        arr1.push(strLength)
    }
    return arr1
}

console.log(getMultipleLengths([`I`, `II`, `III`, `IIII`]))

// ==== MAX OF THREE ====

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.

let maxOfThree = (x, y, z) => {
    if (x > y && x > z) {
        return x
    } else if (y > x && y > z) {
        return y
    } else {
        return z
    }
}

console.log(maxOfThree(1, 2, 3))
console.log(maxOfThree(10, 2, 3))
console.log(maxOfThree(1, 20, 3))

// ==== PRINT LONGEST WORD ====

// Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

let printLongestWord = (arrOfWords) => {
    let wordLength = ``
    for (let i = 0; i < arrOfWords.length; i++) {
        if (wordLength.length < arrOfWords[i].length) {
            wordLength = arrOfWords[i]
        }
    }
    return wordLength
}


console.log(printLongestWord([`I`, `II`, `III`, `II`, `I`]));

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

//                      =============== V. OBJECTS ===============

// ==== MAKE A USER OBJECT ====

/* 
1. Create an object called user.

2. Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchasedto an empty array []. Set the other values to whatever you would like.
*/

// 1.
const user = {
    // 2.
    name: `Jim`,
    email: `Jim@email.butt`,
    age: 17,
    purchased: []
}

// ==== UPDATE THE USER ====

/*
1. Our user has changed his or her email address. Without changing the original userobject, update the emailvalue to a new email address.

2. Our user has had a birthday! Without changing the original user object, increment the age value using the postfix operator. Hint: age++
*/

// 1.
user.email = `JimmyJamsDaCoolestDarkSSJSSG@email.butt`
console.log(user.email)

// 2.
user.age++
console.log(user.age)

// ==== ADDING KEYS AND VALUES ====

/*
You have decided to add your user's location to the data that you want to collect.

1. Without changing the original user object, add a new key location to the object, and give it a value or some-or-other location (a string).
*/

// 1.
user.location = `Newark, New Jersey`
console.log(user)

// ==== SHOPAHOLIC! ====

/*
1. Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.

2. Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.

3. Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.

4. Console.log just the "Merino jodhpurs" from the purchasedarray.
*/

// 1.
user.purchased.push(`carbohydrates`)
console.log(user.purchased)

// 2.
user.purchased.push(`peace of mind`)
console.log(user.purchased)

// 3.
user.purchased.push(`Merino jodhpurs`)
console.log(user.purchased)

// 4.
console.log(user.purchased[2])

// ==== OBJECT-WITHIN-OBJECT ====

// Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.

// If we want to give our user a friendwith a nameand age, we could write:

// user.friend = {
//     name: `Grace Hopper`,
//     age: 85
// }

// When we console.log user, we would see the friendobject added to our user object.

/*
1. Write a friendobject into your user object and give the friend a name, age, location, and purchased array (empty for now)

2. Console.log just the friend's name

3. Console.log just the friend's location

4. CHANGE the friend's age to 55

5. The friendhas purchased "The One Ring". Use .push() to add "The One Ring" to the friend's purchasedarray.

6. The friendhas purchased "A latte". Use .push() to add "A latte" to the friend's purchasedarray.

7. Console.log just "A latte" from the friend's purchasedarray.
*/

// 1.
user.friend = {
    name: `George`,
    age: 26,
    location: `France`,
    purchased: []
}

// 2.
console.log(user.friend.name)

// 3.
console.log(user.friend.location)

// 4.
user.friend.age = 55

// 5.
user.friend.purchased.push(`The One Ring`)

// 6.
user.friend.purchased.push(`A latte`)

// 7.
console.log(user.friend.purchased[1])

// ==== LOOPS ====

/*
1. Write a for loop that iterates over the User's purchased array (NOT the friend's purchased array), and prints each element to the console.

2. Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.
*/

// 1.
for (let i = 0; i < user.purchased.length; i++){
    console.log(user.purchased[i])
}

// 2.
for (let i = 0; i < user.friend.purchased.length; i++){
    console.log(user.friend.purchased[i])
}

// ==== FUNCTIONS CAN OPERATE ON OBJECTS ====

/*
1. Write a single function updateUser that takes no parameters. When the function is run, it should:

2. It should increment the user's age by 1

3. Make the user's name uppercase

The function does not need a return statement, it will merely modify the user object.

4. Write a function oldAndLoud that performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our user object, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoud function with user as the argument.
*/

// 1.
let updateUser = () => {
    // 2.
    user.age++
    // 3.
    user.name = user.name.toUpperCase()

}

updateUser(user)
console.log(user)

// 4.
let oldAndLoud = (person) => {
    person.age++
    person.name = person.name.toUpperCase()
}

oldAndLoud(user)
console.log(user)

//                    =============== VI. CAT COMBINATOR ===============

// ==== MAMA CAT ====

/* 
Define an object called cat1 that contains the following properties:
name
breed
age (a number)
console.log the cat's age
console.log the cat's breed
*/

const cat1 = {
    name: `Lucy`,
    breed: `callico`,
    age: 3
}
console.log(cat1.age)
console.log(cat1.breed)

// ==== PAPA CAT ====

/*
Define an object called cat2 that also contains the properties:
name
breed
age (a number)
*/

const cat2 = {
    name: `Albert Whiskers`,
    breed: `tabby`,
    age: 5
}

// ==== COMBINE CATS! ====

/* 
The cats are multiplying!

Write a function combineCats that has two parameters mama, and papa. The function will take two arguments -- each a cat object.

Pass cat1 and cat2 as arguments to the combineCats function. The function should console.log them.

Make it so the combineCatsfunction will return a combination of the two incoming cats

The result should be an object wherein the

name is a concatenation of the parents' names
the age is 1
the breed is each of the parents' breeds with a hyphen in between
*/

let combineCats = (p1, p2) => {
    newAge = 1
    newBreed = p1.breed + ` - ` + p2.breed
    newName = p1.name+p2.name
    let child =  {
        name: newName,
        breed: newBreed,
        age: newAge,
    }
    console.log(child)
}

combineCats(cat1, cat2)

// ==== CAT BRAIN BENDER ====

/*

*/


