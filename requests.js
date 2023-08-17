const express = require('express');
const app = express();
const {products} = require('./data.js');

const logger = require('./logger.js');
const authorize = require('./authorize.js')

// app.use([logger,authorize])

app.listen(5001, ()=>{
    console.log('server is listening on port 5001')
})

app.get('/', logger, (req,res) =>{
   
    res.send('Home')
})


app.get('/about', (req,res) =>{
    res.send('About')
})

app.get('/api/products', (req,res) =>{
    res.send('Products')
})

app.get('/api/items', [logger,authorize], (req,res) =>{
    res.send('Items')
})
