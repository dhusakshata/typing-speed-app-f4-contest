// App.js
import React, { useState } from 'react';
import TypingBox from './components/TypingBox';
import Navbar from './components/Navbar';
import Login from './components/User/login';
import Signup from './components/User/signup';
import './App.css';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleUserIconClick = () => {
    setShowLogin(true);
    setShowSignup(true);
  };

  return (
    <div className="App">
      <Navbar onUserIconClick={handleUserIconClick} />
      <TypingBox />
      {showLogin && <Login />}
      {showSignup && <Signup />}
    </div>
  );
}

export default App;
