//================================================================================================
//                                          OBJECTS & ARRAYS
//================================================================================================
// Why should we write our objects with const?
// So we don't change the data type of the variable
// const arr = []
// const obj = {}


const adventurer = {
    name: "Timothy",
    hitpoints: 10,
    belongings: ["Sword", "Potion", "Tums"]
};

// Access Timothy
console.log(adventurer.name);

// Access HP
console.log(adventurer.hitpoints);

// Print out "My name is Timothy. I have 99 Tums in my adventurer's bag."
console.log("My name is " + adventurer.name + ". I have 99 " + adventurer.belongings[2] + " in my adventurer's bad.");

// Iterate over an array
for (let i = 0; i < adventurer.belongings.length; i++) {
    console.log(adventurer.belongings[i]);
};

// ==== US AN OBJECT WITHIN ANOTHER OBJECT WITHIN ANOTHER OBJECT ====

const newAdventurer = {
    name: "Timothy",
    hitpoints: 10,
    belongings: ["sword", "potion", "Tums"],
    companion: {
        name: "Velma",
        type: "Bat",
        companion: {
            name: "Tim",
            type: "Parasite",
            belongings: ["SCUBA tank", "Rogan josh", "health insurance"],
        },
    },
};

// Access companion obj
console.log(newAdventurer.companion);

// Access name and type
console.log(newAdventurer.companion.name + " is a " + newAdventurer.companion.type.toLocaleLowerCase());

// Access Tim's type
console.log(newAdventurer.companion.companion.type);

// Access health insurance
console.log(newAdventurer.companion.companion.belongings[2]);

// ==== ARRAY OF OBJECTS ====   

const movies = [
    { title: "Tokyo Story" },
    { title: "Paul Blart: Mall Cop" },
    { title: "L'Avventura" },
];

// Access the title L'Avventura
console.log(movies[2].title);

// Itterate over the movies array printing all of the titles
for (let i = 0; i < movies.length; i++) {
    console.log(movies[i].title);
};

//
const foo = {
    someArray: [1, 2, 3]
};
console.log(foo.someArray[0]);

//
const foo2 = {
    someObject: {
        someProperty: 'oh hai!'
    }
};
console.log(foo2.someObject.someProperty)

// Writing a method inside an object
// We call functions inside objects methods
// If we write a method using an arrow function, we lose access to 'this' keyword
const foo3 = {
    someMethod: () => {
        console.log('buh bye');
    },
};

foo3.someMethod();

// Example of accessing the properties of an object within an object using 'this'
const foo4 = {
    name: "Luke",
    someMethod: function() {
        console.log('buh bye ' + this.name);
    },
};

foo4.someMethod();



