import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from '../components/Navbar';
import api from './api';



const Profile = () => {
  const [AdminData, setAdminData] = useState([]); // To store the worker's data
 

  useEffect(() => {
    // Fetch worker's details from Django API endpoint
    api.get(`/admin-user/`)
      .then(response => {
          setAdminData(response.data); 
        })
        .catch(error => {
          console.error('Error fetching data:', error);
      
      });
   
  }, []); // Add 'id' as a dependency to refetch data when the 'id' changes


  return (
    <div className="App">
      <Navbar />
      <h2>Admin Profiles</h2>
      <div className="container mt-5">
        
        <div className="row">
          <table className="col-md-6">
           <thead>
            <tr>
             
            <th> S/N</th>
            
            <th> Emails</th>  

            <th> Password</th> 
            </tr>
           </thead>
          
            
          <tbody>
          {AdminData.map((AdminData, index) => (
            <tr key={AdminData.id}>
              <th scope="row">{index + 1}</th>
              
              <td>
              <a href={`mailto:${AdminData.email}`}>{AdminData.email}</a></td>
              <td itemType='password'>{AdminData.password}</td>
            
            </tr>
          ))}
            </tbody>
         
        
      </table>
    </div>
    </div>
    </div>
  );
};

export default Profile;




