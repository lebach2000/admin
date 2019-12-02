import React from 'react';
import { Link } from 'react-router-dom';

import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut';
import TablePizza from '../Tables/PizzaTable';
import * as ROUTES from '../../constants/routes';

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? (
        <NavigationAuth authUser={authUser}/>
      ) : (
        <NavigationNonAuth/>
      )
    }
  </AuthUserContext.Consumer>
);

const NavigationAuth = ({ authUser }) => (
  <div>
    <nav className="navbar navbar-expand navbar-dark bg-dark static-top">
      <a className="navbar-brand mr-1" href="/">
        Start Bootstrap
      </a>
      <button
        className="btn btn-link btn-sm text-white order-1 order-sm-0"
        id="sidebarToggle"
        href="#"
      >
        <i className="fas fa-bars"/>
      </button>
      {/* Navbar Search */}
      <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search for..."
            aria-label="Search"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="button">
              <i className="fas fa-search"/>
            </button>
          </div>
        </div>
      </form>
      {/* Navbar */}
      <ul className="navbar-nav ml-auto ml-md-0">
        <li className="nav-item dropdown no-arrow mx-1">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="alertsDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fas fa-bell fa-fw"/>
            <span className="badge badge-danger">9+</span>
          </a>
          <div
            className="dropdown-menu dropdown-menu-right"
            aria-labelledby="alertsDropdown"
          >
            <a className="dropdown-item" href="#">
              Action
            </a>
            <a className="dropdown-item" href="#">
              Another action
            </a>
            <div className="dropdown-divider"/>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </div>
        </li>
        <li className="nav-item dropdown no-arrow mx-1">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="messagesDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fas fa-envelope fa-fw"/>
            <span className="badge badge-danger">7</span>
          </a>
          <div
            className="dropdown-menu dropdown-menu-right"
            aria-labelledby="messagesDropdown"
          >
            <a className="dropdown-item" href="#">
              Action
            </a>
            <a className="dropdown-item" href="#">
              Another action
            </a>
            <div className="dropdown-divider"/>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </div>
        </li>
        <li className="nav-item dropdown no-arrow">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="userDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fas fa-user-circle fa-fw"/>
          </a>
          <div
            className="dropdown-menu dropdown-menu-right"
            aria-labelledby="userDropdown"
          >
            <a className="dropdown-item" href="#">
              Settings
            </a>
            <a className="dropdown-item" href="#">
              Activity Log
            </a>
            <div className="dropdown-divider"/>
            <SignOutButton/>
          </div>
        </li>
      </ul>
    </nav>
    {/*<div style={{ backgroundColor: '#212529', width: '13%', position: 'absolute', height: '100%',color:'white' }}>*/}
    {/*  <div className="container">*/}

    {/*  </div>*/}
    {/*</div>*/}
    <div id="wrapper" style={{ position: 'absolute', height: '100%' }}>
      {/* Sidebar */}
      <ul className="sidebar navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="/">
            <i className="fas fa-fw fa-tachometer-alt"/>
            <span>Dashboard</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/create">
            <i className="fas fa-marker"/>
            <span>Create</span>
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="pagesDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fas fa-fw fa-folder"/>
            <span>Table</span>
          </a>
          <div className="dropdown-menu" aria-labelledby="pagesDropdown">
            <a className="dropdown-item" href="/pizza-table">
              Pizza
            </a>
            <a className="dropdown-item" href="#">
              Drink
            </a>
            <a className="dropdown-item" href="#">
              Bustar
            </a>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/user">
            <i className="fas fa-fw fa-chart-area"/>
            <span>User</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="tables.html">
            <i className="fas fa-fw fa-table"/>
            <span>Tables</span>
          </a>
        </li>
      </ul>
    </div>
    {/*<nav className="navbar navbar-expand navbar-dark bg-dark static-top" style={{ marginBottom: -16 }}>*/}
    {/*  <div className="nav-item active">*/}
    {/*    <a className="nav-link navbar-brand mr-1 btn btn-secondary" href="/">*/}
    {/*      <i className="fas fa-fw fa-tachometer-alt"></i>*/}
    {/*      <span>Dashboard</span>*/}
    {/*    </a>*/}
    {/*  </div>*/}
    {/*  <div className="nav-item">*/}
    {/*    <a className="nav-link navbar-brand mr-1 btn btn-secondary" href="/createproduct">*/}
    {/*      <i className="fas fa-marker"></i>*/}
    {/*      <span>Create product</span>*/}
    {/*    </a>*/}
    {/*  </div>*/}
    {/*  <div className="nav-item">*/}
    {/*    <div className="dropdown">*/}
    {/*      <a*/}

    {/*        className="btn btn-secondary dropdown-toggle nav-link navbar-brand mr-1"*/}
    {/*        id="dropdownMenuButton"*/}
    {/*        data-toggle="dropdown"*/}
    {/*        aria-haspopup="true"*/}
    {/*        aria-expanded="false"*/}
    {/*      >*/}
    {/*        <i className="fas fa-fw fa-table"></i>*/}
    {/*        <span>Tables</span></a*/}
    {/*      >*/}
    {/*      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">*/}
    {/*        <a className="dropdown-item" href="/pizza">*/}
    {/*          Pizza*/}
    {/*        </a>*/}
    {/*        <a className="dropdown-item" href="#">*/}
    {/*          Drinks*/}
    {/*        </a>*/}
    {/*        <a className="dropdown-item" href="#">*/}
    {/*          Burgers*/}
    {/*        </a>*/}
    {/*        <a className="dropdown-item" href="#">*/}
    {/*          Pasta*/}
    {/*        </a>*/}
    {/*      </div>*/}
    {/*    </div>*/}
    {/*  </div>*/}
    {/*  <div className="nav-item">*/}
    {/*    <a className="nav-link navbar-brand mr-1 btn btn-secondary" href="/user">*/}
    {/*      <i className="fas fa-user"></i>*/}
    {/*      <span>User list</span>*/}
    {/*    </a>*/}
    {/*  </div>*/}
    {/*  <div className="nav-item">*/}
    {/*    <a className="nav-link navbar-brand mr-1 btn btn-secondary" href="/user">*/}
    {/*      <i className="fas fa-shopping-cart"></i>*/}
    {/*      <span>Deal</span>*/}
    {/*    </a>*/}
    {/*  </div>*/}


    {/*  <SignOutButton/>*/}
    {/*</nav>*/}
  </div>
);

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>
  </ul>
);

export default Navigation;
