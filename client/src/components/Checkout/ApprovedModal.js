// import React, { useState, useContext } from 'react';
// import { MDBBtn } from 'mdbreact';
// import '../../App.css';
// import { Modal } from 'react-bootstrap';

// function MyVerticallyCenteredModal(props) {
//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Body className="text-center">
//         <MDBBtn gradient="success" onClick={props.onHide}>
//           Payment Posted Successfully
//         </MDBBtn>
//       </Modal.Body>
//     </Modal>
//   );
// }

// function Modals() {
//   const [modalShow, setModalShow] = React.useState(false);

//   return (
//     <>
//       <MDBBtn gradient="blue" onClick={() => setModalShow(true)}>
//         Process
//       </MDBBtn>

//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </>
//   );
// }

// export default Modals;
