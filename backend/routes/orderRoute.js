const express = require("express");
const router = express.Router();
const {
  getOrders,
  setOrder,
  editOrder,
  deleteOrder,
} = require("../controller/orderController");

const { protect } = require("../middleware/authMiddleware");

// add protect to order routes later on in development

router.get("/", getOrders);

router.post("/", setOrder);

router.put("/:id", editOrder);

router.delete("/:id", deleteOrder);

module.exports = router;
