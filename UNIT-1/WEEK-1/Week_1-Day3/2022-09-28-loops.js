// Loops and Arrays
// Operators
// ++ - increment by 1
// -- - decrement by 1
// % - modulo returns the remainder (remainder operator)

let i = 5 /*because the for loop already has an i defined it will not grab this global 
definition and instead use its own definition.
*/
for (let i = 0; i < 10; i++) { /* you can use the same variable in multiple for loops 
because it is defined locally*/
    console.log(i);
}

console.log(i) //This console will use the global definition instead of the for loop definition.

for (let i = 10; i >= 0; i--) {
    console.log(i)
}

for (let i = 1; i < 10; i += 2) {
    console.log(i)
}

for (let i = 0; i < 10; i += 2) {
    console.log(i)
}

for (let i = 3; i <= 60; i += 3) {
    console.log(i)
}

let str = ""

for (let i = 0; i < 7; i++) {
    str += "#"
    console.log(str)
}

for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i)
    } else {
        console.log("odd")
    }
}
// Not sure how to log prime numbers
for (let i = 1; i <= 20; i++) {
    if (i % i != 0) {
        console.log("prime")
    } else if (i % 2 === 0) {
        console.log("even")
    } else {
        console.log("odd")
    }
}

// Arrays

let nums = [2, 4, 18, 90, 45]

let movies = ["Pulp Fiction", "Saving Private Ryan", "Baby Driver"]

let firstMovie = movies[0] // will give "Pulp Fiction"

console.log(firstMovie)

movies.push("Last Samurai", "The Good, The Bad, and The Ugly")
//push property adds to the end of the array

movies.unshift("Nightcrawler")
//unshift property adds to the start of the array. Now firstMovie would give Nightcrawler

movies.pop()
//pop property removes the last entry in the array. this would remove The Good, The Bad, and The Ugly

movies.shift()
//shift property removes the first entry in the array "0". This would remove Nightcrawler

/*
unshift -> [...] <- push
shift <- [...] -> pop
*/

//array.splice(start, deleteCount, newItem1, newItem2, ...)
movies.splice(1, 0, "Star Wars")
//in this example splice starts at the array movies second "1"st entry which would be 
//Saving Private Ryan, it then deletes 0 entries, meaning it keeps Saving Private Ryan
//and moves it infromt of the new "1"st entry which is "Star Wars"

let removedMovies = movies.splice(0, 3)

console.log(movies)

console.log(removedMovies)

// Iterate Over an Array w/ a For loop
// for loop
/* for(let i =0; i < movies.length; i++) {
    console.log(movies[i])
}
*/

//This is an arrow function! movie is our itterator, it equals the entry of 
// its rotation (1st go around it is Baby Driver 2nd it is Last Samurai and so on) 
// forEach Method
movies.forEach((movie, idx) => {
    console.log(movie + " is a great movie" + " and is at index " + idx)
})

// String concatination
// console.log("The movie " + movies[0] + " is awesome!")

// for of loop
for (let movie of movies) {
    console.log(movie)
}

//spread operator will take the elements of the given array and spread them out.
//these methods make a copy of the original array
// spread operator examples
const movieCopy = [...movies]
console.log(movieCopy)

let moreMovies = ["Space Balls", "Alien", ...movies, "Armagedon"]
console.log(moreMovies)

//join operator

const movieStr = moreMovies.join()
console.log(movieStr)

// split operator is a string method, can only be used with strings!

const anothaArray = movieStr.split(",")
console.log(anothaArray)



