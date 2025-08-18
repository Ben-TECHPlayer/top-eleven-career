import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="menu-container">
        <div className="menu" onClick={() => toggleMenu()}>
          <img src="/assets/menu.png" alt="Menu" />
          <span>Menu</span>
        </div>

        <img className="logo" src="/assets/bluelogo-gamingfc.png" alt="gaming fc" />

        <div id="dropdown" className="dropdown-menu">
           <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/games">Games</Link></li>
            <li><Link to="/players">Players</Link></li>
            <li><Link to="/rankings">Rankings</Link></li>
            <li><Link to="/partners">Partners</Link></li>
          </ul>
        </div>
      </div>
      <h1>Gaming FC</h1>
    </header>
  );
}


function toggleMenu() {
    const dropdown = document.getElementById("dropdown");
    dropdown.classList.toggle("open");

    document.addEventListener("click", function(event) {
        const menu = document.querySelector(".menu");
        const dropdown = document.getElementById("dropdown");

        // Si on clique ni sur le bouton, ni sur le menu
        if (!menu.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.classList.remove("open");
        }
    });
}

export default Header;