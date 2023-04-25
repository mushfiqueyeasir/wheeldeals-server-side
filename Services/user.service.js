const userSchema = require("../Models/user.schema");
const ObjectId = require("mongodb").ObjectId;
const bcryptjs = require("bcryptjs");

exports.signupService = async (userInfo) => {
  const result = await userSchema.create(userInfo);
  return result;
};

exports.loginService = async (phoneNumber) => {
  const result = await userSchema.findOne({ phoneNumber });
  return result;
};

exports.getUsersService = async () => {
  const result = await userSchema.find();
  return result;
};

// -------------------------single user-------------------------
exports.getUserInfoSchema = async (id) => {
  const query = { _id: ObjectId(id) };
  const result = await userSchema.find(query);
  return result;
};

exports.updateUserInfoSchema = async (id, data) => {
  const query = { _id: ObjectId(id) };
  let { password, ...updatedData } = data;
  if (data.password) {
    const hashedPassword = bcryptjs.hashSync(data.password);
    updatedData.password = hashedPassword;
  }
  const result = await userSchema.updateMany(query, updatedData);
  return result;
};
exports.deleteUserInfoSchema = async (id) => {
  const query = { _id: ObjectId(id) };
  const result = await userSchema.deleteOne(query);
  return result;
};
