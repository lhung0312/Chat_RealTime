const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  // _id- underscore id ≠ id(sql)
  content: String,
});
const Message = mongoose.model("message", messageSchema);

module.exports = Message;
