const Customer = require('../model/Customer');

async function createCustomer(req,res) {
   try{
    const {name,address,contact} = req.body;
    const newCustomer = await Customer.create({name,address,contact});
    res.status(201).json({
        msg: "New customer added",
        data: newCustomer
    })
   }
   catch(err){
    console.log("error creating new customer",err);
    res.status(500).json({
        msg: "Internal server error. Can not create new customer"
    })
   }
}

async function getAllCustomer(req,res) {
    try{
        const customers = await Customer.findAll();
        res.status(200).json({
            data: customers
        })
    }
    catch(err)
    {
        console.log("Internal server error",err);
        res.status(500).json({
            msg: "Inernal server error"
        })
    }
}

async function deleteCustomer(req,res) {
    try{
        const {id} = req.params;
        const customer = await Customer.findByPk(id);
        if(!customer)
        {
            res.status(404).json({
                msg: `customer ${id} did not found`
            })
        }
        await customer.destroy();
        res.status(200).json({
            msg: `customer with ${id} deleted`
        })
    }
    catch(err){
        console.log("Can not delete customer",err);
        res.status(500).json({
            msg: "Internal server error"
        })
    }
}

async function customerById(req,res) {
    try{
        const {id} = req.params;
        const customer = await Customer.findByPk(id);
        if(!customer)
        {
            res.status(404).json({
                msg: `customer with ${id} did not found`
            })
        }
        res.status(200).json({
            customer: customer
        })
    }
    catch(err)
    {
        console.log("error can not find customer",err);
        res.status(500).json({
            msg: `Internal server error`
        })
    }
}

module.exports = {createCustomer,getAllCustomer,deleteCustomer,customerById};