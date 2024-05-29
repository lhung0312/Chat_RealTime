const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  // _id- underscore id ≠ id(sql)
  room: String,
});
const Room = mongoose.model("room", roomSchema);

module.exports = Room;
