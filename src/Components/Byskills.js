import { React, useState, useEffect } from "react";
import "./Assets/getallslots.module.css";
import Authservice from "../services/auth-service.js";
import UserInfo from "./UserInfo";
//import "../mystyle.css";
import { useNavigate } from "react-router";
const Byskills = () => {
  const [user, setUser] = useState([]);
  const [flag, setFlag] = useState();
  useEffect(() => {
    try {
      Authservice.getUserinfo().then((userdata) => {
        console.log("user Info");
        console.log(userdata);
        setUser(userdata);
      });
    } catch (err) {
      alert("Unable to fetch data", err);
    }
  }, [flag]);
  return (
    <div>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <title />
      <meta name="description" content />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.1.2/css/fontawesome.min.css" integrity="sha384-X8QTME3FCg1DLb58++lPvsjbQoCT9bp3MsUU3grbIny/3ZwUJkRNO8NPW6zqzuW9" crossOrigin="anonymous" />
      <link rel="stylesheet" href="/styles/styles.css" />
      <link rel="stylesheet" href="getallslots.css" />
      <div className="position-fixed top-0 end-0 start-0 bg-img-start bg-image" />
      <div className="container">
        <div className="row">
          <div className="min-vh-100 d-flex justify-content-center" style={{ 'width': '90%', 'margin-left': '10%' }}>
            <div className="col-12 col-md-10 col-xl-10 my-5">
              <div className="card">
                <h2 className="text-center mb-3 mt-3">Users Info</h2>
                <div className="card-header">
                  {/* Search */}
                  <form>
                    <div className="input-group input-group-flush input-group-merge input-group-reverse">
                      <input className="form-control list-search" type="search" placeholder="Search" />
                      <span className="input-group-text">
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                      </span>
                    </div>
                  </form>
                </div>
                <div className="table-responsive">
                  <table className="table table-sm table-nowrap card-table">
                    <thead>
                      <tr>
                        <th>
                          <div className="form-check mb-n2">
                            <input className="form-check-input list-checkbox-all" name="ordersSelect" id="ordersSelectAll" type="checkbox" />
                            <label className="form-check-label" htmlFor="ordersSelectAll">&nbsp;</label>
                          </div>
                        </th>
                        <th>
                          <a href="#" className="text-muted"> Username</a>
                        </th>
                        <th>
                          <a href="#" className="text-muted">Firstname</a>
                        </th>
                        <th>
                          <a href="#" className="text-muted"> Lastname </a>
                        </th>
                        <th>
                          <a href="#" className="text-muted"> Email</a>
                        </th>
                        <th>
                          <a href="#" className="text-muted">Phone</a>
                        </th>
                        <th>
                          <a href="#" className="text-muted">Skills</a>
                        </th>
                        <th colSpan={2}>
                          <a href="#" className="text-muted"> Active</a>
                        </th>

                      </tr>
                    </thead>
                    {user.map((user) => {
                      return (
                        <UserInfo
                          username={user.username}
                          firstname={user.firstname}
                          lastname={user.lastname}
                          email={user.email}
                          phone={user.phone}
                          skills={user.skills}
                          active ={user.active}
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

}

export default Byskills;