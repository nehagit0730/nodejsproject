/*
//EXAMPLE OF EXPRESS JS

const port = 4500;
const express= require('express');
const app = express();
app.get('',(req,res)=>{
    res.send('Hello this is homepage');
});

app.get('/about',(req,res)=>{
    res.send('Hello this is aboutpage');
});

app.listen(port);
*/

//RENDER HTML AND JASON

const port = 4500;
const express= require('express');
const app = express();
app.get('',(req,res)=>{
    res.send(`<h1>Hello this is homepage</h1>
    <a href="/about">About Page</a><br>
    <a href="/help">Json Page</a>`);
});

app.get("/about",(req,res)=>{
    res.send(`
    <h1>Hello this is aboutpage</h1>
    <p>This is about page</p>
    <input type="text" placeholder="username" />
    <button>Clickme</button>
    `);
});

app.get("/help",(req,res)=>{
    res.send([
        {
        name: 'Neha',
        email: 'nehabhardwazz.gtl@gmail.com',
        age: 32
    },
    {
        name: 'Puneet',
        email: 'npuneet.gtl@gmail.com',
        age: 29
    },
    {
        name: 'Pankaj',
        email: 'pankaj.gtl@gmail.com',
        age: 36
    },
    {
        name: 'Sangeeta',
        email: 'sangeeta.gtl@gmail.com',
        age: 20
    },
    {
        name: 'Rahul',
        email: 'rahul.gtl@gmail.com',
        age: 35
    }
]);
});

app.listen(port);