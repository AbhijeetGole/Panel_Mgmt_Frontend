import React from 'react';
import{useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Assets/createpanel.module.css";
import Authservice from '../services/auth-service.js'
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//class Updatepanel extends React.Component{
const Updateslot_2 = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const [slotId, setSlotId] = useState(location.state.id);
  const [panelName, setPanelName] = useState(location.state.name);
  const [startDate, setStartDate] = useState(location.state.startdate);
  const [endDate, setEndDate] = useState(location.state.enddate);
  const [starttime, setStartTime] = useState(location.state.starttime);
  const [endtime, setEndTime] = useState(location.state.endtime);
  const [skills, setSkills] = useState(location.state.skills);
  var [slotused, setUsed] = useState(location.state.active);
  var [active, setActive] = useState(location.state.usage);
  
  const handleChange = event => {
    if (event.target.checked) {
      slotused = true;
      console.log(slotused);
    } else {
      slotused = false;
    }
    setUsed(current => !current);
  };
  const handleActive = event => {
    if (event.target.checked) {
      active = true;
    } else {
      active= false;
    }
    setActive(current => !current);
  };
  const submit = async (e) => {
    e.preventDefault();
    console.log("in submit");
    try {
      console.log(startDate, endDate, starttime);
      await Authservice.updateSlot(slotId, panelName, startDate, endDate, starttime, endtime, skills, slotused, active).then(
        (data) => {
          
          toast.success('Slot updated successfully', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,})
            setTimeout(()=>
            navigate("/Getallslots"),2000);

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
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="/styles/styles.css" />
      <link rel="stylesheet" href="createslot.css" />

      <div className="position-fixed top-0 end-0 start-0 bg-img-start bg-image">
      </div>
      <div className="container justify-content-center">
        <div className="row">
          <div className="min-vh-100 d-flex align-items-center justify-content-center">
            <div className="col-12 col-md-10 col-xl-5 my-5">
              <div className="card">
                <div className="card-body">
                  <h2 className="text-center mb-3">Update a Slot</h2>
                  <form onSubmit={submit}>
                  
                    <div className="form-group mb-3">
                      <label className="form-label"> Slot Id </label>
                      <input type="text" className="form-control" placeholder="Enter panel name" value={slotId} onChange={
                        (e) => setSlotId(e.target.value)} />
                    </div>
                    <div className="form-group mb-3">
                      <label className="form-label"> Panel </label>
                      <input type="text" className="form-control" placeholder="Enter panel name"
                        value={panelName} onChange={(e) => setPanelName(e.target.value)}
                      />
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group mb-3">
                          <label className="form-label"> Start Date </label>
                          <input type="date" className="form-control" placeholder="Enter your first name"
                            value={startDate} onChange={(e) => setStartDate(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group mb-3">
                          <label className="form-label"> End Date </label>
                          <input type="date" className="form-control" placeholder="Enter your last name"
                            value={endDate} onChange={(e) => setEndDate(e.target.value)}

                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group mb-3">
                          <label className="form-label"> Start Time </label>
                          <input type="time" className="form-control" placeholder="Enter start time"
                            value={starttime} onChange={(e) => setStartTime(e.target.value)}

                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group mb-3">
                          <label className="form-label"> End Time </label>
                          <input type="time" className="form-control" placeholder="Enter end time"
                            value={endtime} onChange={(e) => setEndTime(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      <label className="form-label"> Skills </label>
                      <input type="text" className="form-control" placeholder="Java, React etc."
                        value={skills} onChange={(e) => setSkills(e.target.value)}
                      />
                    </div>


                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-check form-switch mb-3">
                          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" defaultChecked
                          value={slotused} onChange={handleChange}
                          />
                          <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Used</label>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-check form-switch mb-3">
                          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" defaultChecked
                          value={active} onChange={handleActive}
                          />
                          <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Active</label>
                        </div>
                      </div>
                    </div>

                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                      <button className="btn btn-warn me-md-2" type="button">Cancel</button>
                      <button className="btn btn-primary" type="button" onClick={submit}>Submit</button>
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
export default Updateslot_2;