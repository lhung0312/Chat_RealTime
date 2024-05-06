const socket = io();
const messages = document.getElementById("messages");
const form = document.getElementById("form");
const input = document.getElementById("input");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value) {
    socket.emit("chat message", input.value);
    input.value = "";
  }
});
document.getElementById("location").addEventListener("click", () => {
  if (!navigator.geolocation) {
    return "Trình duyệt web hiện tại không hỗ trợ vị trí";
  }
  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;
    socket.emit("share location", { latitude, longitude });
    socket.on("share location", (urlLocation) => {
      console.log("location: ", urlLocation);
    });
  });
});

//dù server io nhưng client vẫn socket
socket.on("send msg from server to all client", (msg) => {
  console.log(msg);
});
