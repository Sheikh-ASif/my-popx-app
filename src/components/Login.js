import React from 'react';

const Login = ({ onNext }) => {
  return (
    <div className="form-container">
      <h2>Signin to your PopX account</h2>
      <form>
        <input placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <button type="button" onClick={onNext}>Login</button>
      </form>
    </div>
  );
};

export default Login;