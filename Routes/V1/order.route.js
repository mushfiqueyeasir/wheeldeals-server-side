//this is Cart route
const express = require("express");
const orderController = require("../../Controllers/order.controller");
const verifyToken = require("../../middleware/tokenVerification");

const router = express.Router();

router
  .post("/", verifyToken, orderController.saveOrderData)
  .get(verifyToken, orderController.getAllOrders);
router
  .route("/:userPhoneNumber")
  .get(verifyToken, orderController.getUserOrders);

router
  .route("/:id")
  .get(orderController.getOrderById)
  .put(verifyToken, orderController.updateOrder)
  .delete(verifyToken, orderController.deleteOrderByID);

module.exports = router;
