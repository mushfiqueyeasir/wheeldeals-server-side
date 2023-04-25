const {
  saveCart,
  getCartItems,
  getSingleCartItem,
  updateCartItem,
  deleteCartItem,
} = require("../Services/cart.service");

exports.saveCartData = async (req, res, next) => {
  try {
    const result = await saveCart(req.body);

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

exports.getCartItemsByNumber = async (req, res, next) => {
  try {
    const result = await getCartItems(req.params.userPhoneNumber);
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

exports.getCartItemById = async (req, res, next) => {
  try {
    const result = await getSingleCartItem(req.params.id);
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

exports.updateCartItem = async (req, res, next) => {
  try {
    const result = await updateCartItem(req.params.id, req.body);
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

exports.deleteCartItem = async (req, res, next) => {
  try {
    const result = await deleteCartItem(req.params.id);
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
