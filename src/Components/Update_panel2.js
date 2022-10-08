import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Assets/createpanel.module.css";
import Authservice from '../services/auth-service.js'
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//class Updatepanel extends React.Component{
const Update_panel2 = () => {
    // const [panelId, setpanelId] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    const [panelName, setPanelName] = useState(location.state.panelName);
    const [skills, setSkills] = useState(location.state.skills);
    const [Interviewer, setInterviewer] = useState(location.state.Interviewer);
    var [Active, setActive] = useState(true);



    const [Navigate, setNavigateto] = useState(false);

    const handleActive = event => {
        if (event.target.checked) {
            Active = true;
        } else {
            Active = false;
        }
        setActive(current => !current);
    };
    const submit = async (e) => {
        e.preventDefault();
        console.log("in submit");
        try {

            await Authservice.updatepanel(panelName, skills, Interviewer, Active).then(
                (data) => {
                    toast.success('Panelupdated successfully', {
                        position: "top-right",
                        autoClose: 1500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                    })
                    setTimeout(() =>
                        navigate("/Getallpanels"), 2000);
                },
                (error) => {
                    alert("Please Fill All The Fields", error);
                }
            );
        } catch (err) {
            alert("Please Fill All The Fields", err);
        }
    };

    return (
        <div>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <title />
            <meta name="description" content />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="/styles/styles.css" />
            <link rel="stylesheet" href="updatepanel.css" />
            <div className="position-fixed top-0 end-0 start-0 bg-img-start bg-image">
            </div>
            <div className="container">
                <div className="row">
                    <div className="min-vh-100 d-flex align-items-center justify-content-center">
                        <div className="col-12 col-md-10 col-xl-5 my-5">
                            <div className="card">
                                <div className="card-body">
                                    <h2 className="text-center mb-3">Update Panel</h2>
                                    <form onSubmit={submit}>
                                        <div className="form-group mb-3">
                                            <label className="form-label"> Panel </label>
                                            <input type="text" className="form-control" placeholder="Enter panel name" value={panelName} onChange={
                                                (e) => setPanelName(e.target.value)} />
                                        </div>
                                        <div className="form-group mb-3">
                                            <label className="form-label"> Skills </label>
                                            <input type="text" className="form-control" placeholder="Java, React etc." value={skills} onChange={
                                                (e) => setSkills(e.target.value)} />
                                        </div>
                                        <div className="form-group mb-3">
                                            <label className="form-label"> Interviewer </label>
                                            <input type="text" className="form-control" placeholder="Enter interviewer names" value={Interviewer} onChange={
                                                (e) => setInterviewer(e.target.value)} />
                                        </div>
                                        <div className="form-check form-switch mb-3">
                                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" defaultChecked value={Active} onChange={handleActive} />
                                            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Active</label>
                                        </div>
                                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                            <button className="btn btn-warn me-md-2" type="button">Cancel</button>
                                            <button className="btn btn-primary" type="button" onClick={submit}>Update</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
            />
        </div>
    );

}
export default Update_panel2;