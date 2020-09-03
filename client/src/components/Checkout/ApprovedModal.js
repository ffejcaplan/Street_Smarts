import React from 'react';
import { MDBBtn } from 'mdbreact';
// test

function Modal() {
  return (
    <div>
      <MDBBtn
        data-toggle="modal"
        data-target="#centralModalSuccess"
        gradient="blue"
      >
        Submit
      </MDBBtn>

      {/* <!-- Central Modal Medium Success --> */}
      <div
        class="modal fade"
        id="centralModalSuccess"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div
          class="modal-dialog-centered modal-notify modal-success"
          role="document"
        >
          {/* <!--Content--> */}
          <div class="modal-content">
            <div class="modal-footer justify-content-center">
              <a
                type="button"
                class="btn btn-outline-success waves-effect"
                data-dismiss="modal"
              >
                Payment Posted Successfully
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
