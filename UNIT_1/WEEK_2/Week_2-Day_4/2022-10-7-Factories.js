// start with creating an individual car

// remember that constructor is a method, so you need () and {}
// you need set the parameters to something inside the class in order for them to be used
// you can use default values, but if you miss you parameter, you change the order and thing get assigned weird
// you don't need to set everything in the constructor

// This is how Factory is using the constructor
//         const newCar = new Car(this.company, this.cars.length)
class Car {
    constructor (makerParam, serialNumberParam, yearParam) {
        this.maker = makerParam
        this.serialNumber = serialNumberParam 
        this.year = yearParam || 2000
    }

    // this defined the method, but doesn't make it run
    drive () {
        console.log('vroom vroom')
    }
}

// you can use a variable or not as input arguments, but watch the order 
// order matters and variable names don't to the constructor
let newMaker = 'Honda'
const testCar = new Car(newMaker, '234235', 2010)
// console.log(testCar)

// an example of adding properties outside of the constructor
testCar.color = 'blue'
// testCar.year = 2022
// console.log(testCar)

// this is invoking the method that was defined in the class
// testCar.drive()

// you can change this 
// but if you hard code a value, you need to have a manner of changing it
// if that is not always what you want it to be
testCar.color = 'green'

const car2 = new Car('Honda', '34534645', 2019)
// console.log("car 2")
// console.log(car2)

// console.log("test car")
// console.log(testCar)


// ========== FACTORIES ==========
// why a factory?
// this provides a means for creating multiple versions or instances of a class
// a more automated way

class Factory {
    // the only parameter passed in to the constructor is company
    // cars is an array, but will be created with an empty array 
    // this way I know that it exists and I can use later.
    constructor (companyParam) {
        this.company = companyParam
        this.cars = []
    }
    // this is how I make a new car
    // and then i add it to my cars array
    // note that I'm using the Car class from above and creating a new instance
    // the serial number is going to be the current length of cars
    generateCar () {
        // this is instantiating a new car
        const newCar = new Car(this.company, this.cars.length)
        this.cars.push(newCar)

        // You could make this way more complex
        // you could add the year, you could create colors, you could add doors or models
        // if you wanted to make this more comples, you probably want to update your Car Class to match

    }
    // this is another Factory method
    // it has an index parameter and we will use that to access the Factory's cars array
    findCar (index) {
        return this.cars[index]
    }
}

// the instance label (variable name) and company name don't have to match
// this is just more readable for people when we want to figure out which factory we are using
const tesla = new Factory('Tesla')
// the factory exists but there are no cars
// console.log(tesla)

tesla.generateCar()
// console.log(tesla)

tesla.generateCar()
// console.log(tesla)

tesla.generateCar()
// console.log(tesla)

// console.log(tesla.findCar(1))

const porche = new Factory('Porche');
porche.generateCar();
porche.generateCar();
porche.generateCar();
porche.generateCar();
console.log(porche);
console.log(tesla);

// ==== STATIC PROPERTIES ====
// These only work for the class as a whole
// These don't work on specific instances




