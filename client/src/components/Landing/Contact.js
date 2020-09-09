import React from 'react';
import emailjs from 'emailjs-com';
import '../../App.css';

function Contact() {
  function sendEmail(event) {
    event.preventDefault();

    emailjs
      .sendForm(
        'gmail',
        'template_kb7gb0i',
        event.target,
        'user_QPYRjvpaTLkpE5xJ3LelY'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    event.target.reset();
  }

  return (
    <section className="page-section" id="contact">
      <br />
      <br />
      <br />
      <div className="container" id="contacts">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Contact Us</h2>
            <h3 className="section-subheading text-muted">
              {/* Lorem ipsum dolor sit amet consectetur. */}
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <form
              id="contactForm"
              name="sentMessage"
              novalidate="novalidate"
              onSubmit={sendEmail}
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      id="name"
                      type="text"
                      placeholder="Your Name *"
                      required="required"
                      data-validation-required-message="Please enter your name."
                      name="name"
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      id="email"
                      type="email"
                      placeholder="Your Email *"
                      required="required"
                      data-validation-required-message="Please enter your email address."
                      name="email"
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      id="phone"
                      type="tel"
                      placeholder="Your Phone *"
                      required="required"
                      data-validation-required-message="Please enter your phone number."
                      name="phone"
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      id="message"
                      placeholder="Your Message *"
                      required="required"
                      data-validation-required-message="Please enter a message."
                      name="message"
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="clearfix"></div>
                <div className="col-lg-12 text-center">
                  <div id="success"></div>
                  <button
                    id="sendMessageButton"
                    className="btn btn-black btn-xl text-uppercase font-weight-bold"
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
