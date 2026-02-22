const express = require('express');
const env = require('dotenv');
env.config({path: './config/.env'});

const app = express();
const _port = process.env.PORT

app.listen(_port,()=>{
    console.log(`app is running on ${_port}`)
})


