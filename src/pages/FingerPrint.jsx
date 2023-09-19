import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';

const Fingerprint = () => {
  const [fingerprintImage, setFingerprintImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFingerprintImage(file);
    }
  };

  const handleImageSubmit = () => {
    const formData = new FormData();
    formData.append('fingerprint', fingerprintImage);

    // Post form data to Django API endpoint to store fingerprint in the database
    fetch(`http://127.0.0.1:8000/api/employee/`, {
      method: 'PUT',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        // Handle success or error here
      });


  
  };

  return (
    <div className="App">
        <Navbar/>
        <h2>Capture Fingerprint</h2>
    <div className="container ">
      
      
      <div className="mb-3">
        <label htmlFor="fingerprintImage" className="form-label">Fingerprint Image:</label>
        <input type="file" className="form-control" id="fingerprintImage" accept="image/*" onChange={handleImageUpload} />
        {fingerprintImage && <img src={URL.createObjectURL(fingerprintImage)} alt="Fingerprint" className="img-thumbnail" />}
      </div>

      
    </div>
    <div className="container">
    <div className="mb-3">
      <button className="btn btn-outline-dark" onClick={handleImageSubmit}>Submit Fingerprint</button>
      </div>
    </div>
    
    </div>
  );
};

export default Fingerprint;
