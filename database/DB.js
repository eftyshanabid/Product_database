const Sequelize = require('sequelize');
const DB = new Sequelize('postgres://postgres:postgres@localhost:5433/Product_DB');

DB.authenticate()
.then(()=>{
    console.log('Database connected successfully');
})
.catch((err)=>{
    console.log('Can not connect to the database',err)
})

module.exports = DB

