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

module.exports = {createCustomer}