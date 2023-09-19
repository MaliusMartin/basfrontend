import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS
import Navbar from '../components/Navbar';

const Dashboard = () => {
  return (
   
    <div className="App">
         <Navbar/>
    
      <div className="container-fluid mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <br></br>
            <div className="d-grid gap-3">
              <Link to="/workers" className="btn btn btn-outline-dark">ALL WORKERS</Link>
              <Link to="/addworker" className="btn btn btn-outline-dark">ADD WORKER</Link>
              <Link to="/attendance" className="btn btn btn-outline-dark">ATTENDANCE</Link>
             
            </div>
          </div>
        </div>
      </div>
        <br></br> <br></br> <br></br> <br></br> <br></br><br></br>
        <br></br> <br></br><br></br><br></br><br></br> <br></br>
        <br></br> <br></br><br></br><br></br>
      
      
    </div>
    
  );
};

export default Dashboard;
