import React from 'react';
import { Link } from 'react-router-dom';

import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut';
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
    <nav className="navbar navbar-expand navbar-dark bg-dark static-top" style={{ marginBottom: -16 }}>
      <div className="nav-item active">
        <a className="nav-link navbar-brand mr-1 btn btn-secondary" href="/">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </a>
      </div>
      <div className="nav-item">
        <a className="nav-link navbar-brand mr-1 btn btn-secondary" href="/createproduct">
          <i className="fas fa-marker"></i>
          <span>Create product</span>
        </a>
      </div>
      <div className="nav-item">
        <div className="dropdown">
          <a

            className="btn btn-secondary dropdown-toggle nav-link navbar-brand mr-1"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fas fa-fw fa-table"></i>
            <span>Tables</span></a
          >
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="/pizza">
              Pizza
            </a>
            <a className="dropdown-item" href="#">
              Drinks
            </a>
            <a className="dropdown-item" href="#">
              Burgers
            </a>
            <a className="dropdown-item" href="#">
              Pasta
            </a>
          </div>
        </div>
      </div>
      <div className="nav-item">
        <a className="nav-link navbar-brand mr-1 btn btn-secondary" href="/user">
          <i className="fas fa-user"></i>
          <span>User list</span>
        </a>
      </div>
      <div className="nav-item">
        <a className="nav-link navbar-brand mr-1 btn btn-secondary" href="/user">
          <i className="fas fa-shopping-cart"></i>
          <span>Deal</span>
        </a>
      </div>



      <SignOutButton/>
    </nav>
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
