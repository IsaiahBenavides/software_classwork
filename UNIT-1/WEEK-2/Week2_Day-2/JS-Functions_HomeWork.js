// 1.
// (completed above) Define a function, as a function declaration, maxOfTwoNumbersthat takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.

function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  
    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
  }
  
  console.log(maxOfTwoNumbers(3, 9));

// 2.
// Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

const maxOfThree = function(x,y,z){
    if (x >= y || x >= z) {
        return x;
    }else if (y >= z) {
        return y;
    }else {
        return z
    }
}
console.log(maxOfThree(1,5,3))

// 3.
// Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.

const vowels = ["a", "e", "i", "o", "u"]

function isCharAVowel(letter){
    letter = letter.toLowerCase();
    if (vowels.includes(letter)){
        return true
    }else {
        return false
    }
}

console.log(isCharAVowel("E"))
console.log(isCharAVowel("b"))

// 4.
// Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.



const sumArray = function(nums){
    let base = 0
    console.log(nums)
    nums.forEach((x) => {
        base += x
    })
    return base
}

console.log(sumArray([1,2,3]))

// 5.
// Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product of those numbers. For example, multiplyArray([2, 4, 5]);would return 40.

// 6.
// Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.

// 7.
// Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar');would return the string "ratskcor".

// 8.
// Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.

// 9.
// Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments, and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"].