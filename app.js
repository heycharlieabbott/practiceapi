const express = require('express');
const app = express();
const {products} = require('./data.js')

const logger =(req,res,next) => {
    const method = req.method;
    const url = req.url;
    console.log(method, url)
    next()
}

app.listen(5001, ()=>{
    console.log('server is listening on port 5001')
})

app.get('/', logger, (req,res) =>{
   
    res.send('Home')
})


app.get('/about', (req,res) =>{
    res.send('About')
})



