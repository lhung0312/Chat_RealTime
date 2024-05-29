const Room = require("../models/room");

const createRoomService = async (data) => {
  let results = await Room.create(data);
  return results;
};
const getRoomService = async (data) => {
  console.log(data);
  let results = await Room.findById(data);
  return results;
};
const deleteRoomService = async (data) => {
  let results = await Room.deleteOne({ _id: data });
  return results;
};
const updateRoomService = async (data) => {
  let results = await Room.updateOne({ _id: data.id }, { room: data.room });

  return results;
};
module.exports = {
  createRoomService,
  getRoomService,
  deleteRoomService,
  updateRoomService,
};
