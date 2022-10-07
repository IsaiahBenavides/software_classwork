//================================================================================================
//                                          OOP CLASSES
//================================================================================================
//Remember DRY: Don't Repeat Yourself
//Using classes we can automate making new objects!
// What are the four pillars of OOP? 
// 1. Encapsulation 2. Inherotamce 3. Abstraction 4. Polymorphis

const createEnemy = (nameIs, healthIs, powerIs, staminaIs) => {
    const newEnemy = {
        name: nameIs,
        health: healthIs,
        power: powerIs,
        stamina: staminaIs,
    };
    return newEnemy
};

const createPlayer = (nameIs, healthIs, powerIs, staminaIs) => {
    const newPlayer = {
        name: nameIs,
        health: healthIs,
        power: powerIs,
        stamina: staminaIs,
    };
    return newPlayer
};

// Create an enemy
const ivana = createEnemy("Ivana", 100, "Freeze Smile", 100);
const anguel = createPlayer("Anguel", 200, "Super Punch", 200);

console.log(ivana);
console.log(anguel);

// Creating a class
// When creating names for our classes we use PascalCasing (all the first letters are capitalized)
// Everything else in JS is camelCase
class Character {
    constructor(name, age, eyes, hair, lovesCats = false, lovesDogs) {
        this.legs = 2;
        this.arms = 2;
        this.name = name;
        this.age = age;
        this.eyes = eyes;
        this.hair = hair;
        this.lovesCats = lovesCats;
        this.lovesDogs = lovesDogs || false;
    };
    greet(otherCharacter) {
        console.log('hi ' + otherCharacter + '!');
    };
    classyGreeting(otherClassyCharacter) {
        console.log(`Greetings ${otherClassyCharacter.name}!`);
    };
    sethair(hairColor) {
        this.hair = hairColor
    };
    smite() {
        console.log('I smite thee you vile person');
    };
}

const mina = new Character();
const priyanka = new Character();
const stanley = new Character('Stanley the GOAT', 25, 'Brown', 'Green', true, false);

// console.log(mina);
// console.log(priyanka);

const cathy = new Character('Cathy the Miraculous', 29, 'brown', 'locs of dark brown', true, true,);
console.log(cathy);

const arthur = new Character('Arthur the Wavy', 32, 'brown', 'his waves be spinnin keep of the g for greatness');
console.log(arthur);

// ==== ALTERING PROPERTIES OF ANINSTANCE ====
cathy.hair = 'supernova red'

console.log('new cathy');
console.log(cathy);

// console.log('new priyanka below');
// priyanka.sethair('black');
// console.log(priyanka);

// ==== USING AN OBJECT TO INTERACT WITH OTHER OBJECTS ====

// Make Cathy say hi to Stanley

cathy.classyGreeting(stanley);

// Make Stanley say hi to Cathy

stanley.classyGreeting(cathy);

// ==== IF WE WERE TO MAKE A SUPER HERO CLASS WITHOUT BEING DRY ====
// !!!! DON'T DO THIS! !!!!
/*
class Character {
    constructor(name, age, eyes, hair, lovesCats = false, lovesDogs) {
        ADD
        ADD
        ADD
        this.legs = 2;
        this.arms = 2;
        this.name = name;
        this.age = age;
        this.eyes = eyes;
        this.hair = hair;
        this.lovesCats = lovesCats;
        this.lovesDogs = lovesDogs || false;
    };
    greet(otherCharacter) {
        console.log('hi ' + otherCharacter + '!');
    };
    ADD
    ADD
    ADD
    classyGreeting(otherClassyCharacter) {
        console.log(`Greetings ${otherClassyCharacter.name}!`);
    };
    sethair(hairColor) {
        this.hair = hairColor
    };
    smite() {
        console.log('I smite thee you vile person');
    };
}
*/

// ==== INHERITANCE ====
// What we actually want to do to get the same functionality and use DRY principle

