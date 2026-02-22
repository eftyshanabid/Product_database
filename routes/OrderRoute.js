const express = require('express');
const { createOrder,deleteOrder} = require('../controller/OrderController');

const router = express.Router();

router.post('/create',createOrder);
router.post('/delete',deleteOrder);

module.exports = router;