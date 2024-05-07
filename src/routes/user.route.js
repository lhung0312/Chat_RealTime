const express = require("express");
const postCreateUser = require("../controllers/user.controller");
const route = express.Router();

route.post("/user", postCreateUser);

module.exports = route;
