import React from 'react';
import {Footer} from './components/Footer/Footer.layout';
import {About} from './components/About/About.layout';
import {Portfolio} from './components/Portfolio/Portfolio.layout';
import {Nav} from './components/Nav/Nav.layout';
import {Main} from './components/Main/Main.layout';
import {Contact} from './components/Contact/Contact.layout';

function App() {
  return (
    <div className="container-fluid">
      <Nav />
      <div
        className="tab-content"
        id="nav-tabContent"
      >
        <div
          className="tab-pane fade active show"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
          <Main />
        </div>
        <div
          className="tab-pane fade"
          id="nav-about"
          role="tabpanel"
          aria-labelledby="nav-about-tab"
        >
          <About />
        </div>
        <div
          className="tab-pane fade"
          id="nav-portfolio"
          role="tabpanel"
          aria-labelledby="nav-portfolio-tab"
        >
          <Portfolio />
        </div>
        <div
          className="tab-pane fade"
          id="nav-contact"
          role="tabpanel"
          aria-labelledby="nav-contact-tab"
        >
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
