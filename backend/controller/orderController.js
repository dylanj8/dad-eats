const asyncHandler = require("express-async-handler");

const Order = require("../models/orderModel");

const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find();

  res.status(200).json(orders);
});

const setOrder = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please enter text for your order");
  }
  const order = await Order.create({
    text: req.body.text,
  });
  res.status(200).json({ message: "Setting order" });
});

const editOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    res.status(400);
    throw new Error("Order not found");
  }
  const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json({ message: `Editing order ${req.params.id}` });
});

const deleteOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    res.status(400);
    throw new Error("Order not found");
  }

  const deletedOrder = await Order.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: `Deleting order ${req.params.id}` });
});

module.exports = {
  getOrders,
  setOrder,
  editOrder,
  deleteOrder,
};
