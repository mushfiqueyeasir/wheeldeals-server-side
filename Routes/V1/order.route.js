//this is Cart route
const express = require("express");
const orderController = require("../../Controllers/order.controller");
const verifyToken = require("../../middleware/tokenVerification");

const router = express.Router();

router
  .route("/")
  .post(verifyToken, orderController.saveOrderData)
  .get(orderController.getAllOrders);
router
  .route("/:userPhoneNumber")
  .get(verifyToken, orderController.getUserOrders);

router
  .route("/unique/:id")
  .get(orderController.getOrderById)
  .put(verifyToken, orderController.updateOrder)
  .delete(verifyToken, orderController.deleteOrderByID);

module.exports = router;
