const express = require('express');
const { createCustomer } = require('../controller/CustomerController');
const router = express.Router();

router.post('/create',createCustomer);

module.exports = router;