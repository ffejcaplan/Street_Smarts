// need state variables to keep track of user input
import React, { useState } from 'react';
// importing cards component from library
import Cards from 'react-credit-cards';
// importing css that library provides
import 'react-credit-cards/es/styles-compiled.css';
// importing material UI components
import { MDBInput, MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
// importing modal
import Modal from './ApprovedModal';
// import '../App.css';

function Credit() {
  // declaring state variables
  // credit card number state
  const [number, setNumber] = useState('');
  // name on credit card state
  const [name, setName] = useState('');
  // expriation date of card state
  const [expiry, setExpiry] = useState('');
  // 3 digit cvc on back of card
  const [cvc, setCvc] = useState('');
  // variable that the library component needs for styling and animation
  const [focus, setFocus] = useState('');

  const inputStyle = {
    marginTop: '2em',
    width: '20em',
  };

  return (
    // defining the form that collects credit card values in JSX
    <div className="Form">
      <br />
      <Cards
        number={number}
        name={name}
        expiry={expiry}
        cvc={cvc}
        focused={focus}
        style={inputStyle}
      />
      <form>
        {/* input 1 = card number */}
        <MDBContainer>
          <MDBRow>
            <MDBCol>
              <MDBInput
                label="Card Number"
                type="tel"
                name="number"
                // placeholder="Card Number"
                value={number}
                onChange={(event) => setNumber(event.target.value)}
                onFocus={(event) => setFocus(event.target.name)}
                style={inputStyle}
                size="lg"
                maxLength="16"
              />
            </MDBCol>
          </MDBRow>
          <br />
          {/* input 2 = card holder name */}
          <MDBInput
            label="Cardholder Name"
            type="text"
            name="name"
            // placeholder="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            onFocus={(event) => setFocus(event.target.name)}
            style={inputStyle}
            size="lg"
            maxLength="36"
          />
          <br />
          {/* input 3 = card expiration date */}
          <MDBInput
            label="MM/YY Exp"
            type="text"
            name="expiry"
            // placeholder="MM/YY Exp"
            value={expiry}
            onChange={(event) => setExpiry(event.target.value)}
            onFocus={(event) => setFocus(event.target.name)}
            style={inputStyle}
            size="lg"
            maxLength="5"
          />
          <br />
          {/* input 4 = 3 digit cvc number */}
          <MDBInput
            label="CVC Number"
            type="tel"
            name="cvc"
            // placeholder="CVC"
            value={cvc}
            onChange={(event) => setCvc(event.target.value)}
            onFocus={(event) => setFocus(event.target.name)}
            style={inputStyle}
            size="lg"
            maxLength="3"
          />
          <br />
          <Modal />
        </MDBContainer>
      </form>
    </div>
  );
}

export default Credit;

// SAMPLE VALID CREDIT CARD NUMBERS
// Credit card numbers are not random. They can be checked by a mathematical formula for validity.
// Each kind of credit card uses a slightly different rule. For details, see the source code in FormChek.js.

// This sample form checks credit cards for validity, so you must enter a valid credit card number.
// Use one of the sample numbers from this list:

// Credit Card 	Sample Number
// Visa 	4111 1111 1111 1111
// MasterCard 	5500 0000 0000 0004
// American Express 	3400 0000 0000 009
// Diner's Club 	3000 0000 0000 04
// Carte Blanche 	3000 0000 0000 04
// Discover 	6011 0000 0000 0004
// en Route 	2014 0000 0000 009
// JCB 	3088 0000 0000 0009
