// Classes are blueprints to create objects

// We have learned to create objects one at a time.
// const lion = {
//     legs: 4,
//     color: "golden",
//     diet: "carnivores",
// }
// const zebra = {
//     legs: 4,
//     color: "black & white",
//     diet: "herbivores",
// }

// And so on, this is clearly tedious!
// Here is a blueprint that we can use to create the objects, a class!
// Class is a reserved JS keyword
// Classes always start with a capital letter

class Animals {
    // use the constructor method, it is its own function
    constructor(nameParam, legsParam, colorParam, dietParam) {
        this.name = nameParam;
        this.legs = legsParam;
        this.color = colorParam;
        this.diet = dietParam;
    }
    // Methods in classes
    // Methods DO NOT GO INTO CONSTRUCTOR! They are just apart of the class itself.
    // You dont need to use function you can just name it!
    bathing() {
        this.isBathing = true
        console.log("Animal is bathing")
    }

}

// let lion = new Animals("Lion", "4", "Golden", "Carnivore")
// console.log(lion)

// let zebra = new Animals("Zebra", "4", "Black & White", "Herbivore")
// console.log(zebra)

let elephant = new Animals("Elephant", "4", "Gray", "Herbivore")
console.log(elephant)

class Car {
    constructor(
        makeParam,
        modelParam,
        yearParam,
        colorParam,
        doorsParam,
        locationParam,
        priceParam
    ) {
        this.make = makeParam
        this.model = modelParam
        this.year = yearParam
        this.color = colorParam
        this.doors = doorsParam
        this.location = locationParam
        this.price = priceParam
    }
    driving() {
        this.isDriving = true
        console.log(this.make + " is driving")
    }
}

let bmw = new Car("BMW", "M3", "2019", "Blue", "Four", "Dealership", "$10K")
console.log(bmw)

let volkswagen = new Car("VolksWagen", "Arteon", "2023", "Blue", "Two", "Dealership", "$40K")
console.log(volkswagen)

let hyundai = new Car("Hyundai", "Rustbucket", "10 AD", "Highlighter Pink", "Two and a half", "Your Driveway", "$FREE.99")
console.log(hyundai)

bmw.driving()
