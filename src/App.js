import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";



//import pages<Route path="/Userregister" element={<Userregister/>} />
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
import Header from './Components/Header.jsx';
import Sidebar from './Components/Sidebar.jsx';



const App = () => {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Userlogin/>} />
        <Route path="/Createslot" element={<><Header/><Sidebar/><Createslot/></>} />
        <Route path="/Getallpanels" element={<><Header/><Sidebar/><Getallpanels/></>} />
        <Route path="/Getallslots" element={<><Header/><Sidebar/><Getallslots/></>} />
        <Route path="/Updatepanel" element={<><Header/><Sidebar/><Updatepanel/></>} />
        <Route path="/Createpanel" element={<><Header/><Sidebar/><Createpanel/></>} />
        <Route path="/Userregister" element={ <Userregister/>} />
        <Route path="/Updateslot" element={<><Header/><Sidebar/><Updateslot/></>} />
        <Route path="/Dashboard" element={<Dash/>} />
        <Route path="/Dashboard2" element={<Dash2/>} />
        <Route path="/Calendar" element={<Calend/>} />
      </Routes>  
    </Router>
  );
}

export default App;