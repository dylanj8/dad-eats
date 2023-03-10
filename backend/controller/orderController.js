const asyncHandler = require("express-async-handler");

const getOrders = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Fetching orders" });
});

const setOrder = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please enter text for your order");
  }
  res.status(200).json({ message: "Setting order" });
});

const editOrder = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Editing order ${req.params.id}` });
});

const deleteOrder = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Deleting order ${req.params.id}` });
});

module.exports = {
  getOrders,
  setOrder,
  editOrder,
  deleteOrder,
};
