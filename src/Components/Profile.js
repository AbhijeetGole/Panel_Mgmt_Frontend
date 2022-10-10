import "./Assets/profile.css";
import { React, useState, useEffect } from "react";
import username from "./Userlogin";
import Authservice from "../services/auth-service.js";
const Usr = { urole: "panelist", uname: "Vedant", ufname: "V", ulname: "D", uemail: "abc", uphone: "123", upanelname: "xyz" }
const Profile = () => {
    const [Prof, setProf] = useState([]);
    const tokendata = JSON.parse(localStorage.getItem("user"))
    const username = tokendata.user.username;
    useEffect(() => {
        try {
            Authservice.getUsername(username).then((usrdata) => {
                console.log("getUsername called");
                Usr.urole = usrdata.userRole;
                Usr.uname = usrdata.username;
                Usr.ufname = usrdata.firstname;
                Usr.ulname = usrdata.lastname;
                Usr.uemail = usrdata.email;
                Usr.uphone = usrdata.phone;
                Usr.upanelname = usrdata.panelName;
                Usr.skills = usrdata.skills;
                setProf(usrdata);
            });
        } catch (err) {
            alert("Unable to fetch data", err);
        }
    }, []);

    return (
        <div class="bg-image">
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <div class="page-content page-container" id="page-content" style={{width:'150%' ,marginLeft: '10%', marginTop: '0%'}}>
                <div class="padding" >
                    <div class="row container d-flex justify-content-center  " >
                        <div class="col-xl-6 col-md-12 ">
                            <div class="card user-card-full">
                                <div class="row m-l-0 m-r-0">
                                    <div class="col-sm-4 bg-c-lite-green user-profile">
                                        <div class="card-block text-center text-white">
                                            <div class="m-b-25">
                                                {/*image */}
                                            </div>
                                            <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Username : {Usr.uname}</h6>
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
                                                    <a class="text-muted f-w-400" href="mailto:{Usr.uemail}?subject=Feedback&body=">{Usr.uemail}</a>
                                                </div>
                                                <div class="col-sm-6">
                                                    <p class="m-b-10 f-w-600">Phone</p>
                                                    <h6 class="text-muted f-w-400">{Usr.uphone}</h6>
                                                </div>
                                                <div class="row">
                                                    <div class="col-sm-6">
                                                        <p class="m-b-10 f-w-600">First name</p>
                                                        <h6 class="text-muted f-w-400">{Usr.ufname}</h6>
                                                    </div>
                                                    <div class="col-sm-6">
                                                        <p class="m-b-10 f-w-600">Last name</p>
                                                        <h6 class="text-muted f-w-400">{Usr.ulname}</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Skills</h6>
                                            <div class="row">
                                                <div class="col-sm-12">
                                                    <h6 class="text-muted f-w-400">{Usr.skills}</h6>
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