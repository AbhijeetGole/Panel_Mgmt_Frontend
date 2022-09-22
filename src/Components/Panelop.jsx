import React from 'react';
import { Link } from 'react-router-dom';
class Panel extends React.Component 
{
    render() 
    {
      return (
     <div>
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
  }

export default Panel;
