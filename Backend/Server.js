const express = require('express');
const app = express()
const Routes = require("./Routes/Routes")
const cors = require("cors")
const dotenv = require("dotenv")
const connect = require("./Config/Connection")
dotenv.config()
connect()

app.use(express.json())
app.use(cors())

app.use("/api",Routes)



app.listen(process.env.PORT,()=>{
    console.log(`Your Server is startd on the port ${process.env.PORT}`);
})