const express = require("express");
const {
  postCreateUser,
  deleteUser,
} = require("../controllers/user.controller");
const route = express.Router();

route.post("/user", postCreateUser);
route.delete("/user", deleteUser);

module.exports = route;
