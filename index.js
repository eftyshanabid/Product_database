const express = require('express');
const env = require('dotenv');
const ProductRoute = require('./routes/ProductRoute')
env.config({path: './config/.env'});

const app = express();
app.use(express.json());
const _port = process.env.PORT;

app.use('/product',ProductRoute)

app.listen(_port,()=>{
    console.log(`app is running on ${_port}`)
})


