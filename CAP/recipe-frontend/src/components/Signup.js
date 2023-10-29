import React, { useState } from 'react';
import './Login.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send a POST request to your backend for authentication
    const response = await fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // Signup successful
      // Redirect to the dashboard or set a user token
      console.log('Signup successful');
    } else {
      // Signup failed, display an error message
      console.error('Signup failed');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Signup</h2>
        <div className="form-group">
          <label>User Fullname</label>
          <input type="text" name="username" value={formData.username} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Username</label>
          <input type="text" name="username" value={formData.username} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
