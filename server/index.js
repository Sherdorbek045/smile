require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require('./db');
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');

//database connection
connection();

//middleware
app.use(express.json());
app.use(cors());

//routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

//listen
const port = process.env.PORT || 5050;
app.listen(port,
  () => {
    console.log(`Port: ${port}`);
    res.sendFile(__dirname + '/index.html');
  });