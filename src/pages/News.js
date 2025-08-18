import React from 'react';
import '../styles/News.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import '../styles/News.css'

function News() {
  return (
    <main>
      <h1>News</h1>
        <div id="mainPanel">
          <Link to="/news/quadruple" className="mainPanel-link">
          <div className="famous">
            <img src="/assets/teslamodel3.jpg" alt="Quadruple" />
            <div className="quadruple-text">
              <h2>Quadruple</h2>
              <p>We have made the quadruple after won the Super Cup yesterday</p>
            </div>
          </div>
          </Link>
        </div>
      <div id="panel">
        <div className="quadruple">
          <img src="/assets/vivatech2024.jpg" alt="Finish" />
          <h2>Ben Gaming leaves!</h2>
        </div>
        <div className="supercup">
          <img src="/assets/teslamodel3.jpg" alt="Super Cup" />
          <h2>Super Cup won!!!</h2>
        </div>
        <div className="UCL">
          <img src="/assets/work.jpg" alt="UCL" />
          <h2>UCL won!!!</h2>
        </div>
        <div className="League">
          <img src="/assets/nba2025.jpg" alt="League" />
          <h2>Championship won!!!</h2>
        </div>
      </div>
    </main>
  );
}

export default News;