const express = require("express");
const { newOrder } = require("../controllers/orderControllers");
const router = express.Router();
const { isAuthenticatedUser } = require("../middlewares/authenticate");
router.route("/new").post(isAuthenticatedUser, newOrder);

module.exports = router;
