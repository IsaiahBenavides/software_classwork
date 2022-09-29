//while loops!!!
//i can use while loops when i don't know how long i need to loop for!
//for loops are better suited to situations when I know how long i need the loop to go for!
// let age = 0

// while (age < 18) {
//     console.log("Imma kid")
//     console.log(`It's my birthday!! I'm ${age} years old.`) 
//     age ++
// }

// let a = 1

// while (a < 7) {
//     if (a % 2 === 0) {
//         console.log(`${a} is odd`)
//     } else {
//         console.log(`${a} is even`)
//     }
//     a++
// }

// let arr = [0, 1, 2]

// while (arr.length > 1) {
//     console.log(arr)
//     arr.pop()
// }


// //excersise

// //1
// let b = 10

// while (b >= 0) {
//     console.log(b)
//     b--;
// }

// //2

// let c = 3

// while (c < 35) {
//     if (c % 3 === 0) {
//         console.log(c + ' is a multiple of 3')
//     } c++
// }

// //3

// let d = 1

// while (d < 100) {
//     if (d % 5 === 0) {
//         console.log(d + " is a multiple of 5")
//     } d++
// }

// //4

// let e = 1

// while (e < 20) {
//     if (e % 2 === 0) {
//         console.log(e * 3)
//     } e++
// }

//While loop labs

//1
// let studentGrade = 80

// if (studentGrade < 55) {
//     console.log("Bad Grade But You'll Get Em Next Time")
// }
// else if (studentGrade <= 55) {
//     console.log("Not to good")
// } else if (studentGrade <= 60) {
//     console.log("ehhhh")
// } else if (studentGrade <= 70) {
//     console.log("Keep trying")
// } else {
//     console.log("You did a good job")
// }


// let grade = Math.floor(Math.random() * 100)

// if (grade >= 80) {
//     console.log("You did a good job")
// } else if(grade >= 70){
//     console.log("Keep trying")
// } else if(grade >= 60){
//     console.log("ehhhh")
// } else (grade >= 55)
//     console.log("Not to good")

//2

for (let i = 10; i <= 100; i++) {
    if (i % 10 === 0 && i % 20 != 0) {
        console.log(i)
    }
}
for (let i = 10; i <=100; i++) {
    if(i % 20 === 0){
        console.log(i)
    }
}

//3

let i = 10
while (i <= 100 ) {
    if (i % 10 === 0 && i % 20 != 0) {
        console.log(i)
    }
    i++
}
i = 10
while (i <= 100 ) {
    if (i % 20 === 0) {
        console.log(i)
    }
    i++
}

// with array
let arrX = [10, 30, 50, 70, 90, 20, 40, 60, 80, 100]
let g = 0
while (g < arrX.length) {
    if (g < 5) {
        console.log(arrX[g])
    } else {
        console.log(arrX[g])
    }  
    g++
}

//4

let k = 500

while (k <= 800 && k >= 500) {
    if (k % 4 === 0) {
        console.log(k)
    }k++
}




