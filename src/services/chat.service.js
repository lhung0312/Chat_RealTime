const { create } = require("../models/user");
const User = require("../models/user");
const createdAt = require("../ultils/createdAt");
const getUserList = require("../ultils/getUserList");
const { createUser, deleteUserService } = require("./user.service");

class SocketServices {
  connection(socket) {
    console.log("a user connected");

    socket.on("send queryString", async ({ room, username }) => {
      socket.join(room);
      let newUser = await createUser({ username: username, room: room });
      // const newUser = new User({
      //   username: username,
      //   room: room,
      // });
      // newUser
      //   .save()
      //   .then(() => {
      //     console.log("User saved to database");
      //   })
      //   .catch((err) => {
      //     console.error("Error saving user to database:", err);
      //   });

      //userList
      let userList = await getUserList(room);
      _io.emit("send userList", userList);
      // send lời chào
      socket.emit(
        "send msg from server to all client",
        `Chào mừng bạn đến với phòng ${room}`
      );
      socket.broadcast
        .to(room)
        .emit(
          "send msg from server to all client",
          createdAt(`${username} mới tham gia vào phòng`)
        );
      socket.on("chat message", (msgText) => {
        _io
          .to(room)
          .emit("send msg from server to all client", createdAt(msgText));
      });
      socket.on("share location", ({ latitude, longitude }) => {
        const urlLocation = `https://www.google.com/maps?q=${latitude},${longitude}`;
        _io.to(room).emit("share location", urlLocation);
      });
      socket.on("disconnect", async () => {
        console.log("user disconnected");
        await deleteUserService(newUser._id);
        // _io
        //   .to(room)
        //   .emit(
        //     "send msg from server to all client",
        //     createdAt(`User ${username} vừa rời khỏi phòng`)
        //   );
        let userList = await getUserList(room);
        _io.emit("send userList", userList);
      });
    });
  }
}
module.exports = new SocketServices();
