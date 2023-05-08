const asyncHandler = require("express-async-handler");

const Order = require("../models/orderModel");

const getOrders = asyncHandler(async (req, res) => {
  const userId = req.query.userId; // Extract the user ID from the query string
  const orders = await Order.find({ user: userId });
  res.status(200).json(orders);
});

const setOrder = asyncHandler(async (req, res) => {
  if (!req.body.order || req.body.order.length === 0) {
    res.status(400);
    throw new Error("Please enter at least one order");
  }

  const orders = req.body.order;

  for (const order of orders) {
    const newOrder = await Order.create({
      text: order.name,
      date: order.date,
      qty: order.qty,
      img: order.img,
      user: req.user.id,
    });
  }

  res.status(200).json({ message: "Orders submitted" });
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
