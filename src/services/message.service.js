const Message = require("../models/message");

const createMessageService = async (data) => {
  let results = await Message.create(data);
  return results;
};

const getMessageService = async (data) => {
  console.log(data);
  let results = await Message.findById(data);
  return results;
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
  createMessageService,
  getMessageService,
  deleteMessageService,
  updateMessageService,
};
