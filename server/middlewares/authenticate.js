const ErrorHandler = require("../utils/errorHandler");
const User = require("../models/userModel");
const catchAsyncError = require("./catchAsyncError");
const jwt = require("jsonwebtoken");

exports.isAuthenticatedUser = catchAsyncError(async (req, res, next) => {
  const { token } = await req.cookies;

  if (!token) {
    return next(new ErrorHandler("Login first to handle is resource", 401));
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decoded.id);
  next();
});

exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(`role ${req.user.role} is not allowed`, 401)
      );
    }
    next();
  };
};


