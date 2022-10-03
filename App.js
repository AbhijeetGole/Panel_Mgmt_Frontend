import {React,useState} from 'react';
import './App.css';
import './Components/Assets/bootstrap.min.css';
import './Components/Assets/dashboard.css';
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";



import Createpanel from './Components/Createpanel.js';
import Createslot from './Components/Createslot.js';
import Getallpanels from './Components/Getallpanels.js';
import Getallslots from './Components/Getallslots.js';
import Updatepanel from './Components/Updatepanel.js';
import Updateslot from './Components/Updateslot.js';
import Userlogin from './Components/Userlogin.js';
import {Userregister} from './Components/Userregister.js';
import Slotop from './Components/Slotop.jsx';
import Calend from './Components/Calendar.tsx';
import Header from './Components/Header.jsx';
import Sidebar from './Components/Sidebar.jsx';
import Panelop from './Components/Panelop.jsx';
import Home from './Components/Home.jsx';



const App = () => {
  const [token,setToken]=useState("")
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Userlogin setToken={setToken}/> } />
        <Route path="/Userregister" element={ <Userregister/>} />
        <Route path="/Createslot" element={<><Header/><Sidebar/><Createslot/></>} />
        <Route path="/Getallpanels" element={<><Header/><Sidebar/><Getallpanels/></>} />
        <Route path="/Getallslots" element={<><Header/><Sidebar/><Getallslots/></>} />
        <Route path="/Updatepanel" element={<><Header/><Sidebar/><Updatepanel/></>} />
        <Route path="/Createpanel" element={<><Header/><Sidebar/><Createpanel token={token}/></>} />
        <Route path="/Updateslot" element={<><Header/><Sidebar/><Updateslot/></>} />
        <Route path="/Home" element={<><Header/><Sidebar/><Home/></>} />
        <Route path="/Panelop" element={<><Header/><Sidebar/><Panelop/></>} />
        <Route path="/Slotop" element={<><Header/><Sidebar/><Slotop/></>} />
        <Route path="/Calendar" element={<><Header/><Sidebar/><Calend/></>} />
      </Routes>  
    </Router>
  );
}

export default App;