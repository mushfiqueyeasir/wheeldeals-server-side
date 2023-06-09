const { ObjectId } = require("mongodb");
const orderSchema = require("../Models/order.schema");
const cartSchema = require("../Models/cart.schema");
const productSchema = require("../Models/productSchema");

exports.saveOrder = async (data) => {
  const query = { _id: ObjectId(data.cartItemID) };
  const cartItem = await cartSchema.find(query);
  if (cartItem.length > 0) {
    await cartSchema.findByIdAndDelete(data.cartItemID);
  }

  const productQuery = { _id: ObjectId(data.productID) };
  const productData = await productSchema.findOne(productQuery);
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
  const result = await orderSchema.find().sort({ $natural: -1 });
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
  const query = { _id: ObjectId(id) };
  const order = await orderSchema.findOne(query);
  const product = await productSchema.findOne({
    _id: ObjectId(order.productID),
  });
  console.log(product);
  if (product) {
    product.productStock = product.productStock + order.productQuantity;
    await productSchema.updateMany(
      {
        _id: ObjectId(order.productID),
      },
      product
    );
  }
  const result = await orderSchema.findByIdAndDelete(id);
  return result;
};
