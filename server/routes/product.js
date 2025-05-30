const express = require("express");
const {
  getProduct,
  newProduct,
  updateProduct,
  getSingleProduct,
  deleteProduct,
  createReview,
} = require("../controllers/productControllers");
const router = express.Router();
const {
  isAuthenticatedUser,
  authorizeRoles,
} = require("../middlewares/authenticate");

router.route("/product").get(isAuthenticatedUser, getProduct);
router.route("/product/:id").get(getSingleProduct);
router.route("/product/:id").put(updateProduct);
router.route("/product/:id").delete(deleteProduct);
//Reviews
router.route("/review").put(isAuthenticatedUser,createReview)

//Admin route
router
  .route("/admin/product/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), newProduct);
module.exports = router;


