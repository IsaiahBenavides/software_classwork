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

// ==== US AN OBJECT WITHIN ANOTHER OBJECT ====

const newAdventurer = {
    name: "Timothy",
    hitpoints: 10,
    belongings: ["sword", "potion", "Tums"],
    companion: {
        name: "Velma",
        type: "Bat"
    }
};

// Access companion obj
console.log(newAdventurer.companion);

// Access name and type
console.log(newAdventurer.companion.name + " is a " + newAdventurer.companion.type.toLocaleLowerCase());