const express = require("express");
const { newOrder, getSingleOrder } = require("../controllers/orderControllers");
const router = express.Router();
const { isAuthenticatedUser } = require("../middlewares/authenticate");
router.route("/new").post(isAuthenticatedUser, newOrder);
router.route("/:id").get(isAuthenticatedUser, getSingleOrder);

module.exports = router;
