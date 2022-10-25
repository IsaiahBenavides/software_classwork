// DOM Queries
const gameContainer = document.querySelector(`#game-container`);
const startContainer = document.querySelector(`#start-container`);

// Input Queries
const fName = document.querySelector(`#fname`);
const chosenElement = document.querySelector(`#chosen-element`)

// Players
const p1Name = document.querySelector(`#p1-name`);

const p2Name = document.querySelector(`#p2-name`);

class Player {
    constructor(name, element){
        this.name = name;
        this.element = element;
    };
};

const game ={
    start: function(){
        startContainer.classList.toggle(`hide`);
        gameContainer.classList.toggle(`hide`);
        
    },
    checkElement: function(submitClicked){
        submitClicked.preventDefault();
        // console.log(`We clicked submit`, submitClicked, `!!!`)

        // Check input values
        console.log(fName.value);
        console.log(chosenElement.value)

        // Change player name
        p1Name.append(fName.value);
    },

};

// Event Listeners
// startButton.addEventListener(`click`, ()=>{
//     console.log(`We are starting the game.`);
//     startButton.classList.add(`hide`);
// });

