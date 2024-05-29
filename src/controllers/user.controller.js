const {
  getAllUserService,
  getUserByIdService,
  createUserService,
  updateUserService,
  deleteUserService,
} = require("../services/user.service");

const getAllUser = async (req, res) => {
  let result = await getAllUserService(req.body);
  return res.status(200).json({
    errorCode: 0,
    data: result,
  });
};

const getUserById = async (req, res) => {
  let result = await getUserByIdService(req.params.id);
  return res.status(200).json({
    errorCode: 0,
    data: result,
  });
};

const postCreateUser = async (req, res) => {
  let result = await createUserService(req.body);
  return res.status(201).json({
    errorCode: 0,
    data: result,
  });
};
const updateUser = async (req, res) => {
  const _id = req.body.id;
  const data = req.body;
  let result = await updateUserService(_id, data);
  return res.status(200).json({
    errorCode: 0,
    data: result,
  });
};
const deleteUserById = async (req, res) => {
  let result = await deleteUserService(req.query.id);
  return res.status(200).json({
    errorCode: 0,
    data: result,
  });
};
module.exports = {
  postCreateUser,
  deleteUserById,
  getAllUser,
  getUserById,
  updateUser,
};
