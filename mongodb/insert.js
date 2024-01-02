const dbConnect = require('./mongodb');

const insert =async ()=>{
    const db=await dbConnect();
    const result = await db.insertMany(     // for single insertOne
        [
        {name: 'S 23 Ultra',brand: 'Samsung',price: 1000,category:'mobile'},
        {name: 'Nord',brand: 'Oneplus',price: 500,category:'mobile'},
        {name: 'S 21 fe',brand: 'Samsung',price: 600,category:'mobile'},
        {name: 'pixel7',brand: 'Google Pixel',price: 800,category:'mobile'}
    ]
    );
    console.log(result);
}
insert();