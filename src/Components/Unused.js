import React from 'react';
import "./Assets/getallslots.module.css";

const Unused=()=>  
{
      return (
        <div>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <title />
          <meta name="description" content />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link href="//db.onlinewebfonts.com/c/bb018e64d01355748d8ddc53553850b9?family=Cerebri+Sans" rel="stylesheet" type="text/css" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.1.2/css/fontawesome.min.css" integrity="sha384-X8QTME3FCg1DLb58++lPvsjbQoCT9bp3MsUU3grbIny/3ZwUJkRNO8NPW6zqzuW9" crossOrigin="anonymous" />
          <link rel="stylesheet" href="/styles/styles.css" />
          <link rel="stylesheet" href="getallslots.css" />
          <div className="position-fixed top-0 end-0 start-0 bg-img-start bg-image" />
          <div className="container">
            <div className="row">
              <div className="min-vh-100 d-flex justify-content-center"style={{'width':'90%','margin-left': '10%'}}>
                <div className="col-12 col-md-10 col-xl-10 my-5">
                  <div className="card">
                    <h2 className="text-center mb-3 mt-3">Unused Slots</h2>
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
                              <a href="#" className="text-muted"> Id </a>
                            </th>
                            <th>
                              <a href="#" className="text-muted"> Panel </a>
                            </th>
                            <th>
                              <a href="#" className="text-muted"> Start Date </a>
                            </th>
                            <th>
                              <a href="#" className="text-muted"> End Date </a>
                            </th>
                            <th>
                              <a href="#" className="text-muted"> Time </a>
                            </th>
                            <th>
                              <a href="#" className="text-muted"> Duration </a>
                            </th>
                            <th colSpan={2}>
                              <a href="#" className="text-muted"> Skills </a>
                            </th>
                            <th>
                              <a href="#" className="text-muted"> Status </a>
                            </th>
                            <th>
                              <a href="#" className="text-muted"> Used </a>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="list">
                          <tr>
                            <td>
                              <div className="form-check mb-n2">
                                <input className="form-check-input list-checkbox" type="checkbox" id="slotSelectOne" />
                                <label className="form-check-label" htmlFor="slotSelectOne">&nbsp;</label>
                              </div>
                            </td>
                            <td>#12</td>
                            <td>Alice H</td>
                            <td>05/05/2022</td>
                            <td>15/05/2022</td>
                            <td>01:00 PM</td>
                            <td>2 hour</td>
                            <td colSpan={2}>React, Angular</td>
                            <td>
                              <span className="badge rounded-pill text-bg-success">Booked</span>
                            </td>
                            <td>false</td>
                            <td><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                              </svg></td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check mb-n2">
                                <input className="form-check-input list-checkbox" type="checkbox" id="slotSelectOne" />
                                <label className="form-check-label" htmlFor="slotSelectOne">&nbsp;</label>
                              </div>
                            </td>
                            <td>#13</td>
                            <td>James Anderson</td>
                            <td>08/05/2022</td>
                            <td>09/05/2022</td>
                            <td>04:00 PM</td>
                            <td>2 hour</td>
                            <td colSpan={2}>Javascript, Django</td>
                            <td>
                              <span className="badge rounded-pill text-bg-success">Booked</span>
                            </td>
                            <td>false</td>
                            <td><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                              </svg></td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check mb-n2">
                                <input className="form-check-input list-checkbox" type="checkbox" id="slotSelectOne" />
                                <label className="form-check-label" htmlFor="slotSelectOne">&nbsp;</label>
                              </div>
                            </td>
                            <td>#14</td>
                            <td>Michael Jackson</td>
                            <td>07/05/2022</td>
                            <td>13/05/2022</td>
                            <td>01:00 PM</td>
                            <td>2 hour</td>
                            <td colSpan={2}>SQL, PHP</td>
                            <td>
                              <span className="badge rounded-pill text-bg-success">Booked</span>
                            </td>
                            <td>false</td>
                            <td><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                              </svg></td>
                          </tr>
                        </tbody>
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

export default Unused;