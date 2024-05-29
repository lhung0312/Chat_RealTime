const Room = require("../models/room");
const {
  createRoomService,
  getRoomService,
  deleteRoomService,
  updateRoomService,
} = require("../services/room.service");

const getRoomById = async (req, res) => {
  let data = req.params.id;
  let results = await getRoomService(data);
  return res.status(200).json({
    errorCode: 0,
    data: results,
  });
};

const postCreateRoom = async (req, res) => {
  let data = req.body;
  let results = await createRoomService(data);
  return res.status(200).json({
    errorCode: 0,
    data: results,
  });
};
const deleteRoomById = async (req, res) => {
  let data = req.params.id;
  let results = await deleteRoomService(data);
  return res.status(200).json({
    errorCode: 0,
    data: results,
  });
};
const putUpdateRoom = async (req, res) => {
  let data = req.body;
  let results = await updateRoomService(data);
  return res.status(200).json({
    errorCode: 0,
    data: results,
  });
};

module.exports = { getRoomById, postCreateRoom, deleteRoomById, putUpdateRoom };
