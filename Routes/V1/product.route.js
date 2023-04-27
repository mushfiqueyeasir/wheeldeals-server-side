//this is Product route
const express = require("express");
const productController = require("../../Controllers/product.controller");
const verifyToken = require("../../middleware/tokenVerification");
const authorization = require("../../middleware/authorization");

const router = express.Router();

router
  .get("/", productController.getAllProduct)
  .post("/", verifyToken, productController.saveProductData);

router
  .route("/:id")
  .get(productController.getProductByID)
  .put(verifyToken, productController.updateProduct)
  .delete(verifyToken, productController.deleteProduct);

module.exports = router;
