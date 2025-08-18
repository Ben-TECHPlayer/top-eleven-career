import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="partners">
        <h1>Partners</h1>
        <div className="partners-icons">
          {/* Ajoute ici toutes tes icônes de partenaires comme dans le HTML */}
          <a href="https://realmadrid.com"><img src="/assets/realmadrid.png" alt="Real Madrid"/></a>
          <a href="https://apple.com"><img src="/assets/apple.png" alt="Apple"/></a>
          <a href="https://www.iut-orsay.universite-paris-saclay.fr"><img src="/assets/iut-orsay.png" alt="IUT"/></a>
          <a href="https://universite-paris-saclay.fr"><img src="/assets/u-psud.png" alt="Paris-Saclay"/></a>
          <a href="https://u-paris.fr"><img src="/assets/paris-cite.png" alt="Paris 16"/></a>
          <a href="https://hp.com"><img src="/assets/hp.png" alt="HP"/></a>
          <a href="https://playstation.com"><img src="/assets/ps5.png" alt="PS5"/></a>
          <a href="https://epita.fr"><img src="/assets/epita.png" alt="EPITA"/></a>
          <a href="https://quick.fr"><img src="/assets/quick.png" alt="Quick"/></a>
          <a href="https://nike.com"><img src="/assets/nike.png" alt="Nike"/></a>
          <a href="https://emirates.com"><img src="/assets/fly-emirates.png" alt="Fly Emirates"/></a>
          <a href="https://axe.com"><img src="/assets/axe.png" alt="AXE"/></a>
          <a href="https://mercedes.com"><img src="/assets/mercedes.png" alt="Mercedes"/></a>
          <a href="https://samsung.com"><img src="/assets/Samsung-Galaxy-Logo.png" alt="Samsung Galaxy"/></a>
          <a href="https://asus.com"><img src="/assets/asus.png" alt="ASUS"/></a>
          <a href="https://vivatechnology.com"><img src="/assets/vivatech-logo.png" alt="VivaTech" /></a>
        </div>
      </div>
      <div className="contacts">
        <h1>Contact</h1>
        <div className="contact-icons">
          {/* Ajoute ici toutes tes icônes de contact comme dans le HTML */}
          <a href="mailto:aboudoubenali@gmail.com"><img src="/assets/gmail.png" alt="Gmail" /></a>
          <a href="http://www.linkedin.com/in/ben-ali-aboudou-9a412b269/"><img src="/assets/linkedin.png" alt="LinkedIn" /></a>
          <a href="https://github.com/Ben-TECHPlayer"><img src="/assets/github.png" alt="GitHub" /></a>
          <a href="https://git.iut-orsay.fr/baboudo"><img src="/assets/gitlab.png" alt="GitLab" /></a>
          <a href="https://youtube.fr/@Ben_CR7"><img src="/assets/youtube.png" alt="Youtube" /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
