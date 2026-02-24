const Order = require('../model/Order');

async function createOrder(req,res) {
    try{
        const order_date = req.body.order_date;
        const delivery_address = req.body.delivery_address;
        const customer_id = req.body.customer_id;
        const status = req.body.status;
        const order_items = req.body.order_items;

    }
    catch(err)
    {
        console.log("Internal server error, can not create order",err);
        res.status(500).json({
            msg: "Internal server error. Can not create new Order"
        })
    }
}

    async function deleteOrder(req,res) {
        try{
            const {id} = req.params;
            const order = await Order.findByPk(id);
            if(!order){
                res.status(404).json({
                    msg: "Order did not found"
                })
            }
            await order.destroy();
            res.status(200).json({
                msg: "order has been deleted"
            })
        }
        catch(err)
        {
            console.log("error!, can not delete",err);
            res.status(500).json({
                msg: "Internal server error."
            })
        }
    }

    async function getallOrders(req,res){
        try{
            const orders = await Order.findAll();
            res.status(200).json({
                data: orders
            })
        }
        catch(err)
        {
            console.log("Error can not fetch orders",err);
            res.status(500).json({
                msg: "Internal server error"
            })
        }
    }

    async function getOrderbyId(req,res) {
       try{
        const {id} = req.params
        const order = await Order.findByPk(id);
        if(!order){
            res.status(404).json({
                msg: "Did not found order"
            })
        }
        res.status(200).json({
           data: order 
        })
       } 
       catch(err)
       {
        console.log("Internal server error",err);
        res.status(500).json({
            msg: "Internal server error."
        })
       }
    }

module.exports = {createOrder,deleteOrder,getallOrders,getOrderbyId};