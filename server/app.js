const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const errorMiddlerware = require("./middlewares/error");
//middleware
app.use(express.json());
app.use(cookieParser());

//routes
const products = require("./routes/product");
const auth = require("./routes/auth");
const order = require("./routes/order");
app.use("/api/v1", products);
app.use("/api/v1/auth", auth);
app.use("/api/v1/order", order);

app.use(errorMiddlerware);

module.exports = app;
