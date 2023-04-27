const {
  saveOrder,
  getOrders,
  getUserOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
} = require("../Services/order.service");

exports.saveOrderData = async (req, res, next) => {
  try {
    const result = await saveOrder(req.body);

    res.status(200).json({
      status: "success",
      message: "Product inserted in cart successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Product couldn't insert in  cart",
      error: error.message,
    });
  }
};

exports.getAllOrders = async (req, res, next) => {
  try {
    const result = await getOrders();
    res.status(200).json({
      status: "success",
      message: "Cart Item Fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Cart Item Couldn't Fetched",
      error: error.message,
    });
  }
};

exports.getUserOrders = async (req, res, next) => {
  try {
    const result = await getUserOrders(req.params.userPhoneNumber);
    res.status(200).json({
      status: "success",
      message: "Cart Item Fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Cart Item Couldn't Fetched",
      error: error.message,
    });
  }
};

exports.getOrderById = async (req, res, next) => {
  try {
    const result = await getOrderById(req.params.id);
    res.status(200).json({
      status: "success",
      message: "Product Fetched Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Product couldn't Fetched",
      error: error.message,
    });
  }
};

exports.updateOrder = async (req, res, next) => {
  try {
    const result = await updateOrder(req.params.id, req.body);
    res.status(200).json({
      status: "success",
      message: "Product updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Product couldn't update",
      error: error.message,
    });
  }
};

exports.deleteOrderByID = async (req, res, next) => {
  try {
    const result = await deleteOrder(req.params.id);
    res.status(200).json({
      status: "success",
      message: "Product deleted successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Product couldn't deleted",
      error: error.message,
    });
  }
};
