
//       SPACE BATTLE MINI LAB

// Querey selectors
let startBtn = document.querySelector('#start-button')
let battleBtn = document.querySelector("#battle-button")
let retreatBtn = document.querySelector("#retreat-button")
let introText = document.querySelector("#intro-text")
let combatLog = document.querySelector("#combat-log")




// Building ships
class USS_Earth {
    static hull = 20;
    static firepower = 5;
    static accuracy = 0.7;
    static attack(ship) {
        let randomNum = Math.random();
        let newLog = document.createElement('p')
        if (randomNum.toFixed(2) < USS_Earth.accuracy) {
            console.log(`${ship.shipName} HP was: ${ship.hull}`);
            console.log(`Your hit chance: ${randomNum.toFixed(2)} is under your accuracy!`);
            console.log(`It's a hit!`);
            ship.hull -= USS_Earth.firepower;
            newLog.innerText = "It's a hit! \n" + ship.shipName + " HP: " + ship.hull.toFixed(2)
            combatLog.append(newLog)
            console.log(`${ship.shipName} HP is now: ${ship.hull.toFixed(2)}`);
            return ship.hull;
        } else {
            newLog.innerText = `You missed ${ship.shipName}! Prepare for impact!!`
            combatLog.append(newLog)
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
        let newAlienLog = document.createElement('p')
        let randomNum = Math.random();
        if (randomNum < this.accuracy) {
            console.log(`The alien hit chance: ${randomNum.toFixed(2)} is under it's accuracy!`);
            console.log(`It's a hit!`);
            console.log(`Your HP was: ${USS_Earth.hull}`);
            USS_Earth.hull -= this.firepower;
            console.log(`Your HP is now: ${USS_Earth.hull}`);
            newAlienLog.innerText = "The alien ship " + this.shipName + " gets a hit! \n" + "Your HP: " + USS_Earth.hull
            combatLog.append(newAlienLog)
            return USS_Earth.hull;
        } else {
            newAlienLog.innerText = "The alien ship " + this.shipName + " missed! \n" + "Prepare your attack!" 
            combatLog.append(newAlienLog)
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

// In order to make sure the player prompt is taken into consideration I made a retreat boolean and reference it inside the war and decide functions
let retreat = false

const battle = function(hero, enemy) {
    let newBattleLog = document.createElement('p')

    // the for loop is deprecated by the war function
    // for (let i = 0; i < alienFleet.length; i++) { 

        do {
                hero.attack(enemy);
                if (enemy.hull >= 0) {
                    enemy.attack();
                    if (hero.hull >= 0) {
                        hero.attack(enemy)
                    } else{
                        newBattleLog.innerText = "You are defeated... Retry?"
                        combatLog.append(newBattleLog)
                    }
                } else {
                    newBattleLog.innerText = "You win! The " + enemy.shipName + "is defeated!"
                    combatLog.append(newBattleLog)
                    console.log(`You win! The ${enemy.shipName} is defeated.`);
                };
        } while (enemy.hull > 0 && hero.hull > 0)

        // the if prompt === null is depricated by the decide function, spliting the functionality like this makes it much more flexable
            // if(prompt(`You have defeated the alien ship! Continue?`) === null){
            //     console.log("You didn't want to continue, now Earth will be overtaken by aliens!")
            //     return
            // };
        // };

};

// The decide function is for choosing to fight the next ship or not
const decide = function(){
    let newBattleLog = document.createElement('p')
    if(prompt(`You have defeated the alien ship! Continue?`) === null /*retreat === false*/){
        retreat = true
        newBattleLog.innerText = "You didn't want to continue, now Earth will be overtaken by aliens! Retry?"
        combatLog.append(newBattleLog)
    }else{
        retreat = false
        // newBattleLog.innerText = "You didn't want to continue, now Earth will be overtaken by aliens! Retry?"
        // combatLog.append(newBattleLog)
    }
}
// War function is for itterating through the alien fleet
const war = function(hero, enemy){
    for (let i = 0; i < alienFleet.length; i++){
        battle(USS_Earth, alienFleet[i]);
        decide();
        retreatBtn.classList.add("retreatDecal")
        retreatBtn.classList.remove("hide")
        if (retreat === true){
            return
        };
    };
};

// BUTTONS
    
startBtn.addEventListener('click', ()=>{
    startBtn.classList.add("hide");
    startBtn.classList.remove("startDecal");

    battleBtn.classList.add("battleDecal");
    battleBtn.classList.remove("hide");

    introText.classList.add("hide");
    combatLog.classList.remove("hide");
    
});

battleBtn.addEventListener('click', ()=>{
    war(USS_Earth, alienFleet);
});

// The problem is that the prompt is too fast in speed. It outspeeds the combat log so that the log will never be updated with information until the war function is finished. A possible solution is to do away with the prompt all together and instead use another event listener effecting the retreat boolean

retreatBtn.addEventListener('click', ()=>{
    retreat = true
})

// ====== REFERNCE=====
// const button = document.querySelector('input');
// const paragraph = document.querySelector('p');

// button.addEventListener('click', updateButton);

// function updateButton() {
//   if (button.value === 'Start machine') {
//     button.value = 'Stop machine';
//     paragraph.textContent = 'The machine has started!';
//   } else {
//     button.value = 'Start machine';
//     paragraph.textContent = 'The machine is stopped.';
//   }
// }







