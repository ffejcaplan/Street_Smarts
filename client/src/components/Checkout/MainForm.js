import React, { Component } from "react";
import Credit from './CreditCard';
import Cash from './Cash';
import Totals from '../POS/Totals';
import '../../App.css';

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
    return (
      <div className="container py-5">
        {/* For demo purpose */}
        <div className="row mb-4">
          <div className="col-lg-8 mx-auto text-center">
            <h1 className="display-4">Street Smarts Payment</h1>
          </div>
        </div>
        {/* End */}
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="card ">
              <div className="card-header">
                <div className="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">
                  {/* form tabs */}
                  <ul
                    role="tablist"
                    className="nav bg-light nav-pills rounded nav-fill mb-3"
                  >
                    <li className="nav-item">
                      <a
                        data-toggle="pill"
                        href="#credit-card"
                        // className="nav-link"
                        onClick={() =>
                          this.handleComponentChange('credit-card')
                        }
                        className={
                          this.state.currentComponent === 'credit-card'
                        }
                      >
                        Credit Card Payment
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        data-toggle="pill"
                        href="#cash"
                        // className="nav-link"
                        onClick={() => this.handleComponentChange('cash')}
                        className={this.currentComponent === 'cash'}
                      >
                        Cash Payment
                      </a>
                    </li>
                  </ul>
                </div>{' '}
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