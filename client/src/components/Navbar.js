import React, { useEffect, useContext, useState } from 'react';
import { LocationGlobalContext } from '../context/Location/LocationsContext';
import { Link } from 'react-router-dom';

import PinButton from '../components/PinLocation/PinButton';

export default function Navbar() {
  const { pinnedStatusCheck } = useContext(LocationGlobalContext);

  const [registerLink, setRegisterLink] = useState('nav-item');
  const [reportsLink, setReportsLink] = useState('nav-item');

  // useEffect(() => {
  // const setActive = () => {
  //   if (window.location.href === 'http://localhost:3000/pos') {
  //     setRegisterLink('nav-item active');
  //     setReportsLink('nav-item');
  //   } else if (window.location.href === 'http://localhost:3000/reports') {
  //     setRegisterLink('nav-item');
  //     setReportsLink('nav-item active');
  //   } else {
  //     setReportsLink('nav-item');
  //     setRegisterLink('nav-item');
  //   }
  // };
  // }, []);

  useEffect(() => {
    pinnedStatusCheck();
    // setActive();
  }, []);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-brand ">
          <a href="/">
            <img
              className="img-thumbnail"
              src="./StreetSmartsLogo3.jpg"
              alt="logo"
              // width="600px"
              // height="600px"
            />
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
            <li className={registerLink}>
              <Link className="nav-link" to="/pos">
                Register
              </Link>
            </li>
            <li className={reportsLink}>
              <Link className="nav-link" to="/reports">
                Reports
              </Link>
            </li>
          </ul>
        </div>

        <PinButton />
      </nav>
    </>
  );
}
