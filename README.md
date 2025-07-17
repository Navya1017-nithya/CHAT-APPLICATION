# CHAT-APPLICATION


COMPANY : CODTECH IT SOLUTIONS

NAME : R NAVYA

INTERN ID : CT08DN1419

DOMAIN : FULL STACK WEB DEVELOPMENT

DURATION : 8 WEEKS

MENTOR : NEELA SANTOSH


# Real-Time Chat Application


This project is a real-time web-based chat application built using Node.js, Express, and Socket.IO. 

It allows multiple users to join a shared chat room, send messages to each other in real time, and view a list of currently online users.

The application runs on a simple and intuitive web interface, making it easy for users to communicate seamlessly.

 # Features
 
Real-Time Messaging – Messages are instantly sent and received using WebSockets.

Live User List – Displays who is currently online in real time.

Simple UI – Clean and minimal design using plain HTML/CSS.

Auto Scroll – Chat window always scrolls to the newest message.

Prompted Login – Users enter their name before joining the chat.



# How It Works

When a user opens the application, they are prompted to enter a username.

That username is sent to the server using Socket.IO, which keeps track of all online users.

Messages typed by users are emitted to the server and then broadcast to all connected clients.

All clients update their message list and user list in real time without needing to reload the page.

# index.html

This is the main interface of the application. It contains:

A chat window for sending and receiving messages

A display of online users

Input field and send button

# script.js

Handles all client-side Socket.IO logic including:

Emitting the user's name and messages

Listening for incoming messages

Updating the user list dynamically

# server.js

Sets up an Express server and attaches Socket.IO. It:

Listens for connections and disconnections

Broadcasts chat messages and updated user lists

Serves static files from the public/ directory

# package.json

Defines project dependencies such as:

express for the backend server

socket.io for real-time communication

# Output 

<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/727ec4ad-21d4-4e76-b611-b26accc7dd46" />

