const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please specify a food"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);
