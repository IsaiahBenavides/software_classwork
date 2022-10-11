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
        this.price = price
    };
    wheelRun(){
        console.log(`Squeak squeak`)
    };
    eatFood(){
        console.log(`Nibble nibble`)
    };
    getPrice(){
        console.log(this.priceS)
    }
};


