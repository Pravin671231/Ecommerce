const products = require("../data/products.json");
const Product = require("../models/productModel");
const dotenv = require("dotenv");
const path = require("path");
const connectDatabase = require("../config/database");

dotenv.config({ path: path.join(__dirname, "../config/config.env") });
connectDatabase();
const seederProduct = async () => {
  try {
    await Product.deleteMany();
    console.log("Products Deleted");

    await Product.insertMany(products);
    console.log("All Products Added");
  } catch (error) {
    console.error(error.message);
  }
  process.exit(1);
};

seederProduct();
