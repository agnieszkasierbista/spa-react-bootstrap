import React from 'react';

export const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar-header">
        <a
          className="navbar-brand"
          href="#"
        >
          <i className="bi bi-cpu"></i> Bootstrap examples
        </a>
      </div>

      <div
        className="nav nav-pills"
        id="myTab"
        role="tablist"
      >
        <div
          className="nav-item"
          role="presentation"
        >
          <button
            className="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Home
          </button>
        </div>
        <div
          className="nav-item"
          role="presentation"
        >
          <button
            className="nav-link"
            id="about-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-about"
            type="button"
            role="tab"
            aria-controls="about"
            aria-selected="false"
          >
            About
          </button>
        </div>
        <div
          className="nav-item"
          role="presentation"
        >
          <button
            className="nav-link"
            id="portfolio-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-portfolio"
            type="button"
            role="tab"
            aria-controls="portfolio"
            aria-selected="false"
          >
            Portfolio
          </button>
        </div>
        <div
          className="ms-auto nav-item"
          role="presentation"
        >
          <button
            className="nav-link"
            id="nav-contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-contact"
            type="button"
            role="tab"
            aria-controls="nav-contact"
            aria-selected="false"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};
