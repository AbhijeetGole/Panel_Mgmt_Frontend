import { React, useState, useEffect } from "react";
import "./Assets/getallslots.module.css";
import Authservice from "../services/auth-service.js";
import SlotInfo from "./SlotInfo";
//import "../mystyle.css";
import { useNavigate } from "react-router";

//class Getallslots extends React.Component{
const Getallslots = () => {
  const [slots, setSlot] = useState([]);
  const [flag, setFlag] = useState();
  useEffect(() => {
    try {
      Authservice.getSlot().then((slotdata) => {
        console.log("getallslot auth called");
        console.log(slotdata);
        setSlot(slotdata);
      });
    } catch (err) {
      alert("Unable to fetch data", err);
    }
  }, [flag]);
  const navigate = useNavigate();
  const createslot = () => {
    navigate("/Createslot");
  };
  return (
    <div>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <title />
      <meta name="description" content />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.1.2/css/fontawesome.min.css"
        integrity="sha384-X8QTME3FCg1DLb58++lPvsjbQoCT9bp3MsUU3grbIny/3ZwUJkRNO8NPW6zqzuW9"
        crossOrigin="anonymous"
      />
      <link rel="stylesheet" href="/styles/styles.css" />
      <link rel="stylesheet" href="getallslots.css" />
      <div className="position-fixed top-0 end-0 start-0 bg-img-start bg-image" />
      <div className="container">
        <div className="row">
          <div
            className="min-vh-100 d-flex justify-content-center"
            style={{ width: "90%", "margin-left": "10%" }}
          >
            <div className="col-12 col-md-10 col-xl-10 my-5">
              <div className="card">
                <h2 className="text-center mb-3 mt-3">Slots</h2>
                <div className="card-header" style={{ "background-color": "white", "padding-right": "0px" }}>
                  {/* Search */}
                  <form>
                    <div className="input-group input-group-flush input-group-merge input-group-reverse" style={{ "justify-content": "flex-end" }}>
                      {/*<input className="form-control list-search" type="search" placeholder="Search" />*/}
                      <span className="input-group-text" style={{ "font-weight": "bold", border: "none", "background-color": "white", cursor: "pointer" }} onClick={createslot}>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
      </svg>*/}{" "}
                        Create Slot&nbsp;&nbsp;
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-plus-circle-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                        </svg>
                      </span>
                    </div>
                  </form>
                </div>
                <div className="table-responsive">
                  <table className="table table-sm table-nowrap card-table">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Id</th>
                        <th>Panel</th>
                        <th> Start Date </th>
                        <th> End Date </th>
                        <th> Start Time </th>
                        <th> End Time </th>
                        <th>Skills</th>
                        <th> Status </th>
                        <th> Used </th>
                        <th></th>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>
                    {slots.map((slot) => {
                      return (
                        <SlotInfo
                          id={slot.slotId}
                          name={slot.panelName}
                          startdate={slot.startDate}
                          enddate={slot.endDate}
                          starttime={slot.starttime}
                          endtime={slot.endtime}
                          skills={slot.skills}
                          active={slot.active}
                          usage={slot.slotused}
                          setFlag={setFlag}
                        />
                      );
                    })}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Getallslots;
