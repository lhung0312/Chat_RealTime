const {
  createMessageService,
  getMessageService,
  deleteMessageService,
  updateMessageService,
} = require("../services/message.service");

const getMessagePaginate = async (req, res) => {
  let results = await getMessageService();
  return res.status(200).json({
    errorCode: 0,
    data: results,
  });
};
const postCreateMessage = async (req, res) => {
  let data = req.body;
  let results = await createMessageService(data);
  return res.status(201).json({
    errorCode: 0,
    data: results,
  });
};
const deleteMessageById = async (req, res) => {
  let data = req.params.id;
  let results = await deleteMessageService(data);
  return res.status(200).json({
    errorCode: 0,
    data: results,
  });
};
const putUpdateMessage = async (req, res) => {
  let data = req.body;
  let results = await updateMessageService(data);
  return res.status(200).json({
    errorCode: 0,
    data: results,
  });
};
module.exports = {
  getMessagePaginate,
  postCreateMessage,
  deleteMessageById,
  putUpdateMessage,
};
