const express = require("express");
const {
  getAllUser,
  getUserById,
  postCreateUser,
  updateUser,
  deleteUserById,
} = require("../controllers/user.controller");
const route = express.Router();

route.get("/user", getAllUser);
route.get("/user/:id", getUserById);
route.post("/user", postCreateUser);
route.put("/user", updateUser);
route.delete("/user", deleteUserById);

module.exports = route;
