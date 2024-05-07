const { createUser, deleteUserService } = require("../services/user.service");

const postCreateUser = async (req, res) => {
  let result = await createUser(req.body);
  return res.status(200).json({
    errorCode: 0,
    data: result,
  });
};
const deleteUser = async (req, res) => {
  let result = await deleteUserService(req.query.id);
  return res.status(200).json({
    errorCode: 0,
    data: result,
  });
};
module.exports = { postCreateUser, deleteUser };
