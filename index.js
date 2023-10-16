
const express= require('express');
const cors=require('cors');
const app=express();
const port =process.env.PORT || 5000;

// middle use 
app.use(express.json());
app.use(cors());



// test the server 
app.get('/',(req,res)=>{
    res.send('Server is running . All data is successfully fetch')
})


// listen port
app.listen(port,(req,res)=>{
    console.log(`server is running port ${port}`)
})