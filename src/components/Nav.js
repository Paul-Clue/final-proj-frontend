import React from 'react';
import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import Filter from './Filter';
import '../assets/stylesheets/Nav.css';

function Nav() {
  return (
    <>
      <nav className="navbar navbar-light ">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">
            <h1 className="NavHead">
              <span className="dollar">
                $$
              </span>
              CRYPTO
              <span className="dollar">
                $$
              </span>
            </h1>
          </span>
          <div>
            <Link className="Link home" to="/Home">
              Home
            </Link>
          </div>
          <div>
            <Link className="Link login1" to="/Appoint">
              View your appointment.
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
