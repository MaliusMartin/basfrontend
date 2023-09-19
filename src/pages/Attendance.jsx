import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';
import api from './api';

const Attendance = () => {
  const [attendanceRecords, setAttendanceRecords] = useState([]);

  // useEffect(() => {
  //   // Fetch attendance records for the current day from your Django API
  //   fetch('http://127.0.0.1:8000/api/attendance/')
  //     .then(response => response.json())
  //     .then(data => setAttendanceRecords(data));
  // }, []);
  useEffect(() => {
    // Fetch worker data from Django API endpoint
    api.get(`/attendance/`)
      .then(response => {
        setAttendanceRecords(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    
        
    <div className="App">
  <Navbar />
  <h2 className="mt-5">Attendance Report</h2>
  <div className="container mt-3">
    <div className="table-responsive">
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Employee</th>
            <th>Check-in Time</th>
            <th>Check-out Time</th>
            <th>Overtime Increment</th>
            <th>Late Decrement</th>
          </tr>
        </thead>
        <tbody>
          {attendanceRecords.map((record) => (
            <tr key={record.id}>
              <td>{record.employee.name}</td>
              <td>{record.check_in_time}</td>
              <td>{record.check_out_time}</td>
              <td>{record.overtime_increment}</td>
              <td>{record.late_decrement}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>

  );
};

export default Attendance;
