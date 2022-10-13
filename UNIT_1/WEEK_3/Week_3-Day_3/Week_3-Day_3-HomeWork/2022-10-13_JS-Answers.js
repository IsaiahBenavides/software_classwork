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


////////////////////////////////
// Where is Waldo
////////////////////////////////


////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////