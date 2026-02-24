const { DataTypes } = require('sequelize');
const DB = require('../database/DB');

const OrderItem = DB.define('OrderItem',{
    quantity:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    price_at_order:{
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    product_id:{
        type:DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: "Products",
            key: "id"
        }
    },
    order_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model: "Orders",
            key: "id"
        }
    }
})

OrderItem.sync()
.then(()=>{
    console.log("OrderItem table has been created");
})
.catch((err)=>{
    console.log("Error! can not create OrderItem table",err)
})

module.exports = OrderItem