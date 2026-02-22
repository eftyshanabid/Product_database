const { DataTypes } = require('sequelize');
const DB = require('../database/DB');

const Product = DB.define('Product',{
    name:
    {
        type:DataTypes.STRING,
        allowNull: false
    },
    model:
    {
        type:DataTypes.STRING,
        allowNull:false 
    },
    price:{
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    }
})

Product.sync()
.then(()=>{
    console.log('Product table created successfully')
})
.catch((err)=>{
    console.log('Can not create product table',err)
})

module.exports = Product;