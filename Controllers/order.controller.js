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
      message: "Order Placed successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Order couldn't Placed",
      error: error.message,
    });
  }
};

exports.getAllOrders = async (req, res, next) => {
  try {
    const result = await getOrders();
    res.status(200).json({
      status: "success",
      message: "All Order Fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Order Item Couldn't Fetched",
      error: error.message,
    });
  }
};

exports.getUserOrders = async (req, res, next) => {
  try {
    const result = await getUserOrders(req.params.userPhoneNumber);
    res.status(200).json({
      status: "success",
      message: "User Order Item Fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "User Order Item Couldn't Fetched",
      error: error.message,
    });
  }
};

exports.getOrderById = async (req, res, next) => {
  try {
    const result = await getOrderById(req.params.id);
    res.status(200).json({
      status: "success",
      message: "Order Fetched Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Order couldn't Fetched",
      error: error.message,
    });
  }
};

exports.updateOrder = async (req, res, next) => {
  try {
    const result = await updateOrder(req.params.id, req.body);
    res.status(200).json({
      status: "success",
      message: "Order updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Order couldn't update",
      error: error.message,
    });
  }
};

exports.deleteOrderByID = async (req, res, next) => {
  try {
    const result = await deleteOrder(req.params.id);
    res.status(200).json({
      status: "success",
      message: "Order deleted successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Order couldn't deleted",
      error: error.message,
    });
  }
};
