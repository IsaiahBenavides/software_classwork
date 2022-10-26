// DOM Queries
const gameContainer = document.querySelector(`#game-container`);
const startContainer = document.querySelector(`#start-container`);
const submitBtn = document.querySelector(`#submit-button`)
const prompt = document.querySelector(`#prompt`)

// Input Queries
const fName = document.querySelector(`#fname`);
const chosenElement = document.querySelector(`#choose-element`)

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
    players: [],
    start: function(){
        startContainer.classList.toggle(`hide`);
        gameContainer.classList.toggle(`hide`);
    },
    createPlayer: function(currEle){
        // Need name and element
        console.log(`Creating Player`);
        console.log(`actual element ${currEle}`);
        this.players.push(new Player(fname.value, currEle.value));
        console.log(this.players)
    },
    checkElement: function(submitClicked){
        submitClicked.preventDefault();
        // console.log(`We clicked submit`, submitClicked, `!!!`)

        // Check input values
        console.log(fName.value);
        console.log(chosenElement.value);

        // Edge Case
        const currEle = chosenElement.value
        if (currEle === `choose-one`){
            chosenElement.style.backgroundColor = `red`
            prompt.textContent = `Please choose an element!`
        }else{
            chosenElement.style.backgroundColor = `green`
            this.createPlayer(currEle);
            prompt.textContent = `Player 2: Enter your name and element.`
        };

        // Change player name
        p1Name.textContent = fname.value;

        
    },

};

// Event Listeners
// startButton.addEventListener(`click`, ()=>{
//     console.log(`We are starting the game.`);
//     startButton.classList.add(`hide`);
// });

