require("dotenv").config();
const express = require('express');
const app = express();
const connectDB = require("./db/connect");

const PORT = 5000;

const products_routes = require("./routes/products");

app.get("/",(req,res) => {
    res.send("Hi i am Live raj  ");
});

//middleware toset router
app.use("/api/products", products_routes);

const start = async () => {

  try{
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, ()=> {
     console.log( `${PORT} , "Yes i am connected`); 
    });
  } catch (error) {
     console.log(error);
    }
};

start();
