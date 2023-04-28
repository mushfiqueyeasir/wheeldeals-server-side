const { ObjectId } = require("mongodb");
const emailSchema = require("../Models/email.schema");

exports.saveEmail = async (data) => {
  const result = await emailSchema.create(data);
  return result;
};

exports.getAllEmail = async () => {
  const result = await emailSchema.find().sort({ $natural: -1 });
  return result;
};

exports.getSingleEmail = async (id) => {
  const query = { _id: ObjectId(id) };
  const result = await emailSchema.find(query);
  return result;
};

exports.updateEmail = async (id, data) => {
  const query = { _id: ObjectId(id) };
  const result = await emailSchema.updateMany(query, data);
  return result;
};
exports.deleteEmail = async (id) => {
  const result = await emailSchema.findByIdAndDelete(id);
  return result;
};

exports.patchEmail = async (id, patchData) => {
  const result = await emailSchema.updateOne({ _id: id }, patchData);
  return result;
};
