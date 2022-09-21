import React from 'react';
import { Link } from 'react-router-dom';
import './Assets/bootstrap.min.css';
import './Assets/dashboard.css';
class Dash extends React.Component 
{
    render() {
      return (
        <div>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="generator" content="Hugo 0.101.0" />
          <title>ZenPanel</title>
          <link rel="canonical" href="https://getbootstrap.com/docs/5.2/examples/dashboard/" />
          <link href="bootstrap.min.css" rel="stylesheet" />
          <style dangerouslySetInnerHTML={{__html: "\n      .bd-placeholder-img {\n        font-size: 1.125rem;\n        text-anchor: middle;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        user-select: none;\n      }\n\n      @media (min-width: 768px) {\n        .bd-placeholder-img-lg {\n          font-size: 3.5rem;\n        }\n      }\n\n      .b-example-divider {\n        height: 3rem;\n        background-color: rgba(0, 0, 0, .1);\n        border: solid rgba(0, 0, 0, .15);\n        border-width: 1px 0;\n        box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);\n      }\n\n      .b-example-vr {\n        flex-shrink: 0;\n        width: 1.5rem;\n        height: 100vh;\n      }\n\n      .bi {\n        vertical-align: -.125em;\n        fill: currentColor;\n      }\n\n      .nav-scroller {\n        position: relative;\n        z-index: 2;\n        height: 2.75rem;\n        overflow-y: hidden;\n      }\n\n      .nav-scroller .nav {\n        display: flex;\n        flex-wrap: nowrap;\n        padding-bottom: 1rem;\n        margin-top: -1px;\n        overflow-x: auto;\n        text-align: center;\n        white-space: nowrap;\n        -webkit-overflow-scrolling: touch;\n      }\n    " }} />
          {/* Custom styles for this template */}
          <link href="dashboard.css" rel="stylesheet" />
          <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="#">ZenPanel</a>
            <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <input className="form-control form-control-dark w-100 rounded-0 border-0" type="text" placeholder="Search" aria-label="Search" />
            <div className="navbar-nav">
              <div className="nav-item text-nowrap">
                <a className="nav-link px-3" href="#">Sign out</a>
              </div>
            </div>
          </header> 
          <div className="container-fluid">
            <div className="row">
              <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                <div className="position-sticky pt-3 sidebar-sticky">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#">
                        <span data-feather="home" className="align-text-bottom" />
                        Home
                      </a>
                    </li>
                    <li className="nav-item">

                      <Link to="/Dashboard" className="nav-link">
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-person-lines-fill" viewBox="0 0 16 16">
                          <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
                        </svg>
                        <span data-feather="file" className="align-text-bottom" />  
                        Panels
                      </Link> 

                    </li>
                    <li className="nav-item">
                      <Link to="/Dashboard2" className="nav-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-card-list" viewBox="0 0 16 16">
                          <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                          <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                        </svg>
                        <span data-feather="shopping-cart" className="align-text-bottom" /> 
                        Slots
                      </Link> 
                    </li>
                    <li className="nav-item">
                      <Link to="" className="nav-link">
                        <span data-feather="users" className="align-text-bottom" />
                        Profile
                      </Link> 
                    </li>
                                  
                    <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
                      <span>Saved reports</span>
                      <a className="link-secondary" href="#" aria-label="Add a new report">
                        {/*<span data-feather="plus-circle" class="align-text-bottom"></span> */}
                      </a>
                    </h6>
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <span data-feather="file-text" className="align-text-bottom" />
                          Slot Data
                        </a>
                      </li>
                      {/* <li class="nav-item">
              <a class="nav-link" href="#">
                <span data-feather="file-text" class="align-text-bottom"></span>
                Skillwise Slots
              </a>
            </li> */}
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <span data-feather="file-text" className="align-text-bottom" />
                          Highest Slot Provider
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <span data-feather="file-text" className="align-text-bottom" />
                          Unused Slots
                        </a>
                      </li>
                    </ul>
                  </ul></div>
              </nav>
              
      {/*<div class="b-example-divider"></div> */}
              <div className="container px-4 py-5" id="hanging-icons" style={{width: '80%', marginLeft: '17%'}}>
                <h2 className="pb-2 border-bottom">Panel Operations</h2>
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                  <div className="col d-flex align-items-start">
                    <div className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                      <svg className="bi" width="1em" height="1em"><use xlinkHref="#toggles2" /></svg>
                    </div>
                    <div>
                      <h3 className="fs-2">Create</h3>
                      <p>Click to Create panels</p>
                      <Link to="/Createpanel" className="btn btn-primary">
                           Create
                      </Link>
                    </div>
                  </div>
                  <div className="col d-flex align-items-start">
                    <div className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                      <svg className="bi" width="1em" height="1em"><use xlinkHref="#cpu-fill" /></svg>
                    </div>
                    <div>
                      <h3 className="fs-2">Return</h3>
                      <p>Click to get all panels</p>
                      <Link to="/Getallpanels" className="btn btn-primary">
                        Return
                      </Link>
                    </div>
                  </div>
                  <div className="col d-flex align-items-start">
                    <div className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                      <svg className="bi" width="1em" height="1em"><use xlinkHref="#tools" /></svg>
                    </div>
                    <div>
                      <h3 className="fs-2">Update</h3>
                      <p>Click to update panel</p>
                      <Link to="/Updatepanel" className="btn btn-primary">
                        Update
                      </Link>                      
                    </div>
                  </div>
                </div>
              </div>

              <script src="bootstrap.bundle.min.js"></script> 
              <script src="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/feather.min.js" integrity="sha384-uO3SXW5IuS1ZpFPKugNNWqTZRRglnUJK6UAZ/gxOX80nxEkN9NcGZTftn6RzhGWE" crossorigin="anonymous"></script><script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.4/dist/Chart.min.js" integrity="sha384-zNy6FEbO50N+Cg5wap8IKA4M/ZnLJgzc6w2NqACZaK0u0FXfOWRRJOnQtpZun8ha" crossorigin="anonymous"></script><script src="dashboard.js"></script>             
            </div></div></div>
      );
    }
}
export default Dash;