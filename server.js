const express = require('express');  
const http = require('http');  
const { Server } = require('socket.io');  

const app = express();  
const server = http.createServer(app);  
const io = new Server(server);  

app.use(express.static('public'));  

let users = {};  

io.on('connection', socket => {  
  console.log("New connection:", socket.id);  

  socket.on("new user", username => {  
    users[socket.id] = username;  
    io.emit("update users", Object.values(users));  
  });  

  socket.on("chat message", data => {  
    io.emit("chat message", data);  
  });  

  socket.on("disconnect", () => {  
    delete users[socket.id];  
    io.emit("update users", Object.values(users));  
    console.log("Disconnected:", socket.id);  
  });  
});  

server.listen(3000, () => {  
  console.log("Server running on http://localhost:3000");  
});  