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
}3

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
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

// 1. use the .sort method Thought question: what did this do to the array? Did it permanently alter it?
favMovies.sort() // This method has sorted the movies into alphabetical order.
console.log(favMovies)

// 2. Use the method pop
favMovies.pop()
console.log(favMovies)

// 3. push "Guardians of the Galaxy"
favMovies.push(`Guardians of the Galaxy`) // Although sort() alphabetized the array, pop and push still only effect the last entry of the array, regarless of alphabetical order (Guardians of the galaxy is not pushed into where it should be alphabeticaly but instead pushed to the very end.)
console.log(favMovies)

// 4. Reverse the array
favMovies.reverse()
console.log(favMovies)

// 5. Use the shift method
favMovies.shift() // Shift shows the same behavior as push, only effecting the first entry.
console.log(favMovies)

// 6. unshift - what does it return?
favMovies.unshift(`King Kong`) // Nothing without a given entry, in this example I used King Kong
console.log(favMovies)

// 7. splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?
console.log(favMovies.indexOf("Django Unchained"))
favMovies.splice(15,1,`Avatar`) 
console.log(favMovies)
// Yes, entry 15 which used to be Django is now Avatar, outside of entry 15 no other entry was effected in the array

// 8. slice the last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?
console.log(favMovies.indexOf("Black Panther"))
favMovies.slice(9,19)
console.log(favMovies)
// No, slice is simply refering to the portion of the array that it is given

// 9. store the value of your slice in a variable, console.log it - Thought question: what is going on here?
let lastHalf = favMovies.slice(9,19)
console.log(lastHalf)
// Slice is refering to the portion of the array that it is given

// 10. console.log your final results
console.log(favMovies)

// 11 After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, what value do we get when we look for the index of something that is not in the array?
console.log(favMovies.indexOf(`Fast and Furious`))

// 12. Thought question: that we declared the variable favMovies with const, and yet, we were allowed to change the array. Weird? Should we have used let?
//While the variable favMovies never changes, it's content does, if we used let we could be faced with an issue of losing the array because we reassigned faveMovies to another value.

////////////////////////////////
// Where is Waldo
////////////////////////////////
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

// 1. Remove Eggbert (hint look at the slice/splice method(s))
whereIsWaldo.splice(1,1)
console.log(whereIsWaldo)

// 2. Change "Neff" to "No One"
whereIsWaldo[1][2] = `No One`
console.log(whereIsWaldo)

// 3. Access and console.log "Waldo"
whereIsWaldo[2][1][1]
console.log(whereIsWaldo[2][1][1])

////////////////////////////////
//  Excited Kitten
////////////////////////////////
const kittenTalk = ["...human...why you taking pictures of me?...", "...the catnip made me do it...","...why does the red dot always get away..."]

for(let i = 0;i <= 20; i++){
    console.log(i, "Love me, pet me! HSSSSSS!")
    if(i%2===0){
        let rndNum = Math.floor(Math.random()*10)
        if(rndNum <= 3){
            console.log(rndNum, kittenTalk[0])
        } else if(rndNum <= 6){
            console.log(rndNum, kittenTalk[1])
        } else {
            console.log(rndNum, kittenTalk[2])
        }
    }
}

////////////////////////////////
//  Find the Median
////////////////////////////////