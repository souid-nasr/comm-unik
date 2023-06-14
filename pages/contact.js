import React from "react";

function page() {
  return (
    <>

      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <div>
            <iframe
              style={{ border: "0", width: "100%", height: "340px" }}
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12789.70526278776!2d10.307573161376952!3d36.736336954939986!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd49c1d44a804d%3A0xc0b9deb367f96013!2sUnik%20espace!5e0!3m2!1sfr!2stn!4v1686233163552!5m2!1sfr!2stn"
              allowFullScreen
            ></iframe>
          </div>

          <div className="row gy-4 mt-4">
            <div className="col-lg-4">
              <div className="info-item d-flex">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h4>Adresse:</h4>
                  <p>P8P4+JX Ez Zahra Ben Arous</p>
                </div>
              </div>

              <div className="info-item d-flex">
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h4>Email:</h4>
                  <p>contact@unik-espace.com</p>
                </div>
              </div>

              <div className="info-item d-flex">
                <i className="bi bi-phone flex-shrink-0"></i>
                <div>
                  <h4>Tel:</h4>
                  <p>+216 98 188 622</p>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                className="php-email-form"
              >
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
