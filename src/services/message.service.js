const Message = require("../models/message");

const getAllRoomService = async () => {
  return await Message.find();
};

const createMessageService = async (data) => {
  let results = await Message.create(data);
  return results;
};

const getMessageService = async () => {
  return await Message.find();
};

const deleteMessageService = async (data) => {
  let results = await Message.deleteOne({ _id: data });
  return results;
};

const updateMessageService = async (data) => {
  let results = await Message.updateOne(
    { _id: data.id },
    { content: data.content }
  );
  return results;
};

module.exports = {
  getAllRoomService,
  createMessageService,
  getMessageService,
  deleteMessageService,
  updateMessageService,
};
