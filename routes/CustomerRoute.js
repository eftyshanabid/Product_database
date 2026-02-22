const express = require('express');
const { createCustomer, getAllCustomer } = require('../controller/CustomerController');
const router = express.Router();

router.post('/create',createCustomer);
router.get('/getAll',getAllCustomer);

module.exports = router;