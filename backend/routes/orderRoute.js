const express = require("express");
const router = express.Router();
const {
  getOrders,
  setOrder,
  editOrder,
  deleteOrder,
} = require("../controller/orderController");

router.get("/", getOrders);

router.post("/", setOrder);

router.put("/:id", editOrder);

router.delete("/:id", deleteOrder);

module.exports = router;
