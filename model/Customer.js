const { DataTypes } = require('sequelize');
const DB = require('../database/DB');

const Customer = DB.define('Customer',{
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    address:{
        type: DataTypes.STRING,
        allowNull: false
    },
    contact:{
        type: DataTypes.STRING,
        allowNull: false
    }
})

Customer.sync()
.then(()=>{
    console.log("Customer table created")
})
.catch((err)=>{
    console.log("error creating customer table",err)
})

module.exports = Customer
