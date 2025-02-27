const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

// Initialize Express app
const app = express();
app.use(cors());

// Create HTTP server
const server = http.createServer(app);

// Initialize Socket.IO
const io = new Server(server, {
  cors: {
    origin: "*", // Allow all origins (for development)
    methods: ["GET", "POST"],
  },
});

// Store active users
const activeUsers = new Set();

// Handle Socket.IO connections
io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  // Listen for user joining
  socket.on('join', (username) => {
    socket.username = username;
    activeUsers.add(username);
    io.emit('activeUsers', Array.from(activeUsers)); // Broadcast active users
  });

  // Listen for new messages
  socket.on('sendMessage', ({ sender, message }) => {
    io.emit('receiveMessage', { sender, message }); // Broadcast message to all clients
  });

  // Handle user disconnection
  socket.on('disconnect', () => {
    if (socket.username) {
      activeUsers.delete(socket.username);
      io.emit('activeUsers', Array.from(activeUsers)); // Update active users list
    }
    console.log(`User disconnected: ${socket.id}`);
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
const HOST = '0.0.0.0'; // Listen on all network interfaces
server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});