const express = require('express');
const { createOrder,deleteOrder, getallOrders} = require('../controller/OrderController');

const router = express.Router();

router.post('/create',createOrder);
router.delete('/delete/:id',deleteOrder);
router.get('/getall',getallOrders);

module.exports = router;