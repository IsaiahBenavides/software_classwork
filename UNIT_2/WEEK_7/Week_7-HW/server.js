const express = require(`express`);
const app = express();

const fs = require(`fs`);
app.engine(`madeline`, (filePath, options, callback)=> {
    fs.readFile(filePath, (err, content) => {
        if (err) return callback(err);
        const rendered = content.toString()
            .replace(`#color#`, `<style>` + options.color + `</style>`)
            .replace('#title#', '<title>' + options.title + '</title>')
            .replace('#message#', '<h1>' + options.message + '</h1>')
            .replace('#content#', '<div>' + options.content + '</div>');
        return callback(null, rendered);
    });
});

app.set(`views`, `./views`);
app.set('view engine', 'madeline');

app.get(`/`, (req, res)=>{
    // res.send(`!Landing Page!`)
    res.render(`templateOne`, {title: `Landing Page`, message: `This is the landing page.`, content: `Lorem Ipsum`});
});

app.get(`/home`, (req, res)=>{
    res.render(`templateOne`, {title: `Home Page`, message: `This is the home page.`, content: `Lorem Ipsum`});
});

app.get(`/about`, (req, res)=>{
    res.render(`templateOne`, {title: `About Page`, message: `This is the about page.`, content: `Lorem Ipsum`});
});

app.get(`/userOne`, (req, res)=>{
    res.render(`templateTwo`, {title: `Account Page`, message: `This is User One's page.`, color:`body {background-color:red}`, content: `Lorem Ipsum`});
});

app.get(`/userTwo`, (req, res)=>{
    res.render(`templateTwo`, {title: `Account Page`, message: `This is User Two's page.`, color:`body {background-color:blue}`, content: `Lorem Ipsum`});
});

app.get(`/contact`, (req, res)=>{
    res.render(`templateOne`, {title: `Landing Page`, message: `How to contact us.`, content: `Lorem Ipsum`});
});

app.get(`/stats`, (req, res)=>{
    res.render(`templateOne`, {title: `Landing Page`, message: `This is the Statistics page.`, content: `Lorem Ipsum`});
});

app.get(`/map`, (req, res)=>{
    res.render(`templateOne`, {title: `Map Page`, message: `This is the Map page.`, content: `Lorem Ipsum`});
});

app.get(`/meetUs`, (req, res)=>{
    res.render(`templateOne`, {title: `Meet Us Page`, message: `Meet the team.`, content: `Lorem Ipsum`});
});

app.get(`/green`, (req, res)=>{
    res.render(`templateTwo`, {title: `Landing Page`, message: `This is the GREEN page.`, color:`body {background-color:green}`, content: `Lorem Ipsum`});
});


app.listen(3000, ()=>{
    console.log(`Listening`);
});


