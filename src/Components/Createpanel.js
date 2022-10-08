import { React, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Drop from './Drop.js';
import "./Assets/createpanel.module.css";
import Authservice from '../services/auth-service.js'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
//import Select from 'react-dropdown-select'
import Select from 'react-select';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//class Createpanel extends React.Component s
const Createpanel = ({ token }) => {
  
  const [options1, setoptions1] = useState([]);
  const [options2, setoptions2] = useState([]);
  const [arr, setArr] = useState([])

  const [panelName, setpanelName] = useState("")
  const [skills, setskills] = useState("")
  const [Interviewer, setInterviewer] = useState("")
  const [panelId, setpanelId] = useState("")
  var [active, setActive] = useState(true);

  useEffect(() => {
    async function fetchMyAPI() {
      await Authservice.getPanel().then(response => {

        setoptions1([...response]);

      })
    }
    fetchMyAPI()
  }, [])

  useEffect(() => {
    async function fetchMyAPI() {
      await Authservice.getUserinfo().then(response => {

        setoptions2([...response]);

      })
    }
    fetchMyAPI()
  }, [])

  const handleActive = event => {
    if (event.target.checked) {
      active = true;
    } else {
      active = false;
    }
    setActive(current => !current);
  };

  const navigate = useNavigate()
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await Authservice.createPanel(panelName, skills, Interviewer, active).then(
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
            navigate("/Getallpanels"),2000);
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
    <div id='r1'>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <title />
      <meta name="description" content />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/*<link rel="stylesheet" href="/styles/styles.css" />
              <link rel="stylesheet" href="create-panel.css" />*/}
      <div className="position-fixed top-0 end-0 start-0 bg-img-start bg-image">
      </div>
      <div className="container">
        <div className="row">
          <div className="min-vh-100 d-flex align-items-center justify-content-center">
            <div className="col-12 col-md-10 col-xl-5 my-5">
              <div className="card">
                <div className="card-body">
                  <h2 className="text-center mb-3">Create a Panel</h2>
                  <form onSubmit={handleCreate}>

                    <div className="form-group mb-3">
                      <label className="form-label">Select Panel Name </label>

                      <div className="Apps">

                        <select style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ced4da' }} value={panelName} onChange={
                          (e) => setpanelName(e.target.value)} >

                          <option value="">Select your Panel Name</option>
                          {options1.map((opt, index) => (

                            <option key={opt._id}>{opt.panelName}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="form-group mb-3">
                      <label className="form-label">Select Interviewer </label>
                      {/* <input type="text" className="form-control" placeholder="Enter interviewer names" value={Interviewer} onChange={
                        (e) => setInterviewer(e.target.value)} /> */}
                      <div className="Apps">
                        <select style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ced4da' }} value={Interviewer} onChange={
                          (e) => setInterviewer(e.target.value)}>
                          <option value="">Select your Interviewer Name</option>

                          {options2.map((opt, index) => (
                            <option key={opt._id}>{opt.firstname}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="form-group mb-3">
                      <label className="form-label">Enter Skills </label>
                      <input type="text" style={{ width: '100%', padding: '8px', fontSize: '17px', borderRadius: '5px', border: '1px solid #ced4da' }} placeholder="Java, React etc." value={skills} onChange={
                        (e) => setskills(e.target.value)} />
                    </div>
                    <></>
                    <div className="form-check form-switch mb-3">
                      <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" defaultChecked
                        value={active} onChange={handleActive} />
                      <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Active</label>
                    </div>

                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                      <button className="btn btn-warn me-md-2" type="button">Cancel</button>
                      <button className="btn btn-primary"  type="submit"  >Submit</button>
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

export default Createpanel;

