import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './signup.css';

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [voter, setVoter] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reenterPassword, setReenterPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState(null);

  async function submit(e) {
    e.preventDefault();

    // Simple email format validation using a regular expression
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      setError("Invalid email format.");
      return;
    }

    // Check if the name is not empty
    if (!name) {
      setError("Name is required.");
      return;
    }

    // Check if the mobile number is not empty
    if (!mobile) {
      setError("Mobile number is required.");
      return;
    }

    // Validate mobile number format
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(mobile)) {
      setError("Invalid mobile number format. Please enter a valid 10-digit number.");
      return;
    }

    // Check if OTP is entered
    if (!otp) {
      setError("OTP is required.");
      return;
    }

    // Validate OTP
    if (otp.length !== 6 || !/^\d+$/.test(otp)) {
      setError("Invalid OTP. Please enter a 6-digit numeric OTP.");
      return;
    }

    // Reset any previous error
    setError(null);

    try {
      // Implement your signup logic here, e.g., make an API request to create an account
      // If successful, navigate the user to the dashboard or the desired route.
      navigate('/login'); 
    } catch (e) {
      setError("Error during signup");
      console.log(e);
    }
  }

  return (
    <div>
      <div className="signup-container">
        <h1 className="signup-title">Sign Up</h1>
        <form onSubmit={submit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              placeholder="Enter the Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="voter">Voter Id:</label>
            <input
              type="text"
              id="voter"
              placeholder="It should be in ABC0123456"
              value={voter}
              onChange={(e) => setVoter(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter the Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile Number:</label>
            <input
              type="text"
              id="mobile"
              placeholder="Enter the Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="otp">OTP:</label>
            <input
              type="text"
              id="otp"
              placeholder="Enter the OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter the Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="reenterPassword">Re-enter Password:</label>
            <input
              type="password"
              id="reenterPassword"
              placeholder="Re-enter the Password"
              value={reenterPassword}
              onChange={(e) => setReenterPassword(e.target.value)}
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <div className="ac">
            <button type="submit" className="signup-button"> Create Account</button>
          </div>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>

      <footer className="footer">
        {/* Your footer content */}
      </footer>
    </div>
  );
}

export default Signup;
