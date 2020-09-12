import React from 'react';
import '../../App.css';
import MySQL from '../../assets/img/mysql.jpg';
import Express from '../../assets/img/express.png';
import ReactJS from '../../assets/img/react.png';
import Node from '../../assets/img/node.png';
import Mapbox from '../../assets/img/mapbox.png';
import Bootstrap from '../../assets/img/bootstrap.jpg';

function Portfolio() {
  return (
    <section className="page-section" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Technology</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-6 portfolio-item">
            <img className="img-fluid" src={MySQL} alt="mapbox logo" />
            <div className="portfolio-caption">
              <h4>MySQL</h4>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 portfolio-item">
            <img className="img-fluid" src={Express} alt="mapbox logo" />
            <div className="portfolio-caption">
              <h4>Express.js</h4>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 portfolio-item">
            <img className="img-fluid" src={ReactJS} alt="mapbox logo" />
            <div className="portfolio-caption">
              <h4>React.js</h4>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 portfolio-item">
            <img className="img-fluid" src={Node} alt="mapbox logo" />
            <div className="portfolio-caption">
              <h4>Node.js</h4>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 portfolio-item">
            <img className="img-fluid" src={Mapbox} alt="mapbox logo" />
            <div className="portfolio-caption">
              <h4>Mapbox</h4>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 portfolio-item">
            <img className="img-fluid" src={Bootstrap} alt="mapbox logo" />
            <div className="portfolio-caption">
              <h4>Bootstrap</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
