import React, { useState } from 'react';
import TypingBox from './components/TypingBox';
import Navbar from './components/Navbar';
import Login from './components/User/login';
import Signup from './components/User/signup';
import './App.css';

function App() {
  const [showWords, setShowWords] = useState(false);

  const handleUserIconClick = () => {
    setShowWords(true);
  };

  return (
    <div className="App">
      <Navbar onUserIconClick={handleUserIconClick} />
      <TypingBox />
      {showWords && (
        <div>
          <span onClick={() => setShowWords(false)}>Login</span>
          <span onClick={() => setShowWords(false)}>Signup</span>
        </div>
      )}
      <Login />
      <Signup />
    </div>
  );
}

export default App;