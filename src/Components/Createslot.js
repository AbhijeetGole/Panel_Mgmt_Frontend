import React from "react";
import "./Assets/createslot.module.css";
import "./Assets/bootstrap.min.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Authservice from "../services/auth-service.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//class Createslot extends React.Component
const Createslot = () => {
  const navigate = useNavigate();

  const [slotId, setSlotId] = useState("");
  const [panelName, setPanelName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [skills, setSkills] = useState("");
  var [slotused, setUsed] = useState(true);
  var [active, setActive] = useState(true);

  // const [home, setHome] = useState('');
  // const [Navigate, setNavigateto] = useState(false);
  const handleChange = (event) => {
    if (event.target.checked) {
      slotused = true;
      console.log(slotused);
    } else {
      slotused = false;
    }
    setUsed((current) => !current);
  };
  const handleActive = (event) => {
    if (event.target.checked) {
      active = true;
    } else {
      active = false;
    }
    setActive((current) => !current);
  };
  const submit = async (e) => {
    e.preventDefault();
    console.log("in submit");
    try {
      console.log(startTime);
      await Authservice.createSlot(
        slotId,
        panelName,
        startDate,
        endDate,
        startTime,
        endTime,
        skills,
        slotused,
        active
      ).then(
        (data) => {
          toast.success('Slot created successfully', {
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
          toast.error('Please Fill All The Fields', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        }
      );
    } catch (err) {
      toast.error('Please Fill All The Fields', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
  };

  return (
    <div>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <title />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        href="//db.onlinewebfonts.com/c/bb018e64d01355748d8ddc53553850b9?family=Cerebri+Sans"
        rel="stylesheet"
        type="text/css"
      />
      <link rel="stylesheet" href="/styles/styles.css" />
      <link rel="stylesheet" href="createslot.css" />

      <div className="position-fixed top-0 end-0 start-0 bg-img-start bg-image"></div>
      <div className="container justify-content-center">
        <div className="row">
          <div className="min-vh-100 d-flex align-items-center justify-content-center">
            <div className="col-12 col-md-10 col-xl-5 my-5">
              <div className="card">
                <div className="card-body">
                  <h2 className="text-center mb-3">Create a Slot</h2>
                  <form onSubmit={submit}>
                    <div className="form-group mb-3">
                      <label className="form-label"> Slot Id </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter slot id"
                        value={slotId}
                        onChange={(e) => setSlotId(e.target.value)}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label className="form-label"> Panel </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter panel name"
                        value={panelName}
                        onChange={(e) => setPanelName(e.target.value)}
                      />
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group mb-3">
                          <label className="form-label"> Start Date </label>
                          <input
                            type="date"
                            className="form-control"
                            placeholder="Enter your first name"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group mb-3">
                          <label className="form-label"> End Date </label>
                          <input
                            type="date"
                            className="form-control"
                            placeholder="Enter your last name"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group mb-3">
                          <label className="form-label"> Start Time </label>
                          <input
                            type="time"
                            className="form-control"
                            placeholder="Enter start time"
                            value={startTime}
                            onChange={(e) => setStartTime(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group mb-3">
                          <label className="form-label"> End Time </label>
                          <input
                            type="time"
                            className="form-control"
                            placeholder="Enter end time"
                            value={endTime}
                            onChange={(e) => setEndTime(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      <label className="form-label"> Skills </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Java, React etc."
                        value={skills}
                        onChange={(e) => setSkills(e.target.value)}
                      />
                    </div>

                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-check form-switch mb-3">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckChecked"
                            defaultChecked
                            value={slotused}
                            onChange={handleChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckChecked"
                          >
                            Used
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-check form-switch mb-3">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckChecked"
                            defaultChecked
                            value={active}
                            onChange={handleActive}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckChecked"
                          >
                            Active
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                      <button className="btn btn-warn me-md-2" type="button">
                        Cancel
                      </button>
                      <button
                        className="btn btn-primary"
                        onClick={submit}
                        type="button"
                      >
                        Submit
                      </button>
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
};

export default Createslot;
