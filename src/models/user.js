const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  // _id- underscore id ≠ id(sql)
  email: String,
  username: String,
  password: String,
  room: String,
});
const User = mongoose.model("user", userSchema);

module.exports = User;
