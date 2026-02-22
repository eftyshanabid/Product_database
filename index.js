const express = require('express');
const env = require('dotenv');
const ProductRoute = require('./routes/ProductRoute')
const CustomerRoute = require('./routes/CustomerRoute')
const OrderRoute = require('./routes/OrderRoute')
env.config({path: './config/.env'});

const app = express();
app.use(express.json());
const _port = process.env.PORT;

app.use('/product',ProductRoute);
app.use('/customer',CustomerRoute)
app.use('/order',OrderRoute);

app.listen(_port,()=>{
    console.log(`app is running on ${_port}`)
})


