// need state variables to keep track of user input
import React, { useState, useEffect } from 'react';

// importing material UI components
import { MDBInput, MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
// importing modal

import Modal from './ApprovedModal';
// import '../../App.css';

// importing react-number-format
// import NumberFormat from 'react-number-format';

function Cash() {
  // declaring state variables
  // amount due input
  const [due, setDue] = useState('');
  // amount calculated input (result)
  const [currentSum, setCurrentSum] = useState('');
  // amount received input
  const [received, setReceived] = useState('0.00');
  // clear function
  const [clear, setClear] = useState('');

  const inputStyle = {
    marginTop: '2em',
    width: '20em',
  };

  useEffect(() => {
    setCurrentSum('');
  }, []);

  useEffect(() => {
    if (clear) setCurrentSum('');
  });

  const Calculate = (event) => {
    event.preventDefault();
    if (clear) setClear(false);
    let amtDue = parseFloat(due).toFixed(2);
    console.log(parseInt(amtDue));
    let amtRec = parseFloat(received).toFixed(2);
    console.log(parseInt(amtRec));
    if (amtDue == '') return;
    let sum = parseFloat(amtDue - amtRec).toFixed(2);
    console.log(sum);
    setCurrentSum(sum);
  };

  const Clear = (event) => {
    event.preventDefault();
    setClear(true);
    setCurrentSum('');
    setDue('');
    setReceived('');
  };

  return (
    <div className="Form">
      <br />
      <MDBRow>
        <MDBCol md="12" sm="12" xs="12">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7b/United_States_one_dollar_bill%2C_obverse.jpg"
            style={{
              width: '425px',
              height: '190px',
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          />
        </MDBCol>
      </MDBRow>
      <form>
        {/* input 1 = Amt Due */}
        <MDBContainer>
          <MDBRow>
            <MDBCol>
              <MDBInput
                label="Amount Due"
                id="due"
                type="number"
                name="due"
                value={due}
                onChange={(event) => setDue(event.target.value)}
                style={inputStyle}
                size="lg"
                pattern="^\d+(\.|\,)\d{2}$"
                min="0.00"
                step="0.01"
                max="1000"
              />
            </MDBCol>
          </MDBRow>
          <br />
          {/* input 2 = Amt Received */}
          <MDBInput
            label="Amount Received"
            id="num"
            type="number"
            name="received"
            value={received}
            onChange={(event) => setReceived(event.target.value)}
            style={inputStyle}
            size="lg"
            min="0.00"
            step="0.01"
            max="1000"
          />
          <br />
          {/* input 3 = Return Amt */}
          <MDBInput
            label="Return Amount"
            id="result"
            type="number"
            name="return"
            value={currentSum}
            // onChange={(event) => setExpiry(event.target.value)}
            style={inputStyle}
            size="lg"
            min="0.00"
            step="0.01"
            max="1000"
            readOnly
          />
          <br />
          <MDBBtn gradient="blue" onClick={Calculate}>
            Calculate
          </MDBBtn>
          <MDBBtn gradient="blue" onClick={Clear}>
            Clear
          </MDBBtn>
          <Modal />
        </MDBContainer>
      </form>
    </div>
  );
}

export default Cash;

{
  /* <NumberFormat
              value={received}
              label="Amount Received"
              displayType={'input'}
              thousandSeparator={true}
              prefix={'$'}
              decimalScale={'2'}
              fixedDecimalScale={'true'}
              size={'lg'}
            /> */
}
