import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import api from './api'; // Import your axios instance


const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [registrationError, setRegistrationError] = useState(null);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password === confirmPassword) {
      try {
        const response = await api.post('/admin-user/', {
          email: email,
          password: password,
        });

        console.log('Registration successful:', response.data);
        // Redirect to Login after successful registration
        navigate('/login'); // Use navigate instead of history.push
      } catch (error) {
        console.error('Error during registration:', error);
        setRegistrationError('Registration failed. Please try again.');
      }
    } else {
      setPasswordsMatch(false);
    }
  };
  

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">BIOMETRIC ATTENDANCE SYSTEM</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={`form-control ${passwordsMatch ? '' : 'is-invalid'}`}
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    required
                  />
                  {!passwordsMatch && <div className="invalid-feedback">Passwords do not match.</div>}
                </div>
                {registrationError && <div className="alert alert-danger">{registrationError}</div>}
                <button type="submit" className="btn  btn-outline-dark btn-block">
                  Register
                </button>
              </form>
              <div className="mt-3">
                <Link to="/login" className="btn btn-outline-dark">
                  Back to Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default RegisterPage;
