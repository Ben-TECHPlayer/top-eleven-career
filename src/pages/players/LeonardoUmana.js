import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import '../styles/StatsPlayers.css';
import ViewSeason from '../../components/ViewSeason';

function LeonardoUmana() {
  const [currentSeason, setCurrentSeason] = useState('career');
  
  return (
    <div style={{ padding: "2rem" }}>
      <div id="container">
          <div className="profile">
            <img src="/assets/courtois.png" alt="Thibaut Courtois" />
            <p>Leonardo Umana</p>
            <div className="infos-player">
              <p>Goalkeeper</p>
              <img className="flag" src="/assets/costa-rica.png" alt="Costa Rica"/>
            </div>
          </div>
          <div className="stats-player">
            <h2>Statistiques</h2>
            <ViewSeason currentSeason={currentSeason} setCurrentSeason={setCurrentSeason}/>
            <div className="seasons">
              {currentSeason === 'career' && (
              <div id="career">
                <ul className="stats-player-season">
                  <li><strong>Matchs joués :</strong> 45</li>
                  <li><strong>Clean sheets :</strong> 25</li>
                  <li><strong>Arrêts :</strong> 110</li>
                  <li><strong>Buts encaissés :</strong> 30</li>
                  <li><strong>Pénaltys arrêtés :</strong> 3</li>
                  <li><strong>Cartons jaunes :</strong> 1</li>
                  <li><strong>Cartons rouges :</strong> 0</li>
                </ul>
              </div>
              )}
              {currentSeason === 'season1' && (
              <div id="season1">
                <ul className="stats-player-season">
                  <li><strong>Matchs joués :</strong> 23</li>
                  <li><strong>Clean sheets :</strong> 23</li>
                  <li><strong>Arrêts :</strong> 110</li>
                  <li><strong>Buts encaissés :</strong> 30</li>
                  <li><strong>Pénaltys arrêtés :</strong> 3</li>
                  <li><strong>Cartons jaunes :</strong> 1</li>
                  <li><strong>Cartons rouges :</strong> 0</li>
                </ul>
              </div>
              )}
              {currentSeason === 'season2' && (
              <div id="season2">
                <ul className="stats-player-season">
                  <li><strong>Matchs joués :</strong> 22</li>
                  <li><strong>Clean sheets :</strong> 2</li>
                  <li><strong>Arrêts :</strong> 110</li>
                  <li><strong>Buts encaissés :</strong> 30</li>
                  <li><strong>Pénaltys arrêtés :</strong> 3</li>
                  <li><strong>Cartons jaunes :</strong> 1</li>
                  <li><strong>Cartons rouges :</strong> 0</li>
                </ul>
              </div>
              )}
            </div>
          </div>
        </div>
    </div>
  );
}

export default LeonardoUmana;