import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useParams, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import api from "./api";
import bulb from "./img_avatar1.png"; // Import the default image

const Biograph = () => {
  const { id } = useParams(); // Get the employee ID from the URL
  const [employeeData, setEmployeeData] = useState({});
  const [loading, setLoading] = useState(true);
  const [departmentName, setDepartmentName] = useState("");
  const [positionName, setPositionName] = useState("");

  useEffect(() => {
    // Fetch employee data from the API
    api.get(`/employee/${id}/`)
      .then((response) => {
        setEmployeeData(response.data);
        // Fetch department data based on department ID
        return api.get(`/departments/${response.data.department}/`);
      })
      .then((departmentResponse) => {
        setDepartmentName(departmentResponse.data.department);
        // Fetch position data based on position ID
        return api.get(`/positions/${employeeData.position}/`);
      })
      .then((positionResponse) => {
        setPositionName(positionResponse.data.position);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching employee data:", error);
        setLoading(false);
      });
  }, [id, employeeData.position]);

  return (
    <div className="App">
      <Navbar />
      <h4>Biography page</h4>
     <br></br>
      <div className="container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <img
                  className="card-img-top"
                  src={employeeData.front_image || bulb} // Use the front image if available, otherwise use the default image
                  alt="Profile"
                />
                <div className="card-body">
                  <Link to={`/image/${id}`} className="btn btn-outline-dark">
                    Upload Images
                  </Link>
                  <p className="card-text">Used for biometric</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <p className="card-text">
                    Name: {employeeData.first_name} {employeeData.middle_name}{" "}
                    {employeeData.sur_name}
                  </p>
                  <p className="card-text">Phone: {employeeData.mobile_number}</p>
                  <p className="card-text">Email: {employeeData.email}</p>
                  <p className="card-text">Department: {departmentName}</p>
                  <p className="card-text">Position: {positionName}</p>
                  <p className="card-text">Salary: {employeeData.salary}</p>
                  <p className="card-text">Reporting: {employeeData.reporting_time}</p>
                  <p className="card-text">Leaving: {employeeData.leaving_time}</p>
                  <p className="card-text">Joined: {employeeData.joined_date}</p>
                  <Link to="/fingerprint" className="btn btn-outline-dark">
                    Upload Fingerprint
                  </Link>
                  <p className="card-text">Used for biometric</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Biograph;
