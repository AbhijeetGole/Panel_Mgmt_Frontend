import React from 'react';
import "./Assets/createslot.module.css";
class Createslot extends React.Component 
{
    render() 
    {
      return (
        <div>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <title />
          <meta name="description" content />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous" />
          <link href="//db.onlinewebfonts.com/c/bb018e64d01355748d8ddc53553850b9?family=Cerebri+Sans" rel="stylesheet" type="text/css" />
          <link rel="stylesheet" href="/styles/styles.css" />
          <link rel="stylesheet" href="createslot.css" />
          <div className="position-fixed top-0 end-0 start-0 bg-img-start bg-image">
          </div>
          <div className="container">
            <div className="row">
              <div className="min-vh-100 d-flex align-items-center justify-content-center">
                <div className="col-12 col-md-10 col-xl-5 my-5">
                  <div className="card">
                    <div className="card-body">
                      <h2 className="text-center mb-3">Create a Slot</h2>
                      <form>
                        <div className="form-group mb-3">
                          <label className="form-label"> Panel </label>
                          <input type="text" className="form-control" placeholder="Enter panel name" />
                        </div>
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="form-group mb-3">
                              <label className="form-label"> Start Date </label>
                              <input type="date" className="form-control" placeholder="Enter your first name" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group mb-3">
                              <label className="form-label"> End Date </label>
                              <input type="date" className="form-control" placeholder="Enter your last name" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="form-group mb-3">
                              <label className="form-label"> Time </label>
                              <input type="time" className="form-control" placeholder="Enter your first name" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group mb-3">
                              <label className="form-label"> Duration(in hours) </label>
                              <input type="number" className="form-control" placeholder="Enter duration" />
                            </div>
                          </div>
                        </div>
                        <div className="form-group mb-3">
                          <label className="form-label"> Skills </label>
                          <input type="text" className="form-control" placeholder="Java, React etc." />
                        </div>
                        <div className="form-check form-switch mb-3">
                          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" defaultChecked />
                          <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Used</label>
                        </div>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                          <button className="btn btn-warn me-md-2" type="button">Cancel</button>
                          <button className="btn btn-primary" type="button">Submit</button>
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
  }

export default Createslot;