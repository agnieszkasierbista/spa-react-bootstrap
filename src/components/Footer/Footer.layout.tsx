import React from 'react';

export const Footer = () => {
  return (
    <div className="text-center text-lg-start bg-light text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-lg-block">
          <span>Social networks:</span>
        </div>

        <div>
          <a
            href=""
            className="me-4 text-reset"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href=""
            className="me-4 text-reset"
          >
            <i className="bi bi-twitter"></i>
          </a>
          <a
            href=""
            className="me-4 text-reset"
          >
            <i className="bi bi-google"></i>
          </a>
          <a
            href=""
            className="me-4 text-reset"
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a
            href=""
            className="me-4 text-reset"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href=""
            className="me-4 text-reset"
          >
            <i className="bi bi-github"></i>
          </a>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Agnieszka Sierbista
              </h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Architecto aspernatur molestias sequi.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Skills</h6>
              <p>
                <a
                  href=""
                  className="text-reset"
                >
                  JavaScript
                </a>
              </p>
              <p>
                <a
                  href=""
                  className="text-reset"
                >
                  React
                </a>
              </p>
              <p>
                <a
                  href=""
                  className="text-reset"
                >
                  Redux
                </a>
              </p>
              <p>
                <a
                  href=""
                  className="text-reset"
                >
                  Typescript
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a
                  href=""
                  className="text-reset"
                >
                  Portfolio
                </a>
              </p>
              <p>
                <a
                  href=""
                  className="text-reset"
                >
                  About
                </a>
              </p>
              <p>
                <a
                  href=""
                  className="text-reset"
                >
                  Other
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="bi bi-house"></i> Address
              </p>
              <p>
                <i className="bi bi-envelope"></i> as@solutions.com
              </p>
              <p>
                <i className="bi bi-phone"></i> + 0123456789
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4">
        © 2023 Copyright: Agnieszka Sierbista
      </div>
    </div>
  );
};
