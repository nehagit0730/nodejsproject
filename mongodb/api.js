/*
//API GET METHOD
const express = require('express');
const dbConnect = require('./mongodb');
const app = express();
app.get('/', async (req,res)=>{
    let data = await dbConnect();
    data = await data.find().toArray();
        res.send(data);
})

app.listen(3000,()=>{
    console.log('server is running');
})
*/

//API POST METHOD

const express = require('express');
const dbConnect = require('./mongodb');
const app = express();

app.use(express.json());

app.get('/', async (req,res)=>{
    let data = await dbConnect();
    data = await data.find().toArray();
        res.send(data);
});

app.post('/', async (req,res)=>{
    let data= await dbConnect();
    let result = await data.insertOne(req.body);
    
        res.send(result)
})


app.listen(3000)
