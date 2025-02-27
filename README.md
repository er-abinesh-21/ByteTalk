---

# Project Title : ByteTalk - Realtime Chat Application

## Project Description :

This repository contains a **Real-Time Chat Application** built using **Socket.IO** for the backend and **React** for the frontend. The project demonstrates a functional chat system with live messaging capabilities, offering users a seamless and interactive communication experience. This app serves as a foundational example of real-time web applications and can be extended for various use cases, such as team collaboration tools, social networking platforms, or customer support chat systems.

---

#### Key Features:

1. **Real-Time Messaging:**
   - Instant message delivery using **Socket.IO**, ensuring minimal latency.
   - Bi-directional communication between clients and the server.

2. **Responsive User Interface:**
   - A sleek and user-friendly chat interface built with **React**.
   - Fully responsive design to work smoothly on desktops, tablets, and mobile devices.

3. **Room-Based Chatting:**
   - Support for multiple chat rooms to enable group-specific conversations.
   - Users can join specific rooms and engage in focused discussions.

4. **Message Persistence:**
   - Chat messages are temporarily stored during the session (can be extended to include database integration for permanent storage).

5. **User-Friendly Notifications:**
   - Notifications for new messages in active or background chat rooms.
   - System feedback for user actions like joining or leaving a room.

6. **Scalable Architecture:**
   - Built with a modular structure, making it easy to add new features and scale up.

---

#### Technologies Used:

- **Frontend:**
  - **React.js**: To build the interactive and dynamic user interface.
  - **CSS**: For styling the application, ensuring a clean and responsive design.

- **Backend:**
  - **Node.js**: To handle server-side logic efficiently.
  - **Socket.IO**: For real-time, event-driven communication between the client and server.
    
---

#### Installation and Setup:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/er-abinesh-21/Realtime-Chat-App.git
   cd Realtime-Chat-App
   ```

2. **Install dependencies for the backend and frontend:**
   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

3. **Start the backend server:**
   ```bash
   cd backend
   npm start
   ```

4. **Start the frontend development server:**
   ```bash
   cd ../frontend
   npm start
   ```

5. **Access the app in your browser:**
   - Navigate to `http://localhost:3000` to view the chat application.

---

#### Usage:

- Launch the app and log in with a username to join a chat room.
- Create or join an existing chat room.
- Start chatting with real-time message updates.

---

## 📸 Screenshots

1. Home Page  
   ![Home](https://github.com/user-attachments/assets/7750062a-ed42-44e6-806c-2a078bea39e8)*

2. Search Results  
   ![User 1](https://github.com/user-attachments/assets/443c2f40-e744-4c16-931b-9fe031a79f48)*

   ![User 2](https://github.com/user-attachments/assets/faa2c987-d106-4045-8fa1-419652577f38)*

---

#### Future Enhancements:

- **Authentication System**: Add user authentication (e.g., JWT, OAuth).
- **Message History**: Implement a database (e.g., MongoDB) to store and retrieve chat histories.
- **Media Support**: Enable users to share images, files, and emojis in the chat.
- **Admin Features**: Add room moderation tools for managing users and content.

---

#### Contributing:

Contributions are welcome! Feel free to submit issues and pull requests to enhance the project. Please follow the standard Git workflow.
