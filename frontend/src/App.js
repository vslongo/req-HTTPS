import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleGetRequest = async () => {
    try {
      const res = await axios.get('http://localhost:5000/');
      setResponse(res.data);
    } catch (error) {
      setResponse('Error: ' + error.message);
    }
  };

  const handlePostRequest = async () => {
    try {
      const res = await axios.post('http://localhost:5000/', { message });
      setResponse(res.data);
    } catch (error) {
      setResponse('Error: ' + error.message);
    }
  };

  return (
    <div>
      <h1>HTTP Example</h1>
      <button onClick={handleGetRequest}>Send GET Request</button>
      <button onClick={handlePostRequest}>Send POST Request</button>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter message for POST request"
      />
      <div>
        <h2>Response:</h2>
        <p>{response}</p>
      </div>
    </div>
  );
}

export default App;
