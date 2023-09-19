
import api from './api';
import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom'; // Import useParams to access the ID parameter

const Images = () => {
  const [frontfaceImage, setFrontfaceImage] = useState(null);
  const [rightSideImage, setRightSideImage] = useState(null);
  const [leftSideImage, setLeftSideImage] = useState(null);

  const videoRef = useRef(null);

  const { id } = useParams(); // Get the ID parameter from the URL

  useEffect(() => {
    // Request access to the user's camera when the component mounts
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };
    startCamera();
  }, []);

  const handleImageUpload = (event, setImage) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleCaptureClick = (setImage) => () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const canvasContext = canvas.getContext('2d');

      canvasContext.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

      // Convert canvas to Blob
      canvas.toBlob((blob) => {
        setImage(new File([blob], 'captured-image.png')); // Create a File object
      }, 'image/png');
    }
  };

  const handleRightImageUpload = (event) => {
    handleImageUpload(event, setRightSideImage);
  };

  const handleLeftImageUpload = (event) => {
    handleImageUpload(event, setLeftSideImage);
  };

  const handleRightCaptureClick = handleCaptureClick(setRightSideImage);
  const handleLeftCaptureClick = handleCaptureClick(setLeftSideImage);

  const handleImageSubmit = () => {
    const formData = new FormData();
    formData.append('front_image', frontfaceImage);
    formData.append('right_image', rightSideImage);
    formData.append('left_image', leftSideImage);

    // Post form data to Django API endpoint to store images in the database
    api.get(`/employee/${id}`, {
      method: 'PUT', // Use PUT to update the images
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      // Handle success or error here
    })
    .catch(error => {
      // Handle the error here
      console.error('Error updating images:', error);
    });
  };

  return (
    <div className="App">
    <Navbar />
    <h2 className="mb-4">Upload or Capture Images</h2>
    <div className="container">
      <video ref={videoRef} autoPlay style={{ display: 'block', marginBottom: '10px' }}></video>
    </div>
    <div className="container">
  <div className="mb-3">
    <label htmlFor="frontfaceImage" className="form-label">Frontface Image:</label>
    <input type="file" className="form-control" id="frontfaceImage" accept="image/*" onChange={(e) => handleImageUpload(e, setFrontfaceImage)} />
    <button className="btn btn-outline-dark mt-2" onClick={handleCaptureClick(setFrontfaceImage)}>Capture</button>
    {frontfaceImage && <img src={URL.createObjectURL(frontfaceImage)} alt="Frontface" className="img-thumbnail mt-2" />}
  </div>

  <div className="mb-3">
    <label htmlFor="rightSideImage" className="form-label">Right Side Image:</label>
    <input type="file" className="form-control" id="rightSideImage" accept="image/*" onChange={handleRightImageUpload} />
    <button className="btn btn-outline-dark mt-2" onClick={handleRightCaptureClick}>Capture</button>
    {rightSideImage && <img src={URL.createObjectURL(rightSideImage)} alt="Right Side" className="img-thumbnail mt-2" />}
  </div>

  <div className="mb-3">
    <label htmlFor="leftSideImage" className="form-label">Left Side Image:</label>
    <input type="file" className="form-control" id="leftSideImage" accept="image/*" onChange={handleLeftImageUpload} />
    <button className="btn btn-outline-dark mt-2" onClick={handleLeftCaptureClick}>Capture</button>
    {leftSideImage && <img src={URL.createObjectURL(leftSideImage)} alt="Left Side" className="img-thumbnail mt-2" />}
  </div>

  
</div>
<div className="container">
<button className="btn btn-outline-dark mt-2" onClick={handleImageSubmit}>Submit Images</button>
</div>

  </div>



  
  );
};

export default Images;