// Subclass or child class
class SuperHero extends Character {
    //ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    // You will get this error above if you include a constructor method without including the super() that references back to the parent class
    constructor(name, age, eyes, hair, powers){
        super(name, age, eyes, hair);
        this.skills = [["thievery", "speed", "willpower"]];
        this.powers = powers;
    };
    fly(){
        console.log(`I fly now!`);
    };
    // Method overriding needs to be the exact same name of the method from the parent class
    greet(otherCharacter){
        console.log(`Yo, ${otherCharacter}!`);
    };
    smite() {
        // super is going to refer to the parent class, which is Character in this case
        super.smite();
        this.fly();
    };
};

const julia = new SuperHero(`Julia`, 25, `Brown`, `Blonde`, [`invisibility`, `strength`]);
console.log(julia);

julia.fly();

// Can we access fly() using an instance of the parent class?
//stanley.fly() will return an error because fly() only exists within SuperHero.

// ==== POLYMORPHISM ====
// Polymorphism is something that occurs ins everal different forms
// Method overriding is a run-time polymorphism. It helps to increase the readability of the program. it is used to grant the specific implementation of the method whichis already provided by its parent class or subclass

// Method overriding
julia.greet('Marcus');

// EX. of polymorphism
/*
class Animal(){
    makeNoise(){
        console.log("RAWR")
    };
}
class Dog extends Animal(){
        makeNoise(){
        console.log("BARK")
    };
}
class Cat extends Animal(){
        makeNoise(){
        console.log("MEOW")
    };
}
And so on...
*/

// ==== CALLING THE PARENT CLASS FROM THE CHILD CLASS ====
julia.smite();
console.log(julia);


// ==== CREATING SUBCLASSES EXCERSISE ====6
class SuperVillain extends Character {
    constructor(name, age, eyes, hair, powers){
        super(name, age, eyes, hair);
        this.skills = [`Evil stare`, `Super strength`];
        this .powers = powers
    };
    laserBeam(){
        console.log(`${this.name} fires a laser beam!`)
    };
    callMinion(minion){
        console.log(`${this.name} calls for the evil minion ${minion.name}!`)
    };
};

const bandanaTroop = new SuperVillain(`BandanaTooper`, `Unkown`, `Black`, `Bald`, `Bandana Bind`);
const bandanaMan = new SuperVillain(`BandanaMan`, `Unkown`, `Red`, `Bald`, `Bandana Blast`);
bandanaMan.laserBeam();
bandanaMan.callMinion(bandanaTroop);
console.log(bandanaMan);

class Skater extends Character {
    constructor(name, age, eyes, hair, lovesCats, lovesDogs, tricks){
        super(name, age, eyes, hair, lovesCats, lovesDogs);
        this.skills = [`Ride skateboard`, `Graffiti`];
        this.tricks = tricks
    };
    kickFlip(){
        console.log(`${this.name} does a sick kickflip!`)
    };
    grind(){
        console.log(`${this.name} shreds an awesome grind!`)
    };
}

const middleSchooler = new Skater (`Able`, 14, `Blue`, `Brown`, true, true, [`Pop shove-it`, `Ollie`]);
middleSchooler.kickFlip();
middleSchooler.grind();
console.log(middleSchooler);

class StreetFighter extends Character {
    constructor(name, age, eyes, hair, lovesCats, lovesDogs, powers){
        super(name, age, eyes, hair, lovesCats, lovesDogs);
        this.skills = [`Heavy Punch`, `Light Kick`];
        this.powers = powers
    };
    shoulderThrow(otherFighter){
        console.log(`${this.name} throws ${otherFighter.name} over his shoulder!`)
    };
    hadoken(otherFighter){
        console.log(`${this.name} throws a fire ball at ${otherFighter.name}!`)
    };
}

const ryu = new StreetFighter (`Ryu`, 28, `Black`, `Black`, false, true, [`Axe Kick`, `Thust Strike`, `Mind's Eye`]);
const ken = new StreetFighter (`Ken`, 28, `Blonde`, `Gold`, true, false, [`Knee Bash`, `Quick Step`, `Thunder Kick`]);
console.log(ryu, ken);

ken.shoulderThrow(ryu);
ryu.hadoken(ken);
