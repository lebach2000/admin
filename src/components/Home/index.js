import React from 'react';
import { compose } from 'recompose';

import { withAuthorization } from '../Session';

const HomePage = () => (
  <div>
    <div id="wrapper">
      <div id="content-wrapper">
        <div className="container-fluid">
          {/* Breadcrumbs*/}
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Dashboard</a>
            </li>
            <li className="breadcrumb-item active">Overview</li>
          </ol>
          {/* Icon Cards*/}
          <div className="row">
            <div className="col-xl-3 col-sm-6 mb-3">
              <div className="card text-white bg-primary o-hidden h-100">
                <div className="card-body">
                  <div className="card-body-icon">
                    <i className="fas fa-fw fa-comments"/>
                  </div>
                  <div className="mr-5">26 New Messages!</div>
                </div>
                <a className="card-footer text-white clearfix small z-1" href="/">
                  <span className="float-left">View Details</span>
                  <span className="float-right">
                <i className="fas fa-angle-right"/>
              </span>
                </a>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-3">
              <div className="card text-white bg-warning o-hidden h-100">
                <div className="card-body">
                  <div className="card-body-icon">
                    <i className="fas fa-fw fa-list"/>
                  </div>
                  <div className="mr-5">11 New Tasks!</div>
                </div>
                <a className="card-footer text-white clearfix small z-1" href="/">
                  <span className="float-left">View Details</span>
                  <span className="float-right">
                <i className="fas fa-angle-right"/>
              </span>
                </a>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-3">
              <div className="card text-white bg-success o-hidden h-100">
                <div className="card-body">
                  <div className="card-body-icon">
                    <i className="fas fa-fw fa-shopping-cart"/>
                  </div>
                  <div className="mr-5">123 New Orders!</div>
                </div>
                <a className="card-footer text-white clearfix small z-1" href="/">
                  <span className="float-left">View Details</span>
                  <span className="float-right">
                <i className="fas fa-angle-right"/>
              </span>
                </a>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-3">
              <div className="card text-white bg-danger o-hidden h-100">
                <div className="card-body">
                  <div className="card-body-icon">
                    <i className="fas fa-fw fa-life-ring"/>
                  </div>
                  <div className="mr-5">13 New Tickets!</div>
                </div>
                <a className="card-footer text-white clearfix small z-1" href="/">
                  <span className="float-left">View Details</span>
                  <span className="float-right">
                <i className="fas fa-angle-right"/>
              </span>
                </a>
              </div>
            </div>
          </div>
          {/* Area Chart Example*/}
          <div className="card mb-3">
            <div className="card-header">
              <i className="fas fa-chart-area"/>
              Area Chart Example
            </div>
            <div className="card-body">
              <canvas id="myAreaChart" width="100%" height={30}/>
            </div>
            <div className="card-footer small text-muted">
              Updated yesterday at 11:59 PM
            </div>
          </div>
          {/* DataTables Example */}
          <div className="card mb-3">
            <div className="card-header">
              <i className="fas fa-table"/>
              Data Table Example
            </div>
            <div className="card-body mb-3">
              <div className="table-responsive">
                <table
                  className="table table-bordered"
                  id="dataTable"
                  width="100%"
                  cellSpacing={0}
                >
                  <thead>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Start date</th>
                    <th>Salary</th>
                  </tr>
                  </thead>
                  <tfoot>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Start date</th>
                    <th>Salary</th>
                  </tr>
                  </tfoot>
                  <tbody>
                  <tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>$320,800</td>
                  </tr>
                  <tr>
                    <td>nany</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>$320,800</td>
                  </tr>
                  <tr>
                    <td>Garrett Winters</td>
                    <td>Accountant</td>
                    <td>Tokyo</td>
                    <td>63</td>
                    <td>2011/07/25</td>
                    <td>$170,750</td>
                  </tr>
                  <tr>
                    <td>Ashton Cox</td>
                    <td>Junior Technical Author</td>
                    <td>San Francisco</td>
                    <td>66</td>
                    <td>2009/01/12</td>
                    <td>$86,000</td>
                  </tr>
                  <tr>
                    <td>Cedric Kelly</td>
                    <td>Senior Javascript Developer</td>
                    <td>Edinburgh</td>
                    <td>22</td>
                    <td>2012/03/29</td>
                    <td>$433,060</td>
                  </tr>
                  <tr>
                    <td>Airi Satou</td>
                    <td>Accountant</td>
                    <td>Tokyo</td>
                    <td>33</td>
                    <td>2008/11/28</td>
                    <td>$162,700</td>
                  </tr>
                  <tr>
                    <td>Brielle Williamson</td>
                    <td>Integration Specialist</td>
                    <td>New York</td>
                    <td>61</td>
                    <td>2012/12/02</td>
                    <td>$372,000</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="card-footer small text-muted">
              Updated yesterday at 11:59 PM
            </div>
          </div>
        </div>
        <footer className="sticky-footer">
          <div className="container my-auto">
            <div className="copyright text-center my-auto">
              <span>Copyright © Your Website 2019</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
);

// const condition = authUser => !!authUser;
//
// console.log(condition);
//
export default compose(
  withAuthorization(authUser => !!authUser),
)(HomePage);
// export default HomePage;
