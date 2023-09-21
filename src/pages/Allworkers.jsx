
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from '../components/Navbar';
import api from './api';

const Allworkers = () => {
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    // Fetch worker data from Django API endpoint
    api.get(`/employee/`)
      .then(response => {
        console.log(response)
        setWorkers(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <h2 className="mb-4">All Workers</h2>
      <div className="container">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">S/N</th>
                <th scope="col">First name</th>
                <th scope="col">Sur name</th>
                <th scope="col">Email</th>
                <th scope="col">Tel</th>
                <th scope="col">Monthly Salary</th>
                <th scope="col">Reporting</th>
                <th scope="col">Leaving</th>
              </tr>
            </thead>
            <tbody>
              {workers.map((worker, index) => (
                <tr key={worker.id}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <Link to={`/bio/${worker.id}`}>{worker.first_name}</Link>
                  </td>
                  <td>
                    <Link to={`/bio/${worker.id}`}>{worker.sur_name}</Link>
                  </td>
                  <td>
                    <a href={`mailto:${worker.email}`}>{worker.email}</a>
                  </td>
                  <td>{worker.mobile_number}</td>
                  <td>{worker.salary}</td>
                  <td>{worker.reporting_time}</td>
                  <td>{worker.leaving_time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Allworkers;
