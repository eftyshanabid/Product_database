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
    status:
    {
        type: DataTypes.ENUM('confirmed','shipped','delivered','cancelled'),
        allowNull: false
    },
    quantity:{
        type: DataTypes.INTEGER,
        allowNull:false
    }
})

Order.sync({force:true})
.then(()=>{
    console.log("Order table created successfully")
})
.catch((err)=>{
    console.log('Error creating Order table',err)
})

module.exports = Order;