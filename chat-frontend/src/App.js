import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './App.css';

const socket = io('http://localhost:5000'); // Connect to the backend server

function App() {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [activeUsers, setActiveUsers] = useState([]);

  useEffect(() => {
    // Listen for incoming messages
    socket.on('receiveMessage', (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    // Listen for active users update
    socket.on('activeUsers', (users) => {
      setActiveUsers(users);
    });

    return () => {
      socket.off('receiveMessage');
      socket.off('activeUsers');
    };
  }, []);

  const handleJoin = () => {
    if (username.trim()) {
      socket.emit('join', username);
    }
  };

  const handleMessageSend = () => {
    if (message.trim()) {
      socket.emit('sendMessage', { sender: username, message });
      setMessage('');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
     <div>
     <center>
     <div className="title-box">
     <img style={{margin: '10px'}} width="48" height="48" src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-chat-communication-media-flaticons-flat-flat-icons-4.png" alt="external-chat-communication-media-flaticons-flat-flat-icons-4"/>
     <h1 style={{ color: 'gold', webkitTextStroke: '1px gold', letterSpacing: '2px' }}>Byte</h1> 
     <h1 style={{ color: 'black', webkitTextStroke: '1px black', letterSpacing: '2px' }}>Talk </h1> 
     <h1 style={{ color: 'silver', webkitTextStroke: '1px silver', letterSpacing: '1px' }}> - Realtime Chat</h1> 
     </div>
     </center>
     </div>

      {/* Join Section */}
      {!username && (
        <div className='message-box'>
          <input className='message-input'
            type="text"
            placeholder="Type your username here..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button className='send' onClick={handleJoin}>Join Chat</button>
        </div>
      )}

      {/* Chat Section */}
      {username && (
        <div>
          <h3 className='welcome'>Welcome, {username}!</h3>

          {/* Active Users List */}
          <div>
          
            <ul>
              {activeUsers.map((user, index) => (
                <li key={index}>{user}</li>
              ))}
            </ul>
          </div>

          {/* Messages Display */}
          <div className='chat-container' style={{ height: '300px', overflowY: 'scroll', padding: '10px' }}>
            {messages.map((msg, index) => (
              <div key={index}>
                <strong>{msg.sender}: </strong>
                {msg.message}
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className='message-box'>
            <input className='message-input'
              type="text"
              placeholder="Let’s chat! 😊"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <br/>
            <button className='send' onClick={handleMessageSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;