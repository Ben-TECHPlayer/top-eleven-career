import React from 'react';
import '../styles/Partners.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Partners() {
  return (
    <main>
    <h1>Partners</h1>
    <h2>Main sponsors</h2>
    <div className="main">
        <Link to="/partners/realmadrid" className="partners-link">
          <img src="/assets/realmadrid.png" alt="Real Madrid"/>
        </Link>
        <Link to="/partners/ps5" className="partners-link">
          <img src="/assets/ps5.png" alt="Quadruple" />
        </Link>
        <Link to="/partners/vivatech" className="partners-link">
          <img src="/assets/vivatech-logo.png" alt="VivaTech" />
        </Link>
    </div>
    <h2>Student sponsors</h2>
    <div className="student">
        <Link to="/partners/paris-saclay" className="partners-link">
          <img src="/assets/u-psud.png" alt="u-pusd"/>
        </Link>
        <Link to="/partners/epita" className="partners-link">
          <img src="/assets/epita.png" alt="epita"/>
        </Link>
        <Link to="/partners/iut" className="partners-link">
          <img src="/assets/iut-orsay.png" alt="IUT"/>
        </Link>
        <Link to="/partners/pariscite" className="partners-link">  
          <img src="/assets/paris-cite.png" alt="Paris 16"/>
        </Link>
    </div>
    <h2>Gold sponsors</h2>
    <div className="gold">
      <Link to="/partners/apple" className="partners-link">
        <img src="/assets/apple.png" alt="Apple"/>
      </Link>
      <Link to="/partners/nike" className="partners-link">
        <img src="/assets/nike.png" alt="Nike"/>
      </Link>
      <Link to="/partners/emirates" className="partners-link">
        <img src="/assets/fly-emirates.png" alt="Fly Emirates"/>
      </Link>
    </div>
    <h2>Tech sponsors</h2>
    <div className="tech">
      <Link to="/partners/samsung-galaxy" className="partners-link">
        <img src="/assets/Samsung-Galaxy-Logo.png" alt="Samsung Galaxy"/>
      </Link>
      <Link to="/partners/asus" className="partners-link">
        <img src="/assets/asus.png" alt="ASUS"/>
      </Link>
      <Link to="/partners/hp" className="partners-link">
        <img src="/assets/hp.png" alt="HP"/>
      </Link>
    </div>
    <h2>Store sponsors</h2>
    <div className="store">
      <Link to="/partners/axe" className="partners-link">
        <img src="/assets/axe.png" alt="AXE"/>
      </Link>
      <Link to="/partners/mercedes" className="partners-link">  
        <img src="/assets/mercedes.png" alt="Mercedes"/>
      </Link>
      <Link to="/partners/quick" className="partners-link">  
        <img src="/assets/quick.png" alt="Quick"/>
      </Link>
    </div>
    </main>
  );
}

export default Partners;