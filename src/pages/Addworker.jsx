// ... (other imports)
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import api from './api';

const Addworker = () => {
    const [formData, setFormData] = useState({
      first_name: '',
      middle_name: '',
      sur_name: '',
      mobile_number: '',
      email: '',
      reporting_time: '',
      leaving_time: '',
      salary: '',
      department: null,
      position: null,
    });
  
    const [departments, setDepartments] = useState([]);
    const [positions, setPositions] = useState([]);
    const navigate = useNavigate();
  
    useEffect(() => {
      // Fetch list of departments
      api.get('/departments/')
        .then((response) => setDepartments(response.data))
        .catch((error) => {
          console.error('Error fetching departments:', error);
        });
  
      // Fetch list of positions
      api.get('/positions/')
        .then((response) => setPositions(response.data))
        .catch((error) => {
          console.error('Error fetching positions:', error);
        });
    }, []);
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      console.log(`Name: ${name}, Value: ${value}`);
      // Handle department and position separately
      if (name === 'department' || name === 'position') {
        // Convert the value to an integer
        setFormData((prevData) => ({
          ...prevData,
          [name]: parseInt(value, 10),
        }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      // Post form data to create a new worker
      api.post(`/employee/`, formData)
        .then((response) => {
          console.log('Employee added successfully:', response.data);
          // Optionally, you can redirect to another page after successful submission
          // window.history.redirect(`${profile.current}`);
          navigate('/workers');
        })
        .catch((error) => {
          console.error('Error adding employee:', error);
        });
    };
  
    return (
        <div className="App">
        <Navbar />
        <h2>Add New Worker</h2>
        <div className="container mt-5">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-4">
                <div className="mb-3">
                  <label htmlFor="first_name" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="form-control"
                    id="first_name"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label htmlFor="middle_name" className="form-label">
                    Middle Name
                  </label>
                  <input
                    type="text"
                    placeholder="Middle Name"
                    className="form-control"
                    id="middle_name"
                    name="middle_name"
                    value={formData.middle_name}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label htmlFor="sur_name" className="form-label">
                    Surname
                  </label>
                  <input
                    type="text"
                    placeholder="Surname"
                    className="form-control"
                    id="sur_name"
                    name="sur_name"
                    value={formData.sur_name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="mb-3">
                  <label htmlFor="Phone Number" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="phone"
                    placeholder="Phone Number"
                    className="form-control"
                    id="mobile_number"
                    name="mobile_number"
                    value={formData.mobile_number}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label htmlFor="Salary" className="form-label">
                    Salary
                  </label>
                  <input
                    type="number"
                    placeholder="Salary"
                    className="form-control"
                    id="salary"
                    name="salary"
                    value={formData.salary}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="mb-3">
                  <label htmlFor="reporting_time" className="form-label">
                    Reporting Time
                  </label>
                  <input
                    type="time"
                    placeholder="Reporting Time"
                    className="form-control"
                    id="reporting_time"
                    name="reporting_time"
                    value={formData.reporting_time}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label htmlFor="leaving_time" className="form-label">
                    Leaving Time
                  </label>
                  <input
                    type="time"
                    placeholder="Leaving Time"
                    className="form-control"
                    id="leaving_time"
                    name="leaving_time"
                    value={formData.leaving_time}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
  
      {/* <div className="col-md-4">
        <div className="mb-3">
          <label htmlFor="department" className="form-label">
            Department
          </label>
  
          <select
            className="form-select"
            id="department"
            name="department"
            value={formData.department}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Department</option>
            {departments.map((dept) => (
              <option key={dept.id} value={dept.id}>
                {dept.department}
              </option>
            ))}
          </select>
        </div>
      </div> */}
  
      {/* <div className="col-md-4">
        <div className="mb-3">
          <label htmlFor="position" className="form-label">
            Position
          </label>
  
          <select
            className="form-select"
            id="position"
            name="position"
            value={formData.position}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Position</option>
            {positions.map((pos) => (
              <option key={pos.id} value={pos.id}>
                {pos.position}
              </option>
            ))}
          </select>
        </div>
      </div> */}
      </div>
          <div className="row">
            <div className="col-md-4">
              <div className="mb-3">
                <div className="text-center">
                  <button type="submit" className="btn btn-outline-dark">
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  
     
    );
  };
  
  export default Addworker;
  





