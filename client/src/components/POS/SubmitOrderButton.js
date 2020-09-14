import React, { useContext, useState } from 'react';
import { PosGlobalContext } from '../../context/POS/PosContext';
import { Modal } from 'react-bootstrap';
import {
  MDBInput,
  // MDBContainer,
  // MDBRow,
  // MDBCol,
  MDBBtn,
  MDBAlert,
} from 'mdbreact';

export default function SubmitOrderButton() {
  const { setCheckout, setTotals, orderTotal, setCustomerName } = useContext(
    PosGlobalContext
  );
  const [modalShow, setModalShow] = useState(false);
  const [nameModalShow, setNameModalShow] = useState(false);
  const [showError, setShowError] = useState('invisible');
  const [nameInput, setNameInput] = useState();

  const ErrorModal = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body
          className="text-center"
          style={{ border: 'solid black 1px' }}
        >
          <MDBBtn
            gradient="success"
            onClick={() => {
              setModalShow(false);
            }}
          >
            There Are No Items For Checkout
          </MDBBtn>
        </Modal.Body>
      </Modal>
    );
  };

  const handleNameInput = (e) => {
    setNameInput(e.target.value);
  };

  const NameModalShow = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body
          className="text-center"
          style={{ border: 'solid black 1px' }}
        >
          <MDBBtn
            className="float-left btn-warning"
            gradient="alert"
            onClick={() => {
              setNameModalShow(false);
            }}
          >
            Back
          </MDBBtn>
          <br />
          <br />
          <br />
          <MDBInput
            className="form-control"
            label="Customer Name"
            type="text"
            name="custumerName"
            value={nameInput}
            onChange={(e) => handleNameInput(e)}
          ></MDBInput>
          <br />
          <MDBBtn
            gradient="success"
            onClick={() => {
              // setNameModalShow(false);
              if (nameInput) {
                setCustomerName(nameInput);
                setCheckout(true);
                setTotals();
              } else if (!nameInput) {
                setShowError('visible');
              }
            }}
          >
            Submit
          </MDBBtn>
          <MDBAlert
            className={showError}
            color="danger"
            hide={true}
            onHide={() => {
              setShowError(false);
            }}
            style={{ color: 'red' }}
          >
            Please Enter Customer Name
          </MDBAlert>
        </Modal.Body>
      </Modal>
    );
  };

  const handleClick = () => {
    // if (orderTotal === 0) {
    // setModalShow(true);

    // setModalShow(true)
    // } else if (orderTotal !== 0) {
    setNameModalShow(true);

    //These move to sucess modal after name is taken
    // }
  };

  return (
    <>
      <ErrorModal
        show={modalShow}
        onHide={() => {
          setModalShow(false);
        }}
      />
      <Modal
        show={nameModalShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body
          className="text-center"
          style={{ border: 'solid black 1px' }}
        >
          <MDBBtn
            className="float-left btn-warning"
            gradient="alert"
            onClick={() => {
              setNameModalShow(false);
            }}
          >
            Back
          </MDBBtn>
          <br />
          <br />
          <br />
          <MDBInput
            className="form-control"
            label="Customer Name"
            type="text"
            name="custumerName"
            value={nameInput}
            onChange={(e) => handleNameInput(e)}
          ></MDBInput>
          <br />
          <MDBBtn
            gradient="success"
            onClick={() => {
              // setNameModalShow(false);
              if (nameInput) {
                setCustomerName(nameInput);
                setCheckout(true);
                setTotals();
              } else if (!nameInput) {
                setShowError('visible');
              }
            }}
          >
            Submit
          </MDBBtn>
          <MDBAlert
            className={showError}
            color="danger"
            hide={true}
            onHide={() => {
              setShowError(false);
            }}
            style={{ color: 'red' }}
          >
            Please Enter Customer Name
          </MDBAlert>
        </Modal.Body>
      </Modal>

      <button className="btn btn-primary" onClick={handleClick}>
        Checkout
      </button>
    </>
  );
}
