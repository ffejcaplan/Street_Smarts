import React from 'react';
import '../../App.css';
import TitleMessage from './TitleMessage';
import Nav from './Navbar';

function Main() {
  return (
    <header className="masthead">
      <div className="container">
        <Nav />
        <div className="intro-text">
          <TitleMessage />
          <div className="intro-heading text-uppercase"></div>
          <a
            className="btn btn-black btn-xl text-uppercase text-white js-scroll-trigger font-weight-bold"
            href="#services"
          >
            Tell Me More
          </a>
        </div>
      </div>
    </header>
  );
}

export default Main;
