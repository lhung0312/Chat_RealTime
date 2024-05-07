const User = require("../models/user");

const createUser = async (data) => {
  let result = await User.create(data);
  return result;
};
const deleteUserService = async (data) => {
  console.log(data);
  let result = await User.deleteOne({ _id: data });
  return result;
};
module.exports = { createUser, deleteUserService };
