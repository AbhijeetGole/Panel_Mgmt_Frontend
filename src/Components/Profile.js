
import "./Assets/profile.css";
import { React, useState, useEffect } from "react";
import Authservice from "../services/auth-service.js";
const Usr = {urole:"panelis",uname:"Vedant",ufname:"V",ulname:"D",uemail:"abc",uphone:"123",upanelname:"xyz" }
const Profile=()=>  
{   

    const [Prof,setProf] = useState([]);
    {/*useEffect(() => {
        async function fetchMyAPI() {
          await Authservice.getUserinfo().then(response => {
    
            setoptions([...response]);
    
          })
        }
        fetchMyAPI()
        try {
            Authservice.getSlot().then((slotdata) => {
              console.log("getallslot auth called");
              console.log(slotdata);
              setSlot(slotdata);
            });
          } catch (err) {
            alert("Unable to fetch data", err);
          }
      }, [])*/}



    useEffect(() => 
    {   
        try {
          Authservice.getUserinfo().then((usrdata) => {
            console.log("getUserinfo auth called");
            console.log(usrdata);
            setProf(usrdata);
            console.log(usrdata);
          });
        } catch (err) {
          alert("Unable to fetch data", err);
        }
      }, []);  

    Prof.map((u) => {
        
       console.log("userrole is:");
       console.log(u.userRole);

       return (
        Usr.urole=u.userRole,
        Usr.uname=u.username,
        Usr.ufname=u.firstname,
        Usr.ulname=u.lastname,
        Usr.uemail=u.email,
        Usr.uphone=u.phone,
        Usr.upanelname=u.panelName);

      });
      

    

      

      return (
        <div>
          <div class="page-content page-container" id="page-content">
    <div class="padding">
        <div class="row container d-flex justify-content-center">
<div class="col-xl-6 col-md-12">
                                                <div class="card user-card-full">
                                                    <div class="row m-l-0 m-r-0">
                                                        <div class="col-sm-4 bg-c-lite-green user-profile">
                                                            <div class="card-block text-center text-white">
                                                                <div class="m-b-25">
                                                                    {/*image */}
                                                                </div>
                                                                <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Name : {Usr.uname}</h6>
                                                                {/*<h6 class="f-w-600">{Usr.urole}</h6>*/}
                                                                <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-8">
                                                            <div class="card-block">
                                                                <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                                                <div class="row">
                                                                    <div class="col-sm-6">
                                                                        <p class="m-b-10 f-w-600">Email</p>
                                                                        <h6 class="text-muted f-w-400">{Usr.uemail}</h6>
                                                                    </div>
                                                                    <div class="col-sm-6">
                                                                        <p class="m-b-10 f-w-600">Phone</p>
                                                                        <h6 class="text-muted f-w-400">{Usr.uphone}</h6>
                                                                    </div>
                                                                </div>
                                                                <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Panel Details</h6>
                                                                <div class="row">
                                                                    <div class="col-sm-6">
                                                                        <p class="m-b-10 f-w-600">Role</p>
                                                                        <h6 class="text-muted f-w-400">{Usr.urole}</h6>
                                                                    </div>
                                                                    <div class="col-sm-6">
                                                                        <p class="m-b-10 f-w-600">Panel Name</p>
                                                                        <h6 class="text-muted f-w-400">{Usr.upanelname}</h6>
                                                                    </div>
                                                                </div>
                                                                <ul class="social-link list-unstyled m-t-40 m-b-10">
                                                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i class="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"></i></a></li>
                                                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i class="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
                                                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i class="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"></i></a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                             </div>
                                                </div>
                                            </div>
        </div>
      );
    
}

export default Profile;