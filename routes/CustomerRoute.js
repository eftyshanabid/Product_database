const express = require('express');
const { createCustomer, getAllCustomer, deleteCustomer, customerById } = require('../controller/CustomerController');
const router = express.Router();

router.post('/create',createCustomer);
router.get('/getAll',getAllCustomer);
router.delete('/delete/:id',deleteCustomer);
router.get('/customer/:id',customerById)

module.exports = router;