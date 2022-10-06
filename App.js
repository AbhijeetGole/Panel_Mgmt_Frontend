import {React,useState} from 'react';
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import './App.css';
import './Components/Assets/bootstrap.min.css';
import './Components/Assets/dashboard.css';


import Createpanel from './Components/Createpanel.js';
import Createslot from './Components/Createslot.js';
import Getallpanels from './Components/Getallpanels.js';
import Getallslots from './Components/Getallslots.js';
import Updatepanel from './Components/Updatepanel.js';
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
import Profile from './Components/Profile.js';


const App = () => {
  const [token,setToken]=useState("")
  return (
    
        <Router>  
        <Header/>
        <Sidebar/>
        <Routes>
               <Route path="/" element={<Userlogin setToken={setToken}/> } />
               <Route path="/Userregister" element={ <Userregister/>} />
               <Route path="/Createslot" element={<><Createslot/></>} />
               <Route path="/Getallpanels" element={<><Getallpanels/></>} />
               <Route path="/Getallslots" element={<><Getallslots/></>} />
               <Route path="/Updatepanel" element={<><Updatepanel/></>} />
               <Route path="/Update_panel2" element={<><Update_panel2/></>} />
               <Route path="/Updateslot_2" element={<><Updateslot_2/></>} />
               <Route path="/Createpanel" element={<><Createpanel token={token}/></>} />
               <Route path="/Updateslot" element={<><Updateslot/></>} />
               <Route path="/Home" element={<><Home/></>} />
               <Route path="/Panelop" element={<><Panelop/></>} />
               <Route path="/Slotop" element={<><Slotop/></>} />
               <Route path="/Calendar" element={<><Calend/></>} />
               <Route path="/Unused" element={<><Unused/></>} />
               <Route path="/Byskills" element={<><Byskills/></>} />
               <Route path="/Highest" element={<><Highest/></>} /> 
               <Route path="/Profile" element={<><Profile/></>} />            
        </Routes>  
      </Router>
  );
}

export default App;