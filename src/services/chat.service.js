const createdAt = require("../ultils/createdAt");

class SocketServices {
  connection(socket) {
    _io.on("connection", (socket) => {
      console.log("a user connected");

      socket.on("send queryString", ({ room, username }) => {
        socket.join(room);
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
      });

      socket.on("disconnect", () => {
        console.log("user disconnected");
      });
    });
  }
}
module.exports = new SocketServices();
