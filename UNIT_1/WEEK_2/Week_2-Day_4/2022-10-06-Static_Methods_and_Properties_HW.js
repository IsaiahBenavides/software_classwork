// There is only one Governor in the state, add static methods and properties you'd expect a Governor to have.

class Governor {
    constructor(name, age, suit, watch) {
        this.name = name;
        this.age = age;
        this.suit = suit;
        this.watch = watch;
    };
    static keyToCity() {
        console.log(`I, your Governor, herby present the key to our city to this local hero!`)
        return this.keyToCity
    };
    static callMayor() {
        console.log(`Mayor, where are the reports on the county fairs?`)
        return this.callMayor
    };
};

// log the properties and test the methods (don't instantiate)
Governor.keyToCity()

Governor.callMayor()

// Think of three properties all people share, set them with the constructor
// Think of three methods all people share
class Person {
    constructor(hair, eyes, age, name) {
        this.hair = hair;
        this.eyes = eyes;
        this.age = age;
        this.name = name;
    };
    idea(){
        console.log(`I have an idea!`)
    };
    walk(){
        console.log(`What a nice day outside!`)
    };
    sleep(){
        console.log(`What a day, time for bed!`)
    };
};

// Create a PostalWorker class that inherits from person, add some methods
class PostalWorker extends Person {
    constructor(hair, eyes, age, name){
        super(hair,eyes,age,name);
        this.uniform = `UPS Brown`;
        this.truck = `UPS Truck`;
    };
    deliver(){
        console.log(`Here you go sir/miss!`);
    };
    sortMail(){
        console.log(`All organized!`);
    };
};

// Create a Chef class that inherits from person, add some methods
class Chef extends Person {
    constructor(hair, eyes, age, name){
        super(hair,eyes,age,name);
        this.uniform = `Chef's Apron`;
        this.utensils = `35 Piece Cooking Utensils set`;
    };
    deepFry(){
        console.log(`Fresh french fries, coming up!`);
    };
    sliceAndDice(){
        console.log(`How small do we need the pieces?`);
    };
}

// Create 2 PostalWorkers and 2 Chefs, log them and test all their methods

const chefJohn = new Chef(`Black`,`Black`,26,`John`);
console.log(chefJohn);
chefJohn.deepFry();
chefJohn.sliceAndDice();
chefJohn.idea();
chefJohn.walk();
chefJohn.sleep();

const chefPaul = new Chef(`Red`, `Amber`, 30, `Paul`);
console.log(chefPaul);
chefPaul.deepFry();
chefPaul.sliceAndDice();
chefPaul.idea();
chefPaul.walk();
chefPaul.sleep();

const mailManLuke = new PostalWorker(`Blond`, `Blue`, 22, `Luke`);
console.log(mailManLuke);
mailManLuke.deliver();
mailManLuke.sortMail();
mailManLuke.idea();
mailManLuke.walk();
mailManLuke.sleep();

const mailManMarcus = new PostalWorker(`Bald`, `Green`, 27, `Marcus`);
console.log(mailManMarcus);
mailManMarcus.deliver();
mailManMarcus.sortMail();
mailManMarcus.idea();
mailManMarcus.walk();
mailManMarcus.sleep();

// Bank Accounts
class BankAccount {
    constructor(ownerName,balance,acctNum) {
        this.ownerName = ownerName;
        this.balance = balance;
        this.acctNum = acctNum;
    };
    deposit(){
        console.log(`Hello, ${this.ownerName}, would you like to make a deposit?`);
    };
    withdraw(){
        console.log(`Hello, ${this.ownerName}, would you like to make a withdraw?`);
    };
}

class CheckingAccount extends BankAccount {
    constructor(ownerName,balance,acctNum,overdraftEnabled){
        super(ownerName,balance,acctNum);
        this.overdraftEnabled = overdraftEnabled;
    };
    withdraw(){
        console.log(`This is an overdraft warning!`);
    };
}

class SavingAccount extends BankAccount {
    constructor(ownerName,balance,acctNum){
        super(ownerName,balance,acctNum);
    };
    withdraw(){
        console.log(`Withdraw is not alloud on account ${this.acctNum}`);
    };
}