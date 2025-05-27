const express = require("express");
const {
  getProduct,
  newProduct,
  updateProduct,
  getSingleProduct,
  deleteProduct,
} = require("../controllers/productControllers");
const router = express.Router();
const { isAuthenticatedUser } = require("../middlewares/authenticate");

router.route("/product").get(isAuthenticatedUser, getProduct);
router.route("/product/new").post(newProduct);
router.route("/product/:id").get(getSingleProduct);
router.route("/product/:id").put(updateProduct);
router.route("/product/:id").delete(deleteProduct);

module.exports = router;
