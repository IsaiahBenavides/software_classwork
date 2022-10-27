
//       SPACE BATTLE MINI LAB

// Building ships
class USS_Earth {
    static hull = 20;
    static firepower = 5;
    static accuracy = 0.7;
    static attack(ship) {
        let randomNum = Math.random();
        if (randomNum.toFixed(2) < USS_Earth.accuracy) {
            console.log(`Your hit chance: ${randomNum.toFixed(2)} is under your accuracy!`);
            console.log(`It's a hit!`);
            console.log(`${ship.shipName} HP: ${ship.hull}`);
            ship.hull -= USS_Earth.firepower;
            console.log(`${ship.shipName} HP: ${ship.hull.toFixed(2)}`);
            return ship.hull;
        } else {
            console.log(`You missed the alien ship ${ship.shipName}...`);
            console.log(`Your hit chance: ${randomNum.toFixed(2)} did not fall under your accuracy of 0.7...`);
        };
    };
};

// Alienship Class

class AlienShip {
    randomHull = Math.random() * (6 - 3) + 3;
    randomFirepower = Math.random() * (4 - 2) + 2;
    randomAccuracy = Math.random() * (.8 - .6) + .6;
    constructor(name) {
        this.shipName = name;
        this.hull = this.randomHull.toFixed(2);
        this.firepower = this.randomFirepower.toFixed(2);
        this.accuracy = this.randomAccuracy.toFixed(2);
    };
    attack() {
        let randomNum = Math.random();
        if (randomNum < this.accuracy) {
            console.log(`The hit chance ${randomNum.toFixed(2)} is under its accuracy of ${this.accuracy}!`);
            console.log(`The alien ship ${this.shipName} gets a hit!`);
            console.log(`Your HP: ${USS_Earth.hull}`);
            USS_Earth.hull -= this.firepower;
            console.log(`Your HP after attack: ${USS_Earth.hull}`);
            return USS_Earth.hull;
        } else {
            console.log(`The alien ship ${this.shipName} missed!`);
            console.log(`Hit chance: ${randomNum.toFixed(2)}`);
            console.log(`Accuracy: ${this.accuracy}`);
        };
    };
};

/*
Abbrevation:
LWSS - Light Weight Spaceship
SS - Spaceship
SC - Spacecruiser
HMS - Her Majesty's (Space)Ship
STS - Space Transportation System
BC - Battlecruiser
*/

const alienFleet = [
    new AlienShip("LWSS_Inquisitor"),
    new AlienShip("SS_Infinitum"),
    new AlienShip("SC_Rampart"),
    new AlienShip("HMS_Anastasia"),
    new AlienShip("STS_Terigon"),
    new AlienShip("BC_Neutron")];


//battle function
const battle = function () {
    for (let i = 0; i < alienFleet.length; i++) {
        do{
            if(alienFleet[i].hull > 0){
                USS_Earth.attack(alienFleet[i]);
                if (alienFleet[i].hull > 1) {
                    alienFleet[i].attack();
                } else if (USS_Earth.hull > 0) {
                    console.log(`You have defeated the alien ship! Continue?`);
                    return;
                } else {
                    console.log(`You are defeted... Retry?`);
                };
            }
        }while (alienFleet[i].hull > 1)
    };
};

battle()