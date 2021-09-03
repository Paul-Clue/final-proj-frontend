import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/stylesheets/Nav.css';
import twit from '../assets/img/twitter3.png';
import face from '../assets/img/facebook2.png';
import pint from '../assets/img/pinterest.png';
import goog from '../assets/img/google.png';

function Nav() {
  return (
    <>
      <nav className="nav flex-column navbar-light ">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">
            <h1 className="NavHead">
              FrameFace
            </h1>
          </span>
          <div className="home">
            <Link className="Link home" to="/Home">
              Home
            </Link>
          </div>
          <div className="appoint">
            <Link className="Link login1" to="/Appoint">
              Appointments
            </Link>
          </div>
          <div className="iconDiv">
            <img src={twit} className="icon2" alt="icon" />
            <img src={face} className="icon2" alt="icon" />
            <img src={pint} className="icon2" alt="icon" />
            <img src={goog} className="icon2" alt="icon" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
