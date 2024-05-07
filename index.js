const express = require("express");
const { createServer } = require("node:http");
const { join } = require("node:path");
const { Server } = require("socket.io");
const SocketServices = require("./src/services/chat.service");
const connection = require("./src/config/database");

const app = express();
const server = createServer(app);
const io = new Server(server);

require("dotenv").config();
const port = process.env.PORT || 3000;

const path = require("path");
// cách 1 nếu có 1 file html
// app.use("/", express.static(path.join(__dirname, "../public")));
// cách 2
app.use(express.static(path.join(__dirname, "./public")));

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "./public/homePage.html"));
});
app.get("/roomChat", (req, res) => {
  res.sendFile(join(__dirname, "./public/roomChat.html"));
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("./src/routes/user.route"));

// can chu y toi khai niem global duoc gioi thieu trong video
global.__basedir = __dirname;
global._io = io; // cach 2
global._io.on("connection", SocketServices.connection);

connection();

server.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
