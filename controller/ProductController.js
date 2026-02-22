const Product = require('../model/Product');

async function createProduct(req,res){
 try{
    const {name,model,price} = req.body;
    const newProduct = await Product.create({name,model,price});
    res.status(201).json({
        msg: 'product added successfully',
        data: newProduct
    })
 }
 catch(err){
    console.log('Error adding a new product', err);
    res.status(500).json({
        msg: "Internal server error. Can not add product"
    })
 }
}

module.exports = {createProduct};