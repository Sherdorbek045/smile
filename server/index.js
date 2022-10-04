require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

//database connection
connection();

//middleware
app.use(express.json());
app.use(cors());



//listen

const port = process.env.PORT || 5050;
app.listen(port,()=>console.log(`Server has been started on ${port} port`))
