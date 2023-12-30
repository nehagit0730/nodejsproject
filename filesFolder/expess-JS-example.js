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