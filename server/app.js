const express = require("express");
const app = express();
const errorMiddlerware = require("./middlewares/error");

//middleware
app.use(express.json());

const products = require("./routes/product");
const auth = require("./routes/auth");
app.use("/api/v1", products);
app.use("/api/v1", auth);

app.use(errorMiddlerware);

module.exports = app;
