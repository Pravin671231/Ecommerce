const express = require("express");
const {
  newOrder,
  getSingleOrder,
  myOrders,
  orders,
  updateOrder,
  deleteOrder,
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
router
  .route("/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateOrder);
router
  .route("/:id")
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteOrder);

//user
router.route("/myorders").get(isAuthenticatedUser, myOrders);
router.route("/:id").get(isAuthenticatedUser, getSingleOrder);
router.route("/new").post(isAuthenticatedUser, newOrder);

module.exports = router;
