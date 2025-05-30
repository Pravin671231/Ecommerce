const express = require("express");
const {
  newOrder,
  getSingleOrder,
  myOrders,
  orders,
} = require("../controllers/orderControllers");
const router = express.Router();
const {
  isAuthenticatedUser,
  authorizeRoles,
} = require("../middlewares/authenticate");

//Admin
router
  .route("/orders")
  .get(isAuthenticatedUser, authorizeRoles("admin"), orders);
//user
router.route("/myorders").get(isAuthenticatedUser, myOrders);
router.route("/:id").get(isAuthenticatedUser, getSingleOrder);
router.route("/new").post(isAuthenticatedUser, newOrder);

module.exports = router;
