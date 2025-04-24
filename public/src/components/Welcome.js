import React from 'react';

const Welcome = ({ onNext }) => {
  return (
    <div className="form-container">
      <h2>Welcome to PopX</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button onClick={onNext}>Create Account</button>
      <button onClick={onNext}>Already Registered? Login</button>
    </div>
  );
};

export default Welcome;