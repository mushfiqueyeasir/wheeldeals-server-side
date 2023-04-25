//this is Cart route
const express = require("express");
const cartController = require("../../Controllers/cart.controller");
const verifyToken = require("../../middleware/tokenVerification");

const router = express.Router();

router.post("/", verifyToken, cartController.saveCartData);
router
  .route("/:userPhoneNumber")
  .get(verifyToken, cartController.getCartItemsByNumber);

router
  .route("/:id")
  .get(cartController.getCartItemById)
  .put(verifyToken, cartController.updateCartItem)
  .delete(verifyToken, cartController.deleteCartItem);

module.exports = router;
