const dbConnect = require('./mongodb');

const deleteData =async()=>
{
    let data =await dbConnect();
    let result = await data.deleteOne({name: 'i phone 15'});   //deleteMany for multiple data
    console.log(result);
}


deleteData();