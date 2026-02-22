const Order = require('../model/Order');

async function createOrder(req,res) {
    try{
        const {order_date,delivery_address,city} = req.body;
        const newOrder = await Order.create({order_date,delivery_address,city});
        res.status(201).json({
            msg: "new order has been created",
            data: newOrder
        })
    }
    catch(err)
    {
        console.log("Internal server error, can not create order",err)
    }
}

module.exports = {createOrder};