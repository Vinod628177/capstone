import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header-container">
      <div className="title">Recipe Management</div>
      <div className="user-profile">
        <img src="user-profile-pic.jpg" alt="User Profile Pic" />
        <div className="dropdown">
          <button className="dropdown-button">▼</button>
          <div className="dropdown-content">
            <a href="#">Profile</a>
            <a href="#">Logout</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
