import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom'; // Import useHistory
import 'bootstrap/dist/css/bootstrap.min.css';
import api from './api';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null);
  const navigate = useNavigate(); // Initialize useHistory

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await api.post('/login/', {
        email: email,
        password: password,
      });

      console.log('Login successful:', response.data);
      // Redirect to Dashboard after successful login
      navigate.push('/dashboard');
    } catch (error) {
      console.error('Error during login:', error);
      // Handle the login error here and set an error state if needed
      setLoginError('Login failed. Please check your credentials.');
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
                {loginError && <div className="alert alert-danger">{loginError}</div>}
                <button type="submit" className="btn btn-outline-dark btn-block">
                  Login
                </button>
              </form>
              <div className="mt-3">
                {/* Link to Registration Page */}
                <Link to="/register" className="btn btn-secondary">
                  Register
                </Link>
                <br></br>
                <br></br>
                {/* Link to Reset Password Page */}
                <Link to="/resetpassword" className="btn btn-secondary">
                  Reset Password
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default LoginPage;
