import React from 'react';
import usericon from './images/th.jpg';

const Navbar = ({ onUserIconClick }) => {
  return (
    <div className="navsection">
      <h1>TypeCat</h1>
      <img src={usericon} alt="user" onClick={onUserIconClick} />
    </div>
  );
};

export default Navbar;