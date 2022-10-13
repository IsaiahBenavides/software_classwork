////////////////////////////////
// Easy Going
////////////////////////////////

for(let i = 0;i <= 20; i++){
    console.log(i)
}

////////////////////////////////
// Get Even
////////////////////////////////

for(let i = 0;i <= 200; i++){
    if(i % 2 === 0){
        console.log(i)
    }
}

////////////////////////////////
// Fizz Buzz
////////////////////////////////

for(let i = 0;i <= 100; i++){
    if(i%3===0&&i%5===0){
        console.log(`FizzBuzz`)
    }else if(i%5===0){
        console.log(`Buzz`)
    }else if(i%3===0){
        console.log(`Fizz`)
    }else{
        console.log(i)
    }
}

////////////////////////////////
// Wild Wild Life
////////////////////////////////

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// 1. Plantee just had her birthday; change Plantee's array to reflect her being a year older.
plantee[2]++
console.log(plantee)

// 2. Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
wolfy[3] = `Gotham City`
console.log(wolfy)

// 3. Give D'Art a second hometown by adding "Hawkins"
dart[3] += `, Hawkins`
console.log(dart)

// 4. Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
wolfy.shift()
console.log(wolfy)
wolfy.unshift(`Gameboy`)
console.log(wolfy)

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////

const turtles = [`Donatello`, `Leonardo`, `Raphael`, `Michaelangelo`]

for (const names of turtles) {
    console.log(names.toUpperCase())
}

////////////////////////////////
// Methods, Revisited
////////////////////////////////

// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

// // 1. use the .sort method Thought question: what did this do to the array? Did it permanently alter it?
// favMovies.sort() // This method has sorted the movies into alphabetical order.
// console.log(favMovies)

// // 2. Use the method pop
// favMovies.pop()
// console.log(favMovies)

// // 3. push "Guardians of the Galaxy"
// favMovies.push(`Guardians of the Galaxy`) // Although sort() alphabetized the array, pop and push still only effect the last entry of the array, regarless of alphabetical order (Guardians of the galaxy is not pushed into where it should be alphabeticaly but instead pushed to the very end.)
// console.log(favMovies)

// // 4. Reverse the array
// favMovies.reverse()
// console.log(favMovies)

// // 5. Use the shift method
// favMovies.shift() // Shift shows the same behavior as push, only effecting the first entry.
// console.log(favMovies)

// // 6. unshift - what does it return?
// favMovies.unshift(`King Kong`) // Nothing without a given entry, in this example I used King Kong
// console.log(favMovies)

// // 7. splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?

////////////////////////////////
// Where is Waldo
////////////////////////////////


////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////