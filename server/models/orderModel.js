const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  shippingInfo: {
    address: { type: String, required: true },
    country: { type: String, required: true },
    city: { type: String, required: true },
    phoneNo: { type: String, required: true },
    postalCode: { type: String, required: true },
  },
  user: { type: mongoose.Schema.ObjectId, required: true, ref: "user" },
  orderItems: [
    {
      name: { type: String, required: true },
      quantity: { type: String, required: true },
      image: { type: String, required: true },
      price: { type: Number, required: true },
      product: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "Product",
      },
    },
  ],
  itemPrice: { type: Number, required: true, default: 0.0 },
  taxPrice: { type: Number, required: true, default: 0.0 },
  shoppingPrice: { type: Number, required: true, default: 0.0 },
  totalPrice: { type: Number, required: true, default: 0.0 },
  paymentInfo: {
    id: { type: String, required: true },
    status: { type: String, required: true },
  },
  paidAt: { type: Date },
  deliveredAt: { type: Date },
  orderStatus: { type: String, required: true,default:"Processing" },
  createdAt: { type: Date, default: Date.now },
});

let orderModel = mongoose.model("Order", orderSchema);

module.exports = orderModel;
