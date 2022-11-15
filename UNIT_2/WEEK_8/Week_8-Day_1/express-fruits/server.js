const express = require("express")
const app = express()
const PORT = 3000

const fruits = [
    {
        name:'apple',
        color: 'red',
        readyToEat: true
    },
    {
        name:'pear',
        color: 'green',
        readyToEat: false
    },
    {
        name:'banana',
        color: 'yellow',
        readyToEat: true
    }
  ];

app.get("/", (req, res) => {
  res.send(fruits)
})

app.get("/:indexOfFruit", (req, res) => {
  res.send(fruits[req.params.indexOfFruit])
})


app.listen(PORT, () => { 
  console.log(`Listening on port: ${PORT}`)
}) 