const express = require("express");
const {
  newOrder,
  getSingleOrder,
  myOrders,
} = require("../controllers/orderControllers");
const router = express.Router();
const { isAuthenticatedUser } = require("../middlewares/authenticate");
router.route("/myorders").get(isAuthenticatedUser, myOrders);
router.route("/:id").get(isAuthenticatedUser, getSingleOrder);
router.route("/new").post(isAuthenticatedUser, newOrder);

module.exports = router;
