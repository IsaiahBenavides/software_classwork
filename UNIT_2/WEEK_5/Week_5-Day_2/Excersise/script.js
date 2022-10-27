class Pokemon {
    constructor(hp, power) {
        this.hp = hp;
        this.power = power;
    };
};

const pikachu = new Pokemon(`pikachu`, 20, 5)
const charizard = new Pokemon(`charizard`, 35, 15)
const mewtwo = new Pokemon(`mewtwo`, 100, 30)

const pokeArray1 = [];
const pokeArray2 = [];

// for (i=0;i<pokeArray1.length;i++){
//     console.log(pokeArray1[i]);
// };
// pokeArray1.forEach(mon => {
//     console.log(mon);
// });

// for(i=0;i<1;i++){
//     pokeArray2.push(pikachu,charizard,mewtwo);
//     console.log(pokeArray2)
// }

for (let i = 0; i < 3; i++) {
    pokeArray1.push(new Pokemon(Math.ceil(Math.random() * 100), Math.floor(Math.random() * 100)));
    pokeArray2.push(new Pokemon(Math.ceil(Math.random() * 100), Math.floor(Math.random() * 100)));
};
console.log(pokeArray1);
console.log(pokeArray2);

const battle = function(team1, team2){
    team1= pokeArray1 
    team2= pokeArray2

    if(Math.random()<0.5){
        team1.forEach(mon => {
            console.log(mon.power)
            let firstFight = team2[0].hp =- team1[0].power
            console.log(firstFight)
        });
    }else{
        team2.forEach(mon => {
            console.log(mon.power)
            let firstFight = team1[0].hp =- team2[0].power
            console.log(firstFight)
        });
    }
};
battle()