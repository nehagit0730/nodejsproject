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


app.listen(port);