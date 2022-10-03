import React from 'react';
import "./Assets/createslot.module.css";
import Header from './Header.jsx';
import './Assets/bootstrap.min.css';
import { useState } from "react";
 import {useNavigate } from 'react-router-dom';
import Authservice from '../services/auth-service.js'
import Updateslot_2 from './Updateslot_2';

//class Updateslot extends React.Component
const Updateslot= () =>
{
  
  const [slotId,setSlotId] =useState("")
  const navigate = useNavigate()
  const handleget = async (e) => {
    e.preventDefault();
    console.log("hadnle");
    try {
      await Authservice.getslotId(slotId).then(
        (data) => {
          if(data.result)
              navigate("/Updateslot_2")
          else
              alert("Please enter valid id")
          

          //navigate("/Home")
        }
        ,
        (error) => {
          alert("Please enter valid id");
        }
      );
    } catch (err) {
      alert("Please enter valid id");
    }
  };



 return (
    <div>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <title />
      <meta name="description" content />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="//db.onlinewebfonts.com/c/bb018e64d01355748d8ddc53553850b9?family=Cerebri+Sans" rel="stylesheet" type="text/css" />
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
                  <h2 className="text-center mb-3">Update Slot</h2>
                  <form onSubmit={handleget}>
                    <div className="form-group mb-3">
                      <label className="form-label"> Slot Id </label>
                      <input type="text" className="form-control" placeholder="Enter panel Id" value={slotId} onChange={
                        (e) => setSlotId(e.target.value)} />
                    </div>



                   <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                      <button className="btn btn-warn me-md-2" type="button">Cancel</button>
                      <button className="btn btn-primary" type="button" onClick={handleget}>Update</button>
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
export default Updateslot;