const express = require('express');
const { createOrder } = require('../controller/OrderController');

const router = express.Router();

router.post('/create',createOrder);

module.exports = router;