import {React,useState} from 'react';
import './App.css';
import './Components/Assets/bootstrap.min.css';
import './Components/Assets/dashboard.css';
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";

import Profile from './Components/Profile.js';

import Createpanel from './Components/Createpanel.js';
import Createslot from './Components/Createslot.js';
import Getallpanels from './Components/Getallpanels.js';
import Getallslots from './Components/Getallslots.js';
import Updatepanel from './Components/Updatepanel.js';
//import Update_panel2 from './Components/Update_panel2.js';
import Updateslot from './Components/Updateslot.js';
import Updateslot_2 from './Components/Updateslot_2';
import Userlogin from './Components/Userlogin.js';
import {Userregister} from './Components/Userregister.js';
import Slotop from './Components/Slotop.jsx';
import Calend from './Components/Calendar.tsx';
import Header from './Components/Header.jsx';
import Sidebar from './Components/Sidebar.jsx';
import Panelop from './Components/Panelop.jsx';
import Home from './Components/Home.jsx';
import Update_panel2 from './Components/Update_panel2.js';
import Unused from './Components/Unused.js';
import Highest from './Components/Highest.js';
import Byskills from './Components/Byskills.js';


const App = () => {
  const [token,setToken]=useState("")
  const [userdata,setUserdata]=useState('');
  const tokendata=JSON.parse(localStorage.getItem("user"))
  const role=tokendata.user.userRole
  console.log(role)
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Userlogin setToken={setToken} setUserdata={setUserdata}/> } />
        <Route path="/Userregister" element={ <Userregister setToken={token}/>} />
        <Route path="/Createslot" element={<><Header/><Sidebar/><Createslot/></>} />
        <Route path="/Getallpanels" element={role=="Panelist"?(<><Header/><Sidebar/><Home/></>):(<><Header/><Sidebar/><Getallpanels /></>)} />
        <Route path="/Getallslots" element={role=="Panelist"?(<><Header/><Sidebar/><Home/></>):(<><Header/><Sidebar/><Getallslots/></>)} />
        <Route path="/Updatepanel" element={<><Header/><Sidebar/><Updatepanel/></>} />
        <Route path="/Update_panel2" element={<><Header/><Sidebar/><Update_panel2/></>} />
        <Route path="/Updateslot_2" element={<><Header/><Sidebar/><Updateslot_2/></>} />
        <Route path="/Createpanel" element={<><Header/><Sidebar/><Createpanel token={token}/></>} />
        <Route path="/Updateslot_2" element={<><Header/><Sidebar/><Updateslot_2/></>} />
        <Route path="/Updateslot" element={<><Header/><Sidebar/><Updateslot/></>} />
        <Route path="/Home" element={<><Header/><Sidebar/><Home/></>} />
        {/* <Route path="/Panelop" element={<><Header/><Sidebar/><Panelop/></>} /> */}
        <Route path="/Slotop" element={<><Header/><Sidebar/><Slotop/></>} />
        <Route path="/Calendar" element={<><Header/><Sidebar/><Calend/></>} />
        <Route path="/Unused" element={<><Header/><Sidebar/><Unused/></>} />
        <Route path="/Profile" element={<><Header/><Sidebar/><Profile/></>} />
        <Route path="/Byskills" element={<><Header/><Sidebar/><Byskills/></>} />

        <Route path="/Highest" element={<><Header/><Sidebar/><Highest/></>} />
      </Routes>  
    </Router>
  );
}

export default App;