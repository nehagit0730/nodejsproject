const mongoose = require('mongoose');

const main = async ()=>{
    await mongoose.connect("mongodb://localhost:27017/ecom");
    const productSchema = new mongoose.Schema ({
        name: String,
        price:Number
    });
    const ProductsModel = mongoose.model('Product', productSchema);
    let data = new ProductsModel({name:"m8",price:430});
    let result = await data.save();
    console.log(result);
}

main();