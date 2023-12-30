//APPLICATION LEVEL MIDDLEWARE USE
//USE IN ALL APLLICATION/PAGES/ROUTE
//APPLY GLOBALY
/*
const port = 5000;

const express= require('express');
const app = express();

const reqFilter = (req,res,next)=> {
    if(!req.query.age)
    {
        res.send('Please enter age');
    }
    else if(req.query.age<18)  //if we add age less then 18 it shows please enter age"/?age=8" if age i 18 or more it shows homepage
    {
        res.send('Please enter age');
    }
    else
    {
        next();
    }
}

app.use(reqFilter)

app.get('',(req,res)=>{
    res.send('welcome');
});

app.get('/user',(req,res)=>{
    res.send('user page');
});

app.get('/about',(req,res)=>{
    res.send('about page');
});


app.listen(port);
*/

//ROUTE LEVEL MIDDLEWARE 
//USE IN SPECIFIC PAGE/APLLICATION
/*
const port = 5000;

const express= require('express');
const app = express();

const reqFilter = (req,res,next)=> {
    if(!req.query.age)
    {
        res.send('Please enter age');
    }
    else if(req.query.age<18)  //if we add age less then 18 it shows please enter age"/?age=8" if age i 18 or more it shows homepage
    {
        res.send('Please enter age');
    }
    else
    {
        next();
    }
}

//app.use(reqFilter)        this will use in all pages

app.get('',(req,res)=>{
    res.send('welcome');
});

app.get('/user',reqFilter, (req,res)=>{
    res.send('user page');
});

app.get('/about',(req,res)=>{
    res.send('about page');
});


app.listen(port);
*/

//GROUP ROUTE MIDDLEWARE
//if we ha 100 or more then route and we want only in 50 
// APLLY SINGLE OR  GROUP OF ROUTER

const port = 5000;

const express= require('express');
const app = express();
const route = express.Router();


const reqFilter = (req,res,next)=> {
    if(!req.query.age)
    {
        res.send('Please enter age');
    }
    else if(req.query.age<18)  //if we add age less then 18 it shows please enter age"/?age=8" 
    {
        res.send('Please enter age');
    }
    else
    {
        next();
    }
}

route.use(reqFilter);
app.get('',(req,res)=>{
    res.send('welcome');
});

app.get('/user', (req,res)=>{
    res.send('user page');
});

app.get('/about',(req,res)=>{
    res.send('about page');
});

route.get('/contact',(req,res)=>{
    res.send('contact page');
});

route.get('/faq',(req,res)=>{
    res.send('faq page');
});

route.get('/team',(req,res)=>{
    res.send('team page');
});

app.get('/product',(req,res)=>{
    res.send('product page');
});

app.get('/shop',(req,res)=>{
    res.send('shop page');
});

app.get('/blog',(req,res)=>{
    res.send('blog page');
});

app.use('/',route);

app.listen(port);