import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function RealMadrid() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Real Madrid</h1>
      <img src="/assets/vivatech-friends.png" alt="VivaTech" style={{ width: "80%" }} />
      <p>
        Ce partenariat avec le Real Madrid est une source d’inspiration pour moi et pour mon projet Gaming FC. Il symbolise l’excellence, l’innovation et la passion — trois valeurs fondamentales que je partage profondément avec ce club mythique.
      </p>
      <p>
        À travers cette collaboration, je veux transmettre les couleurs du Real Madrid dans mes projets, et montrer que même à petite échelle, on peut rêver grand — comme ce club l’a toujours fait.
      </p>
      <p>
        Hala Madrid y nada más.
      </p>
    </div>
  );
}

export default RealMadrid;