const express = require("express");
const {
  getProduct,
  newProduct,
  updateProduct,
  getSingleProduct,
  deleteProduct,
} = require("../controllers/productControllers");
const router = express.Router();

router.route("/product").get(getProduct);
router.route("/product/new").post(newProduct);
router.route("/product/:id").get(getSingleProduct);
router.route("/product/:id").put(updateProduct);
router.route("/product/:id").delete(deleteProduct);

module.exports = router;
