import React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { Modal } from 'react-bootstrap';

import {
  MDBInput,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBAlert,
} from 'mdbreact';

export default function Map(props) {
  console.log(props.mapdata);
  return (
    <>
      {' '}
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
      </Modal>{' '}
    </>
  );
}
