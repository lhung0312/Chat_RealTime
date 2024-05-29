const Room = require("../models/room");
const {
  getAllRoomService,
  createRoomService,
  getRoomByIdService,
  deleteRoomService,
  updateRoomService,
} = require("../services/room.service");

const getAllRoom = async () => {
  let results = await getAllRoomService();
  return res.status(200).json({
    errorCode: 0,
    data: results,
  });
};
const getRoomById = async (req, res) => {
  let data = req.params.id;
  let results = await getRoomByIdService(data);
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

module.exports = {
  getAllRoom,
  getRoomById,
  postCreateRoom,
  deleteRoomById,
  putUpdateRoom,
};
