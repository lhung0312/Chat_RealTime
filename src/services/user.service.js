const User = require("../models/user");

const createUser = async (data) => {
  let result = await User.create(data);

  return result;
};
module.exports = createUser;
