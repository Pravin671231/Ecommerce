const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middlewares/catchAsyncError");
const APIFeatures = require("../utils/APIFeature");

// @desc create Product
// @route /api/v1/product
exports.getProduct = async (req, res, next) => {
  const resPerPage=2

  const apiFeatures = new APIFeatures(Product.find(), req.query).search().filter().paginate(resPerPage);
  const product = await apiFeatures.query;

  res.status(200).json({
    success: true,
    count: product.length,
    product,
  });
};

// @desc create Product
// @route /api/v1/product/new

exports.newProduct = catchAsyncError(async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({ success: true, product });
});
// @desc Get single Product
// @route /api/v1/product/:id

exports.getSingleProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 400));
  }

  res.status(201).json({ success: true, product });
};
// @desc update Product
// @route /api/v1/product/:id

exports.updateProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Page not found",
    });
  }
  await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ success: true, product });
};
// @desc delete Product
// @route /api/v1/product/:id

exports.deleteProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 400));
  }

  await product.deleteOne();

  res.status(200).json({ success: true, message: "Product Deleted" });
};
