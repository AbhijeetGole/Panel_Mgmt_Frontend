import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import { useState } from 'react';


//import pages
import Createpanel from './Components/Createpanel.js';
import Createslot from './Components/Createslot.js';
import Getallpanels from './Components/Getallpanels.js';
import Getallslots from './Components/Getallslots.js';
import Updatepanel from './Components/Updatepanel.js';
import Updateslot from './Components/Updateslot.js';
import Userlogin from './Components/Userlogin.js';
import Userregister from './Components/Userregister.js';
import Dash from './Components/Dash.js';
import Dash2 from './Components/Dash2.js';
import Calend from './Components/Calendar.tsx';




const App = () => {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Userlogin/>} />
        <Route path="/Createslot" element={<Createslot/>} />
        <Route path="/Getallpanels" element={<Getallpanels/>} />
        <Route path="/Getallslots" element={<Getallslots/>} />
        <Route path="/Updatepanel" element={<Updatepanel/>} />
        <Route path="/Userregister" element={<Userregister/>} />
        <Route path="/Createpanel" element={<Createpanel/>} />
        <Route path="/Userregister" element={<Userregister/>} />
        <Route path="/Updateslot" element={<Updateslot/>} />
        <Route path="/Dashboard" element={<Dash/>} />
        <Route path="/Dashboard2" element={<Dash2/>} />
        <Route path="/Calendar" element={<Calend/>} />
      </Routes>  
    </Router>
  );
}

export default App;