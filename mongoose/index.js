
		
		
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/ecom");
const productSchema = new mongoose.Schema({
        name: String,
        price:Number,
        category: String,
        image: String,
        description: String,
        stock: Number
});

const saveInDB = async () => {
  const Product = mongoose.model("products", productSchema);
  let data = new Product({
    name:"m8",
    price:430,
    category:"mobile",
    image:"https://cdn.pixabay.com/photo/2017/09/08/10/00/camera-1920449_960_720.jpg",
    description:"front camera:48megapixel.back camera:32megapixel",
    stock:100
  });
  const result = await data.save();
  console.log(result);
};
saveInDB();
const updateInDB = async () => {
  const Product = mongoose.model("products", productSchema);
  let data = await Product.updateOne(
    { name: "m8" },
    {
      $set: { price: 550, name: "max pro 6" },
    }
  );
  console.log(data);
};
// updateInDB();
const deleteInDB = async () => {
  const Product = mongoose.model("products", productSchema);
  let data = await Product.deleteOne({ name: "Glass 7" });
  console.log(data);
};
const findInDB = async () => {
  const Product = mongoose.model("products", productSchema);
  let data = await Product.find({ name: "Glass 3" });
  console.log(data);
};
// deleteInDB();
// findInDB();