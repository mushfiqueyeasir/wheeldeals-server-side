const { ObjectId } = require("mongodb");
const cartSchema = require("../Models/cart.schema.js");

exports.saveCart = async (data) => {
  const result = await cartSchema.create(data);
  return result;
};

exports.getCartItems = async (userPhoneNumber) => {
  const query = { userPhoneNumber: userPhoneNumber };
  const result = await cartSchema.find(query).sort({ $natural: -1 });
  return result;
};

exports.getSingleCartItem = async (id) => {
  const query = { _id: ObjectId(id) };
  const result = await cartSchema.find(query);
  return result;
};

exports.updateCartItem = async (id, data) => {
  const query = { _id: ObjectId(id) };
  const result = await cartSchema.updateMany(query, data);

  return result;
};
exports.deleteCartItem = async (id) => {
  const result = await cartSchema.findByIdAndDelete(id);
  return result;
};
