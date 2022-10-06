class Cat {
    constructor(
        furParam,
        tailParam,
        nameParam,
    ) {
        this.fur    = furParam;
        this.tail   = tailParam;
        this.name   = nameParam;
    }
    pouncing(){
        console.log(this.name + " is pouncing!")
    }
    lounging(){
        console.log(this.name + " is lounging...")
    }
    eating(){
        console.log(this.name + " found a mouse!")
    }
}


const snickers = new Cat ("Orange", "Long tail", "Snickers")
const meowmix = new Cat ("No fur", "Short tail", "Meowmix")

console.log(snickers, meowmix)

snickers.lounging()
snickers.pouncing()
snickers.eating()

meowmix.lounging()
meowmix.pouncing()
meowmix.eating()

class Pirate {
    constructor(
        swashBucklen,
        yerName,
        grogDrinkin
    ){
        this.swashBucklen   = swashBucklen
        this.yerName        = yerName
        this.grogDrinkin    = grogDrinkin
    }
    scurvyDog(){
        console.log(this.name + " is a scurvyDog!")
    }
    walkThePlank(){
        console.log(this.name + " ought to walk the plank!")
    }
    landLubber(){
        console.log(this.name + " is a landlubber!")
    }
  }

const henryMorgan = new Pirate ("Yarrr", "Henry Morgan", "Tis' true!")
const captainKidd = new Pirate ("Yarrr", "William Kidd", "Tis' true!")
const seaDog = new Pirate ("Yarrr", "Francis Drake", "Tis' true!")
const blackBeard = new Pirate ("Yarrr", "Edward Teach", "Tis' true!")
const blueBeard = new Pirate ("Yarrr", "Charles Perrault", "Tis' true!")
const redBeard = new Pirate ("Yarrr", "Barbarossa", "Tis' true!")

const jollyRoger = [blackBeard, blueBeard, redBeard]

const queenAnnesRevenge = [henryMorgan, captainKidd, seaDog]

for (let i=0; i < 3; i++){
    console.log(jollyRoger[i]);
    console.log(queenAnnesRevenge[i]);
}

