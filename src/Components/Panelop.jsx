import React from 'react';
import { Link } from 'react-router-dom';
//class Panel extends React.Component {
const Panel=()=>
  {
      return (
     <div>
              <meta charSet="utf-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <title>ZenPanel</title>
              <link rel="canonical" href="https://getbootstrap.com/docs/5.2/examples/dashboard/" />
              <link href="bootstrap.min.css" rel="stylesheet" />
              <style dangerouslySetInnerHTML={{__html: "\n      .bd-placeholder-img {\n        font-size: 1.125rem;\n        text-anchor: middle;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        user-select: none;\n      }\n\n      @media (min-width: 768px) {\n        .bd-placeholder-img-lg {\n          font-size: 3.5rem;\n        }\n      }\n\n      .b-example-divider {\n        height: 3rem;\n        background-color: rgba(0, 0, 0, .1);\n        border: solid rgba(0, 0, 0, .15);\n        border-width: 1px 0;\n        box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);\n      }\n\n      .b-example-vr {\n        flex-shrink: 0;\n        width: 1.5rem;\n        height: 100vh;\n      }\n\n      .bi {\n        vertical-align: -.125em;\n        fill: currentColor;\n      }\n\n      .nav-scroller {\n        position: relative;\n        z-index: 2;\n        height: 2.75rem;\n        overflow-y: hidden;\n      }\n\n      .nav-scroller .nav {\n        display: flex;\n        flex-wrap: nowrap;\n        padding-bottom: 1rem;\n        margin-top: -1px;\n        overflow-x: auto;\n        text-align: center;\n        white-space: nowrap;\n        -webkit-overflow-scrolling: touch;\n      }\n    " }} />
                {/* Custom styles for this template */}
              <link href="dashboard.css" rel="stylesheet" />
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
     </div>
      
    );
    
  }

export default Panel;
