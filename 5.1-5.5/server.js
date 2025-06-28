//ES5 SYNTAX
const express = require("express");
const app = express();
const port = 3000;
//ES6 SYNTAX
//import express from 'express'

//http://localhost:3000/

app.use(express.json()); //intercepts and parse your json data
app.use("/products", require("./controllers/products"));

app.listen(port, () => console.log("Server is running on PORT: " + port));
