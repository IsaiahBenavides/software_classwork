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
console.log(maxOfThree(1,2,3))
// Define a function, as a function declaration, isCharAVowelthat takes a character as an argument and returns true if it is a vowel, false otherwise.

// Define a function, as a function expression, sumArraythat takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.

// Define a function, as a function declaration, multiplyArraythat takes an array of numbers and returns the product of those numbers. For example, multiplyArray([2, 4, 5]);would return 40.

// Define a function, as a function expression, numArgsthat returns the number of arguments passed to the function when called.

// Define a function, as a function declaration, reverseStringthat takes a string, reverses the characters, and returns it. For example, reverseString('rockstar');would return the string "ratskcor".

// Define a function, as a function expression, longestStringInArraythat takes an array of strings as an argument and returns the length of the longest string.

// Define a function, as a function declaration, stringsLongerThanthat takes an array of strings and a number as arguments, and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"].