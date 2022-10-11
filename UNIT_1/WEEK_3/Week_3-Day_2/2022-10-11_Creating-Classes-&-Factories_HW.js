//================================================================================================
//                               CREATING CLASSES & FACTORIES
//================================================================================================

/*
Hamster
    attributes:
        owner - string, initially set as an empty string
        name - string, set the name from parameter in constructor method
        price - integer, set as 15
    methods:
        wheelRun() - log "squeak squeak"
        eatFood() - log "nibble nibble"
        getPrice() - return the price
*/

class Hamster {
    constructor(owner, name, price) {
        this.name = name;
        this.owner = owner;
        this.price = price;
    };
    wheelRun(){
        console.log(`Squeak squeak`);
    };
    eatFood(){
        console.log(`Nibble nibble`);
    };
    getPrice(){
        console.log(this.price);
    }
};

const squeaks = new Hamster(`Pet Store`, `Squeaks`, 15);
squeaks.wheelRun()
squeaks.eatFood()
squeaks.getPrice()

/*
Person
    attributes:
        name - set name from parameter in constructor method
        age - initially 0
        height - initially 0
        weight - initially 0
        mood - integer starting at 0 initially
        hamsters - empty array initially
        bankAccount - initially set to 0
    methods:
        getName() - returns name
        getAge() - returns age
        getWeight() - returns weight
        greet() - logs a message with person's name
        eat() - increment weight, increment mood
        exercise() - decrement weight
        ageUp() - increment age, increment height, increment weight, decrement mood, increment bank account by 10 (birthday money)
        buyHamster(hamster) - push the hamster object onto the hamster array, increment mood by 10, decrement bankAccount by the value of the hamster (hint: use getPrice())
*/

class Person {
    constructor(name){
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount = 0;
    };
    getName(){
        console.log(this.name);
    };
    getAge(){
        console.log(this.age);
    };
    getWeight(){
        console.log(this.weight);
    };
    greet(){
        console.log(`Hello ${this.name}!`);
    };
    eat(){
        this.weight++;
        this.mood++;
    };
    exercise(){
        this.weight--;
    };
    ageUp(){
        this.age++;
        this.height++;
        this.weight++;
        this.mood--;
        this.bankAccount+=10;
    };
    buyHamster(hamster){
        this.hamsters.push(hamster);
        this.mood+=10;
        let newBalance = this.bankAccount - hamster.price;
        this.bankAccount = newBalance
        return newBalance
    }
};

const larry = new Person (`Larry`);
larry.getName();
larry.getAge();
larry.getWeight();
larry.greet();
larry.eat;
larry.exercise();
larry.ageUp();
larry.ageUp();
larry.buyHamster(squeaks);
console.log(larry);

const timmy = new Person(`Timmy`)

timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();

timmy.eat();
timmy.eat();
timmy.eat();
timmy.eat();
timmy.eat();

timmy.exercise();
timmy.exercise();
timmy.exercise();
timmy.exercise();
timmy.exercise();

timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();

const gus = new Hamster(`Timmy`, `Gus`, 200);

timmy.buyHamster(gus);

timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();

timmy.eat();
timmy.eat();

timmy.exercise();
timmy.exercise();

console.log(timmy)