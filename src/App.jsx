import React from 'react';
import "./index.css"
import LoginPage from './pages/LoginPage'; // Adjust the path accordingly
import Dashboard from './pages/Dashboard';
import { Route, Routes} from 'react-router-dom';
import Allworkers from './pages/Allworkers';
import Addworker from './pages/Addworker';
import Profile from './pages/Profile';
import LandingPage from './pages/LandingPage';
import RegisterPage from './pages/RegisterPage';
import Attendance from './pages/Attendance';
import Images from './pages/Images';
import Fingerprint from './pages/FingerPrint';
import 'bootstrap/dist/css/bootstrap.min.css';
import Biograph from './pages/Biograph';

function App() {
  return (
   
    <Routes>

          <Route exact path='/' element={<LandingPage/>}/>
       
          <Route exact path='/login' element={<LoginPage/>}/>
 
          <Route  path='/dashboard' element={<Dashboard/>}/>

          <Route  path='/profile' element={<Profile/>}/>
      
          <Route  path='/workers' element={<Allworkers/>}/>
     
          <Route  path='/addworker' element={<Addworker/>}/>

          <Route  path='/attendance' element={<Attendance/>}/>

          <Route  path='/register' element={<RegisterPage/>}/>

          <Route  path='/image/:id' element={<Images/>}/>

          <Route  path='/bio/:id' element={<Biograph/>}/>

          <Route  path='/fingerprint' element={<Fingerprint/>}/>
        

    </Routes>
  );
}

export default App;
