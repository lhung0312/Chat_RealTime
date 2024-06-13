const User = require("../models/user");

const getAllUserService = async () => {
  return await User.find();
};
const getUserByIdService = async (_id) => {
  return await User.find({ _id });
};
const createUserService = async (data) => {
  let result = await User.create({ ...data });
  return result;
};
const updateUserService = async (_id, data) => {
  return await User.updateOne({ _id }, { ...data });
};
const deleteUserService = async (data) => {
  let result = await User.deleteOne({ _id: data });
  return result;
};
module.exports = {
  getAllUserService,
  getUserByIdService,
  createUserService,
  updateUserService,
  deleteUserService,
};
