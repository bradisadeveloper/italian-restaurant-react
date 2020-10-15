import React from 'react';
// import './App.css';
import About from './About'
import Menu from './Menu'
import Gallery from './Gallery'
import Reservation from './Reservation'
import Footer from './Footer'
import SimpleReactLightBox from "simple-react-lightbox"
import './header.scss'

function App() {
  return (
    <div className="App">
    <SimpleReactLightBox>
      {/* Header  */}
      <header class="header">
        <div class="header__header-box">
            <div class="header-text">
                <span class="header-text--main-text">Trattoria Due</span>
                <span class="header-text--slogan-text">Freshest taste of Italy</span>
            </div>
        </div>
        
    </header>
      {/* About */}
      <div className="about">
        <About />
      </div>
      {/* Menu */}
      <div className="menu">
        <Menu />
      </div>
      {/* Gallery */}
      <div className="gallery">
        <Gallery />
      </div>
      {/* Reservations */}
      <div className="reservation">
        <Reservation />
      </div>
      {/* Contact */}
      {/* <div className="contact">
        <Contact />
      </div> */}
      {/* Footer */}
      <div className="footer">
        <Footer />
      </div>
      </SimpleReactLightBox>
    </div>
  );
}

export default App;
