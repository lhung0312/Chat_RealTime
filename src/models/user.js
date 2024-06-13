const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    // _id- underscore id ≠ id(sql)
    email: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    room: [{ type: mongoose.Schema.Types.ObjectId, ref: "room" }],
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("user", userSchema);

module.exports = User;
