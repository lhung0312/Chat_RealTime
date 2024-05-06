const createdAt = require("../ultils/createdAt");

class SocketServices {
  connection(socket) {
    _io.on("connection", (socket) => {
      console.log("a user connected");

      socket.emit(
        "send msg from server to all client",
        "Chào mừng bạn đến với MyChat"
      );
      socket.broadcast.emit(
        "send msg from server to all client",
        createdAt("Có người mới tham gia vào MyChat")
      );

      socket.on("chat message", (msgText) => {
        _io.emit("send msg from server to all client", createdAt(msgText));
      });
      socket.on("share location", ({ latitude, longitude }) => {
        const urlLocation = `https://www.google.com/maps?q=${latitude},${longitude}`;
        _io.emit("share location", urlLocation);
      });

      socket.on("disconnect", () => {
        console.log("user disconnected");
      });
    });
  }
}
module.exports = new SocketServices();
