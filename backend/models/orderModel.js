const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },

    text: {
      type: String,
      required: [true, "Please specify a food"],
    },

    qty: {
      type: String,
      required: [true, "There needs to be atleast one meal ordered"],
    },

    date: {
      type: String,
      required: [true, "We need to know what date you ordered the meal"],
    },

    img: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);
