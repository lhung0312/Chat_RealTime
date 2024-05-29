const express = require("express");
const {
  getRoomById,
  postCreateRoom,
  deleteRoomById,
  putUpdateRoom,
} = require("../controllers/room.controller");
const route = express.Router();

route.get("/room/:id", getRoomById);
route.post("/room", postCreateRoom);
route.delete("/room/:id", deleteRoomById);
route.put("/room", putUpdateRoom);

module.exports = route;
