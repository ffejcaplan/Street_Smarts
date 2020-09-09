import React, { Component } from 'react';
import Credit from './CreditCard';
import Cash from './Cash';
import Totals from '../POS/Totals';

import { Nav } from 'react-bootstrap';

// import Totals from '../POS/Totals';
// import '../../App.css';

class Form extends Component {
  state = {
    currentComponent: 'null',
  };

  handleComponentChange = (component) => {
    this.setState({ currentComponent: component });
  };

  RenderComponent = () => {
    if (this.state.currentComponent === 'credit-card') {
      return <Credit />;
    } else if (this.state.currentComponent === 'cash') {
      return <Cash />;
    } else {
      return null;
    }
  };

  render() {
    console.log(this.props);
    return (
      <div className="container py-1">
        {/* For demo purpose */}
        <div className="row mb-4">
          <div className="col-lg-8 mx-auto text-center">
            <h1 className="display-4" style={{ fontSize: '32px' }}>
              Street Smarts Payment
            </h1>
          </div>
        </div>
        {/* End */}
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="card ">
              <div className="card-header">
                <div className="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">
                  {/* form tabs */}
                  <Nav variant="pills">
                    <ul
                      role="tablist"
                      className="nav bg-light nav-pills rounded nav-fill mb-3 col-12 p-1"
                    >
                      <li className="nav-item">
                        <Nav.Link
                          eventKey="link-1"
                          data-toggle="pill"
                          href="#credit-card"
                          onClick={() =>
                            this.handleComponentChange('credit-card')
                          }
                          className={
                            this.state.currentComponent === 'credit-card'
                          }
                        >
                          Credit Card Payment
                        </Nav.Link>
                      </li>
                      <li className="nav-item">
                        <Nav.Link
                          eventKey="link-2"
                          data-toggle="pill"
                          href="#cash"
                          // className="nav-link"
                          onClick={() => this.handleComponentChange('cash')}
                          className={this.currentComponent === 'cash'}
                        >
                          Cash Payment
                        </Nav.Link>
                      </li>
                    </ul>
                  </Nav>
                </div>
                {this.RenderComponent()}
              </div>
              {/* <Totals /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
