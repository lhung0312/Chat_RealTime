const express = require("express");
const {
  getMessageById,
  postCreateMessage,
  deleteMessageById,
  putUpdateMessage,
} = require("../controllers/message.controller");

const route = express.Router();

route.get("/message/:id", getMessageById);
route.post("/message", postCreateMessage);
route.delete("/message/:id", deleteMessageById);
route.put("/message", putUpdateMessage);

module.exports = route;
