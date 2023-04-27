const mongoose = require("mongoose");
const validator = require("validator");

const cartSchema = mongoose.Schema(
  {
    userPhoneNumber: {
      type: Number,
      required: [true, "User Phone Number is required"],
      minLength: [0, "User Phone Number Can't be Negative"],
    },
    productName: {
      type: String,
      required: [true, "Product Name is required"],
      minLength: [3, "Name must be at list 3 characters"],
      maxLength: [100, "Name is to long"],
    },

    productQuantity: {
      type: Number,
      required: [true, "Product Quantity is required"],
      minLength: [0, "Product Quantity Can't be Negative"],
    },

    productImage: {
      type: String,
      required: [true, "Product Image is required"],
      validate: [validator.isURL, "Please provide a valid url"],
    },

    productPrice: {
      type: Number,
      required: [true, "Product Price is required"],
      minLength: [0, "Product Price Can't be Negative"],
    },
    productID: {
      type: String,
      required: [true, "Product ID is required"],
    },
  },

  { timestamps: true }
);

const cart = mongoose.model("cart", cartSchema);
module.exports = cart;
