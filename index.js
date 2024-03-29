
const express= require('express');
const cors=require('cors');
const app=express();
const port =process.env.PORT || 5000;


// import env 
require('dotenv').config()

// middle use 
app.use(express.json());
app.use(cors());


// mongodb file start 


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@atlascluster.ynftepn.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


// mongodb file end



// test the server 
app.get('/',(req,res)=>{
    res.send('Server is running . All data is successfully fetch')
})

app.get('/user',(req,res)=>{
    res.send('Server is running . All data is successfully fetch.Everything setup complete')
})


// listen port
app.listen(port,(req,res)=>{
    console.log(`server is running port ${port}`)
})