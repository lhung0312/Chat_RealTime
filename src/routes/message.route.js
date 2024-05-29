const express = require("express");
const {
  getMessagePaginate,
  postCreateMessage,
  deleteMessageById,
  putUpdateMessage,
} = require("../controllers/message.controller");

const route = express.Router();

route.get("/message", getMessagePaginate);
route.post("/message", postCreateMessage);
route.delete("/message/:id", deleteMessageById);
route.put("/message", putUpdateMessage);

module.exports = route;
