import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Assets/createpanel.module.css";
import Authservice from '../services/auth-service.js'
//class Createpanel extends React.Component 
const Createpanel = ({ token }) => {

  const [panelName, setpanelName] = useState("")
  const [skills, setskills] = useState("")
  const [Interviewer, setInterviewer] = useState("")
  const [panelId,setpanelId] = useState("")
  const navigate = useNavigate()
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await Authservice.createPanel(panelId,panelName, skills, Interviewer).then(
        (data) => {
          console.log(data.token);
          
            navigate("/Panelop")
          
          console.log("created")
          //navigate("/Home")
        },
        (error) => {
          console.log(error)
        }
      );
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <div id='r1'>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <title />
      <meta name="description" content />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="//db.onlinewebfonts.com/c/bb018e64d01355748d8ddc53553850b9?family=Cerebri+Sans" rel="stylesheet" type="text/css" />
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
                      <label className="form-label"> Panel Id </label>
                      <input type="text" className="form-control" placeholder="Enter panel name" value={panelId} onChange={
                        (e) => setpanelId(e.target.value)} />
                    </div>
                    <div className="form-group mb-3">
                      <label className="form-label"> Panel </label>
                      <input type="text" className="form-control" placeholder="Enter panel name" value={panelName} onChange={
                        (e) => setpanelName(e.target.value)} />
                    </div>
                    <div className="form-group mb-3">
                      <label className="form-label"> Skills </label>
                      <input type="text" className="form-control" placeholder="Java, React etc." value={skills} onChange={
                        (e) => setskills(e.target.value)} />
                    </div>
                    <div className="form-group mb-3">
                      <label className="form-label"> Interviewer </label>
                      <input type="text" className="form-control" placeholder="Enter interviewer names" value={Interviewer} onChange={
                        (e) => setInterviewer(e.target.value)} />
                    </div>
                    <div className="form-check form-switch mb-3">
                      <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" defaultChecked />
                      <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Active</label>
                    </div>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                      <button className="btn btn-warn me-md-2" type="button">Cancel</button>
                      <button className="btn btn-primary" type="submit">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Createpanel;