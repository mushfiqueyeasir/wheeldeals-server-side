const mongoose = require("mongoose");
const validator = require("validator");

const productSchema = mongoose.Schema(
  {
    productName: {
      type: String,
      required: [true, "Product Name is required"],
      minLength: [3, "Name must be at list 3 characters"],
      maxLength: [100, "Name is to long"],
    },

    productBrand: {
      type: String,
      required: [true, "Product Brand Name is required"],
      minLength: [3, "Product Brand Name must be at list 3 characters"],
      maxLength: [100, "Product Brand Name is to long"],
    },
    productDescription: {
      type: String,
      required: [true, "Product Description is required"],
      minLength: [3, "Product Description must be at list 3 characters"],
    },

    productImage: {
      type: String,
      required: [true, "Product Image is required"],
      validate: [validator.isURL, "Please provide a valid url"],
    },

    productStock: {
      type: Number,
      required: [true, "Product Stock is required"],
      minLength: [0, "Product Amount Can't be Negative"],
    },
    productPrice: {
      type: Number,
      required: [true, "Product Price is required"],
      minLength: [0, "Product Price Can't be Negative"],
    },
  },

  { timestamps: true }
);

const product = mongoose.model("product", productSchema);
module.exports = product;
