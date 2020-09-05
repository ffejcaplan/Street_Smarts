import React from 'react';
import '../../App.css';

function Services() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="row" id="services">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Services</h2>
            <h3 className="section-subheading text-muted">
              {/* Lorem ipsum dolor sit amet consectetur. */}
            </h3>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-warning"></i>
              <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">Point of Sale</h4>
            <p className="text-muted">
              Impact the success of your food truck operations with our cutting
              edge POS system, applicable to whether you're operating 1 or 100
              trucks.
            </p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-warning"></i>
              <i className="fa fa-mobile fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">Responsive Design</h4>
            <p className="text-muted">
              Added flexibility to operate your POS software on any device
              including mobile, tablet or desktop.
            </p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-warning"></i>
              <i className="fa fa-database fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">Robust Reporting</h4>
            <p className="text-muted">
              View current and historical sales figures by location and with
              graphs for enhanced visualization.
            </p>
          </div>
          <div className="row text-center">
            <div className="col-md-6">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-warning"></i>
                <i className="fa fa-map-marker fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">GPS Maps</h4>
              <p className="text-muted">
                Pin the location of your food truck and allow the customers to
                find you using our GPS location services, which allows for sales
                tracking by location.
              </p>
            </div>
            <div className="col-md-6">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-warning"></i>
                <i className="fa fa-comment fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">SMS Notification</h4>
              <p className="text-muted">
                Don't keep your customers waiting, let them know their order is
                complete with our robust text notification system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
