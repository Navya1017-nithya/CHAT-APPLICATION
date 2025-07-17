const socket = io();
let username = "";

while (!username || username.trim() === "") {
  username = prompt("Enter your username:");
}
socket.emit("new user", username);

const form = document.getElementById("form");
const input = document.getElementById("input");
const messages = document.getElementById("messages");
const users = document.getElementById("users");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const text = input.value.trim();
  if (text) {
    socket.emit("chat message", { user: username, text });
    input.value = "";
  }
});

socket.on("chat message", function (msg) {
  const item = document.createElement("li");
  item.innerHTML = `<strong>${msg.user}:</strong> ${msg.text}`;
  messages.appendChild(item);
  messages.scrollTop = messages.scrollHeight;
});

socket.on("update users", function (userList) {
  users.textContent = userList.join(", ");
});