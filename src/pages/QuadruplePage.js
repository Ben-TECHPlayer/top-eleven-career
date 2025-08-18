import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function QuadruplePage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Quadruple Title</h1>
      <img src="/assets/teslamodel3.jpg" alt="Quadruple" style={{ width: "300px" }} />
      <p>
        After an incredible season, Gaming FC won the quadruple — the league, national cup, super cup, and international championship. This historic achievement will be remembered for years!
      </p>
    </div>
  );
}

export default QuadruplePage;
