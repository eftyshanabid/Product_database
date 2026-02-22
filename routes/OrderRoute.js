const express = require('express');
const { createOrder,deleteOrder, getallOrders, getOrderbyId} = require('../controller/OrderController');

const router = express.Router();

router.post('/create',createOrder);
router.delete('/delete/:id',deleteOrder);
router.get('/getall',getallOrders);
router.get('/getOrder/:id',getOrderbyId);

module.exports = router;