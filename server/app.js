const express = require("express");
const app = express();
const errorMiddlerware = require("./middlewares/error");

//middleware
app.use(express.json());

const products = require("./routes/product");
app.use("/api/v1", products);

app.use(errorMiddlerware);

module.exports = app;
