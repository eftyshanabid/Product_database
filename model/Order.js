const { DataTypes } = require('sequelize');
const DB = require('../database/DB');

const Order = DB.define('Order',{
    order_date:{
        type: DataTypes.STRING,
        allowNull: false
    },
    customer_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: "Customers",
            key: "id"
        }
    },
    delivery_address:{
        type: DataTypes.STRING,
        allowNull: false
    },
    city:{
        type: DataTypes.STRING,
        allowNull: false
    }
})

Order.sync()
.then(()=>{
    console.log("Order table created successfully")
})
.catch((err)=>{
    console.log('Error creating Order table',err)
})

module.exports = Order;