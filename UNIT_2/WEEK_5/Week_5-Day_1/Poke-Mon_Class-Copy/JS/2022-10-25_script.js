// DOM Queries
// const startButton = document.querySelector("#start-button")
const startContainer = document.querySelector("#start-container")
const gameContainer = document.querySelector("#game-container")
const createContainer = document.querySelector(`#create-container`)

// Input Queries
const fName = document.querySelector('#fname')
const chosenEle = document.querySelector('#chosen-element')

// Player 1
const p1Name = document.querySelector('#p1-name')
const p1Ele = document.querySelector(`#p1-element`)

// Player 2
const p2Name = document.querySelector('#p2-name')
const p2Ele = document.querySelector(`#p2-element`)

// Battle
const prompt = document.querySelector(`#battle-prompt`)
const battleBtn = document.querySelector(`#battle-button`)
const restartBtn = document.querySelector(`#restart-button`)

class Player {
    constructor(name, element) {
        this.name = name;
        this.element = element;
    }
}

const game = {
    players: [],
    playerOneReady: false,
    start: function() {
        // startButton.classList.toggle("hide")
        startContainer.classList.toggle("hide")
        gameContainer.classList.toggle("hide")
    },
    createPlayer: function(currEle) {
        // Need name and element
        console.log("Creating player")
        // console.log(chosenEle.value)
        // console.log(fName.value)
        // console.log("actual element", currEle)
        if(!this.playerOneReady){
            this.players.push(new Player(fName.value, currEle))
            p1Name.textContent = fName.value
            p1Ele.classList.toggle("hide")
            prompt.innerText = "Player 2: Enter name and element"
            this.clearForm()
            this.playerOneReady = true
        } else {
            this.players.push(new Player(fName.value, currEle))
            p2Name.textContent = fName.value
            p2Ele.classList.toggle("hide")
            prompt.innerText = "Let's Battle!!!!"
            this.clearForm()
            createContainer.classList.toggle("hide")
            battleBtn.classList.toggle(`hide`)
        }
    },
    checkElement: function(eventParam) {
        eventParam.preventDefault()
        // console.log('We clicked submit', event, "!!!!!!!")

        // Check input values
        // console.log(fName.value)
        // console.log(chosenEle.value)

        // Edge case
        const currEle = chosenEle.value.toLowerCase()
        // console.log(currEle)

        if(currEle === "water" || currEle === "fire" || currEle === "grass") {
            chosenEle.style.backgroundColor = "white"
            this.createPlayer(currEle)
        } else {
            chosenEle.style.backgroundColor = "#fd5e53"
        }

        // Change player name
        // p1Name.textContent = fName.value
    },
    clearForm: function() {
        fName.value = ""
        chosenEle.value = ""
    },
    battle: function() {
        console.log("We are battling", this.players)
        console.log("Player One", this.players[0])
        console.log("Player Two", this.players[1])

        const p1= this.players[0].element
        const p2= this.players[1].element
        const pOneName= this.players[0].name
        const pTwoName= this.players[1].name
        
        // Update Element displays
        p1Ele.src = `Images/${p1}.png`
        p2Ele.src = `Images/${p2}.png`

        if(p1 === "fire" && p2 === "grass") {
            prompt.innerText = `${pOneName} wins! Restart?`
        } else if(p1 === "grass" && p2 === "water") {
            prompt.innerText = `${pOneName} wins! Restart?`
        } else if(p1 === "water" && p2 === "fire") {
            prompt.innerText = `${pOneName} wins! Restart?`
        } else if(p1 === p2) {
            prompt.innerText = `Tie game!! No one wins!`
        } else {
            prompt.innerText = `${pTwoName} wins! Restart?`
        };
        restartBtn.classList.toggle("hide")
        battleBtn.classList.toggle(`hide`)
    },
    restart: function() {
        location.reload()
    }
}

// Event Listeners
// startButton.addEventListener("click", () => {
//     console.log("we're starting the game")
//     startButton.classList.add("hide")
// })