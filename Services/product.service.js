const { ObjectId } = require("mongodb");
const productSchema = require("../Models/productSchema");

exports.saveProduct = async (data) => {
  const result = await productSchema.create(data);
  return result;
};

exports.getProduct = async () => {
  const result = await productSchema.find({}).sort({ $natural: -1 });
  return result;
};

exports.getSingleProduct = async (id) => {
  const query = { _id: ObjectId(id) };
  const result = await productSchema.find(query);
  return result;
};

exports.updateSingleProduct = async (id, data) => {
  const query = { _id: ObjectId(id) };
  const result = await productSchema.updateMany(query, data);

  return result;
};
exports.deleteSingleProduct = async (id) => {
  const result = await productSchema.findByIdAndDelete(id);
  return result;
};
