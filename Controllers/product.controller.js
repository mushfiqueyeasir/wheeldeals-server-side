const {
  saveProduct,
  getProduct,
  getSingleProduct,
  updateSingleProduct,
  deleteSingleProduct,
} = require("../Services/product.service");

exports.saveProductData = async (req, res, next) => {
  try {
    const result = await saveProduct(req.body);

    res.status(200).json({
      status: "success",
      message: "Product inserted successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Product couldn't insert",
      error: error.message,
    });
  }
};

exports.getAllProduct = async (req, res, next) => {
  try {
    const result = await getProduct();
    res.status(200).json({
      status: "success",
      message: "All Product Fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "All Product Couldn't Fetched",
      error: error.message,
    });
  }
};

exports.getProductByID = async (req, res, next) => {
  try {
    const result = await getSingleProduct(req.params.id);
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

exports.updateProduct = async (req, res, next) => {
  try {
    const result = await updateSingleProduct(req.params.id, req.body);
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

exports.deleteProduct = async (req, res, next) => {
  try {
    const result = await deleteSingleProduct(req.params.id);
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
