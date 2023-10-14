// Navbar.js
import React, { useState } from 'react';
import usericon from './images/th.jpg';

const Navbar = ({ onUserIconClick }) => {
  const [showWords, setShowWords] = useState(true);

  const showLogin = () => {
    setShowWords(false);
  };

  const showSignup = () => {
    setShowWords(false);
  };

  return (
    <div className="navsection">
      <h1>TypeCat</h1>
      {showWords && (
        <div>
          <span onClick={showLogin}>Login</span>
          <span onClick={showSignup}>Signup</span>
        </div>
      )}
      <img src={usericon} alt="user" onClick={onUserIconClick} />
    </div>
  );
};

export default Navbar;
