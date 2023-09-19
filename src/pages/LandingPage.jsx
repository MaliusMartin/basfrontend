import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const LandingPage = () => {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
      
        <h2>BIOMETRIC ATTENDANCE SYSTEM</h2>
        <div className="container">
            
          <Link to="/login" className="btn btn-outline-dark">Login</Link>
          <br /><br />
          <Link to="/register" className="btn btn-outline-dark">Register</Link>
        </div>
      
      <br></br> <br></br> <br></br> <br></br> <br></br><br></br>
        <br></br> <br></br><br></br><br></br><br></br> <br></br>
        <br></br> <br></br><br></br><br></br>
      
    </div>
  );
}

export default LandingPage;
