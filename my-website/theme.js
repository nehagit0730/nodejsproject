

const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname,'public');

app.set('view engine', 'ejs')

//app.use(express.static(publicPath));
app.get('',(req,res)=> {
res.sendFile(`${publicPath}/index.html`)
});

app.get('/profile',(req,res)=> {
    const user = {
        name: 'Neha',
        email: 'neha@gmail.com',
        city: 'Dharamshala'
    }
    res.render('profile',{user});
    });

app.get('/contact',(req,res)=> {
    res.sendFile(`${publicPath}/contact.html`)
    });

app.get('/about',(req,res)=> {
        res.sendFile(`${publicPath}/about.html`)
    });

app.get('*',(req,res)=> {
            res.sendFile(`${publicPath}/nopage.html`)
    });

app.listen(4500);

