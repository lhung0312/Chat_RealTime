const User = require("../models/user");

const getUserList = async (room) => {
  let result = await User.find({ room: room });
  return result;
};

module.exports = getUserList;