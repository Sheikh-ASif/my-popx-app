import React from 'react';

const CreateAccount = ({ onNext }) => {
  return (
    <div className="form-container">
      <h2>Create your PopX account</h2>
      <form>
        <input placeholder="Full Name" />
        <input placeholder="Phone number" />
        <input placeholder="Email address" />
        <input placeholder="Password" />
        <input placeholder="Company name" />
        <div>
          <label>Are you an Agency?</label>
          <label><input type="radio" name="agency" /> Yes</label>
          <label><input type="radio" name="agency" /> No</label>
        </div>
        <button type="button" onClick={onNext}>Create Account</button>
      </form>
    </div>
  );
};

export default CreateAccount;