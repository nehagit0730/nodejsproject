const dbConnect = require('./mongodb');

const updateData =async ()=>{
    let data =await dbConnect();
    let result = data.updateOne(
        {name: 'n-4o'}, {$set: { name:'N 40', price:350 }
    }
    );
}

updateData();