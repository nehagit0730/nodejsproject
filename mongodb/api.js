
const express = require('express');
const dbConnect = require('./mongodb');
const mongodb = require('mongodb');
const app = express();

app.use(express.json());

app.get('/', async (req,res)=>{             //API GET METHOD
    let data = await dbConnect();
    data = await data.find().toArray();
        res.send(data);
});

app.post('/', async (req,res)=>{             //API POST METHOD
    let data= await dbConnect();
    let result = await data.insertOne(req.body);
    
        res.send(result)
})

app.put('/', async (req,res)=>{               //API Put METHOD
    let data= await dbConnect();
    let result = data.updateOne(
        {name:'pixel7'}, 
        { $set:{name:'Pixel 7'}}
        )
    
        res.send({result:"update"})
})

app.delete('/:id', async (req,res)=>{            //API Delete METHOD
    console.log(req.params.id)
    let data= await dbConnect();
    let result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)});
    res.send(result)
})

app.listen(3000)
