const express = require('express');
const { connection } = require('./db');
const {genralFormRouter} = require('./Routes/GenralForm.route');
const { contactRouter}  = require("./Routes/Contact.route");
const cors = require('cors');


const app = express();
app.use(express.json())
//to aviod cors error in frontend
app.use(cors());


app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.use("/genral",genralFormRouter);
app.use("/contact",contactRouter);


app.listen(4000,async()=>{
    try {
        await connection;
        console.log("Connected to db");
    } catch (error) {
        console.log({ "error": error.message});
    }
    console.log("server is running on port 4000");
});