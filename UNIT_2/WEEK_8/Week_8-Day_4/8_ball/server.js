const express = require(`express`);
const app = express();
const PORT = 3000
const ballAnswers = require(`./models/8ballResponse`)


app.get(`/magic`, (req,res)=>{
    res.send(`What is your question?`)
})

app.get(`/magic/:id`, (req,res)=>{
    const randNum = Math.floor(Math.random()*ballAnswers.length)
    res.send(`<h2>${req.params.id}</h2>
    <h1>${ballAnswers[randNum]}</h1>`)
})

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})