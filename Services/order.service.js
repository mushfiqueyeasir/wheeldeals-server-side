const { ObjectId } = require("mongodb");
const orderSchema = require("../Models/order.schema");
const cartSchema = require("../Models/cart.schema");
const productSchema = require("../Models/productSchema");

exports.saveOrder = async (data) => {
  const query = { _id: ObjectId(data.cartItemID) };
  const cartItem = await cartSchema.find(query);
  if (cartItem) {
    await cartSchema.findByIdAndDelete(data.cartItemID);
  }
  const productQuery = { _id: ObjectId(id) };
  const productData = await productSchema.find(productQuery);
  productData.productStock = productData.productStock - data.productQuantity;
  await productSchema.updateMany(productQuery, productData);
  const result = await orderSchema.create(data);
  return result;
};

exports.getUserOrders = async (userPhoneNumber) => {
  const query = { userPhoneNumber: userPhoneNumber };
  const result = await orderSchema.find(query).sort({ $natural: -1 });
  return result;
};
exports.getOrders = async () => {
  const result = await orderSchema.find({}).sort({ $natural: -1 });
  return result;
};

exports.getOrderById = async (id) => {
  const query = { _id: ObjectId(id) };
  const result = await orderSchema.find(query);
  return result;
};

exports.updateOrder = async (id, data) => {
  const query = { _id: ObjectId(id) };
  const result = await orderSchema.updateMany(query, data);

  return result;
};
exports.deleteOrder = async (id) => {
  const result = await orderSchema.findByIdAndDelete(id);
  return result;
};
