const express = require("express")
const app = express()
const PORT = 3000
const fruits = require(`./models/fruits.js`)
const reactViews = require(`express-react-views`)

app.set(`view engine`, `jsx`);
app.engine(`jsx`, reactViews.createEngine());

app.get("/fruits", (req, res) => {
  res.render(`Index`, {fruits: fruits});
});

app.get(`/fruits/new`, (req, res) =>{
  res.render(`New`);
});

app.get("/fruits/:indexOfFruit", (req, res) => {
//   res.send(fruits[req.params.indexOfFruit])
    res.render(`Show`, {
        fruit : fruits[req.params.indexOfFruit]
    });
});

app.listen(PORT, () => { 
  console.log(`Listening on port: ${PORT}`);
});