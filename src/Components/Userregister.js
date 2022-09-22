import React from 'react';
import "./Assets/userregister.module.css";

const Userregister=()=>
{
          return (
            <div>
              <meta charSet="utf-8" />
              <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
              <title />
              <meta name="description" content />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link href="//db.onlinewebfonts.com/c/bb018e64d01355748d8ddc53553850b9?family=Cerebri+Sans" rel="stylesheet" type="text/css" />
              <link rel="stylesheet" href="/styles/styles.css" />
              <link rel="stylesheet" href="user-register.css" />
              <div className="position-fixed top-0 end-0 start-0 bg-img-start bg-image" />
              <div className="container">
                <div className="row">
                  <div className="min-vh-100 d-flex align-items-center justify-content-center">
                    <div className="col-12 col-md-10 col-xl-4 my-5">
                      <div className="card">
                        <div className="card-body">
                          <h2 className="text-center mb-3">Create your account</h2>
                          <div className="text-center mb-5">
                            <small className="text-muted text-center">
                              Already have an account?
                              <a href="sign-up.html" className="text-decoration-none">Sign in here</a>.
                            </small>
                          </div>
                          <form>
                            <div className="row">
                              <div className="col-sm-6">
                                <div className="form-group mb-3">
                                  <label className="form-label"> First Name </label>
                                  <input type="text" className="form-control" placeholder="Enter your first name" />
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="form-group mb-3">
                                  <label className="form-label"> Last Name </label>
                                  <input type="text" className="form-control" placeholder="Enter your last name" />
                                </div>
                              </div>
                            </div>
                            <div className="form-group mb-3">
                              <label className="form-label"> User Name </label>
                              <input type="text" className="form-control" placeholder="Enter your username" />
                            </div>
                            <div className="form-group mb-3">
                              <label className="form-label"> Password </label>
                              <input className="form-control" type="password" placeholder="Enter your password" />
                            </div>
                            <div className="form-group mb-3">
                              <label className="form-label"> Email Address</label>
                              <input type="email" className="form-control" placeholder="name@address.com" />
                            </div>
                            <div className="form-group mb-3">
                              <label className="form-label"> Phone</label>
                              <input type="tel" className="form-control" placeholder="Enter your phone no." />
                            </div>
                            <div className="text-muted mb-4 mt-4">
                              <input className="form-check-input" type="checkbox" defaultValue id="termsCheckbox" required />
                              <label className="form-check-label" htmlFor="termsCheckbox">
                                <small>I accept the
                                  <a href="#" className="text-decoration-none">Terms and Conditions</a></small>
                              </label>
                            </div>
                            <button className="btn btn-lg w-100 btn-primary mb-3">
                              <small>Create an account</small>
                            </button>
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

export default Userregister;