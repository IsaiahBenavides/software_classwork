const express = require(`express`);
const app = express();
const PORT = 3000;
const passItAround = require(`./models/takeItDown`)

app.get(`/`, (req,res)=>{
    res.send(`<h1>99 Bottles of beer on the wall</h1><a href="/98">Take one down, pass it around.</a>`)
})

app.get(`/:number_of_bottles`, (req,res)=>{
    if (req.params.number_of_bottles === `0`){
        res.send(`<h1>No more bottles of beer on the wall</h1><a href="/">No more bottles. Start over?</a>`)
    }else {
    res.send(`<h1>${req.params.number_of_bottles} Bottles of beer on the wall</h1><a href="/${req.params.number_of_bottles - 1}">Take one down, pass it around.</a>`)
    }
})


app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})