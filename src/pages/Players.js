import React, { useState } from 'react';
import '../styles/Players.css'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Season from '../components/Season';
import '../styles/Season.css';

function Players() {
  const [seasonDropdownOpen, setSeasonDropdownOpen] = useState(false);
  const [selectedSeason, setSelectedSeason] = useState('Season 1');

  return (
    <main>
      <h1>Players</h1>
      
      <Season seasonDropdownOpen={seasonDropdownOpen} setSeasonDropdownOpen={setSeasonDropdownOpen} selectedSeason={selectedSeason} setSelectedSeason={setSelectedSeason} />
      {selectedSeason === 'Season 1' && (
      <div id="season1">
        <div className="goalkeepers">
          <h2>Goalkeepers</h2>
          <div className="player-card">
            <Link to="/players/umana" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Leonardo Umana</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/schuler" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Patrick Schuler</p>
            </Link>
          </div>
        </div>
        <div className="defenders">
          <h2>Defenders</h2>
          <div className="player-card">
            <Link to="/players/chueca" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Juan Chueca</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/sadiki" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Brahim Sadiki</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/kassim-bourhani" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kassim Bourhani</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ben-aboubakari" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ben Aboubakari</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/diez" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Mario Diez</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mohr" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kevin Mohr</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/kassim-m'ramboini" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kassim M'Ramboini</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/nassuf-ahamada" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Nassuf Ahamada</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ben-youssouf" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ben Youssouf</p>
            </Link>
          </div>
        </div>
        <div className="midlefields">
          <h2>Midlefields</h2>
          <div className="player-card">
            <Link to="/players/merayo" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Daniel Merayo</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mauget" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Thomas Mauget</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mojdl" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Dusan Mojdl</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/bossokem" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Maxim Bossokem</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/nassuf-youssouf" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Nassuf Youssouf</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/murphy" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ronan Murphy</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mohamed-m'changama" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Mohamed M'Changama</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/king" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kwabena King</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ahmed-ahamada" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ahmed Ahamada</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/slavov" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Georgi Slavov</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/buesa" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Tadpong Buesa</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/werge" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Emil Werge</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/balcazar" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Oscar Balcazar</p>
            </Link>
          </div>
        </div>
        <div className="forwards">
          <h2>Forwards</h2>
          <div className="player-card">
            <Link to="/players/morgan" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Matt Morgan</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/lebon" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Karim Lebon</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ruiz" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Rafael Ruiz</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/kassim-ahamada" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kassim Ahamada</p>
            </Link>
          </div>
        </div>
      </div>
      )}
      {selectedSeason === 'Season 2' && (
      <div id="season2">
        <div className="goalkeepers">
          <h2>Goalkeepers</h2>
          <div className="player-card">
            <Link to="/players/courtois" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Leonardo Umana</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/schuler" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Patrick Schuler</p>
            </Link>
          </div>
        </div>
        <div className="defenders">
          <h2>Defenders</h2>
          <div className="player-card">
            <Link to="/players/chueca" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Juan Chueca</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/sadiki" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Brahim Sadiki</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/kassim-bourhani" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kassim Bourhani</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ben-aboubakari" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ben Aboubakari</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/diez" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Mario Diez</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mohr" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kevin Mohr</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/kassim-m'ramboini" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kassim M'Ramboini</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/nassuf-ahamada" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Nassuf Ahamada</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ben-youssouf" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ben Youssouf</p>
            </Link>
          </div>
        </div>
        <div className="midlefields">
          <h2>Midlefields</h2>
          <div className="player-card">
            <Link to="/players/merayo" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Daniel Merayo</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mauget" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Thomas Mauget</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mojdl" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Dusan Mojdl</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/bossokem" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Maxim Bossokem</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/nassuf-youssouf" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Nassuf Youssouf</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/murphy" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ronan Murphy</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mohamed-m'changama" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Mohamed M'Changama</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/king" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kwabena King</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ahmed-ahamada" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ahmed Ahamada</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/slavov" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Georgi Slavov</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/buesa" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Tadpong Buesa</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/werge" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Emil Werge</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/balcazar" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Oscar Balcazar</p>
            </Link>
          </div>
        </div>
        <div className="forwards">
          <h2>Forwards</h2>
          <div className="player-card">
            <Link to="/players/morgan" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Matt Morgan</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/lebon" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Karim Lebon</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ruiz" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Rafael Ruiz</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/kassim-ahamada" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kassim Ahamada</p>
            </Link>
          </div>
        </div>
      </div>
      )}
      {selectedSeason === 'Season 3' && (
      <div id="season3">
        <div className="goalkeepers">
          <h2>Goalkeepers</h2>
          <div className="player-card">
            <Link to="/players/courtois" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Leonardo Umana</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/schuler" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Patrick Schuler</p>
            </Link>
          </div>
        </div>
        <div className="defenders">
          <h2>Defenders</h2>
          <div className="player-card">
            <Link to="/players/chueca" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Juan Chueca</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/sadiki" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Brahim Sadiki</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/kassim-bourhani" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kassim Bourhani</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ben-aboubakari" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ben Aboubakari</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/diez" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Mario Diez</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mohr" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kevin Mohr</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/kassim-m'ramboini" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kassim M'Ramboini</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/nassuf-ahamada" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Nassuf Ahamada</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ben-youssouf" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ben Youssouf</p>
            </Link>
          </div>
        </div>
        <div className="midlefields">
          <h2>Midlefields</h2>
          <div className="player-card">
            <Link to="/players/merayo" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Daniel Merayo</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mauget" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Thomas Mauget</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mojdl" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Dusan Mojdl</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/bossokem" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Maxim Bossokem</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/nassuf-youssouf" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Nassuf Youssouf</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/murphy" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ronan Murphy</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mohamed-m'changama" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Mohamed M'Changama</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/king" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kwabena King</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ahmed-ahamada" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ahmed Ahamada</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/slavov" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Georgi Slavov</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/buesa" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Tadpong Buesa</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/werge" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Emil Werge</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/balcazar" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Oscar Balcazar</p>
            </Link>
          </div>
        </div>
        <div className="forwards">
          <h2>Forwards</h2>
          <div className="player-card">
            <Link to="/players/morgan" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Matt Morgan</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/lebon" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Karim Lebon</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ruiz" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Rafael Ruiz</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/kassim-ahamada" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kassim Ahamada</p>
            </Link>
          </div>
        </div>
      </div>
      )}
      {selectedSeason === 'Season 4' && (
      <div id="season4">
        <div className="goalkeepers">
          <h2>Goalkeepers</h2>
          <div className="player-card">
            <Link to="/players/courtois" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Leonardo Umana</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/schuler" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Patrick Schuler</p>
            </Link>
          </div>
        </div>
        <div className="defenders">
          <h2>Defenders</h2>
          <div className="player-card">
            <Link to="/players/chueca" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Juan Chueca</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/sadiki" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Brahim Sadiki</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/kassim-bourhani" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kassim Bourhani</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ben-aboubakari" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ben Aboubakari</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/diez" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Mario Diez</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mohr" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kevin Mohr</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/kassim-m'ramboini" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kassim M'Ramboini</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/nassuf-ahamada" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Nassuf Ahamada</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ben-youssouf" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ben Youssouf</p>
            </Link>
          </div>
        </div>
        <div className="midlefields">
          <h2>Midlefields</h2>
          <div className="player-card">
            <Link to="/players/merayo" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Daniel Merayo</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mauget" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Thomas Mauget</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mojdl" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Dusan Mojdl</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/bossokem" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Maxim Bossokem</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/nassuf-youssouf" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Nassuf Youssouf</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/murphy" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ronan Murphy</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mohamed-m'changama" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Mohamed M'Changama</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/king" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kwabena King</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ahmed-ahamada" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ahmed Ahamada</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/slavov" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Georgi Slavov</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/buesa" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Tadpong Buesa</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/werge" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Emil Werge</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/balcazar" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Oscar Balcazar</p>
            </Link>
          </div>
        </div>
        <div className="forwards">
          <h2>Forwards</h2>
          <div className="player-card">
            <Link to="/players/morgan" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Matt Morgan</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/lebon" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Karim Lebon</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ruiz" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Rafael Ruiz</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/kassim-ahamada" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kassim Ahamada</p>
            </Link>
          </div>
        </div>
      </div>
      )}
      {selectedSeason === 'Season 5' && (
      <div id="season5">
        <div className="goalkeepers">
          <h2>Goalkeepers</h2>
          <div className="player-card">
            <Link to="/players/courtois" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Leonardo Umana</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/schuler" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Patrick Schuler</p>
            </Link>
          </div>
        </div>
        <div className="defenders">
          <h2>Defenders</h2>
          <div className="player-card">
            <Link to="/players/chueca" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Juan Chueca</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/sadiki" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Brahim Sadiki</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/kassim-bourhani" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kassim Bourhani</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ben-aboubakari" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ben Aboubakari</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/diez" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Mario Diez</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mohr" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kevin Mohr</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/kassim-m'ramboini" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kassim M'Ramboini</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/nassuf-ahamada" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Nassuf Ahamada</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ben-youssouf" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ben Youssouf</p>
            </Link>
          </div>
        </div>
        <div className="midlefields">
          <h2>Midlefields</h2>
          <div className="player-card">
            <Link to="/players/merayo" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Daniel Merayo</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mauget" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Thomas Mauget</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mojdl" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Dusan Mojdl</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/bossokem" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Maxim Bossokem</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/nassuf-youssouf" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Nassuf Youssouf</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/murphy" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ronan Murphy</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mohamed-m'changama" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Mohamed M'Changama</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/king" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kwabena King</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ahmed-ahamada" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ahmed Ahamada</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/slavov" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Georgi Slavov</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/buesa" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Tadpong Buesa</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/werge" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Emil Werge</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/balcazar" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Oscar Balcazar</p>
            </Link>
          </div>
        </div>
        <div className="forwards">
          <h2>Forwards</h2>
          <div className="player-card">
            <Link to="/players/morgan" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Matt Morgan</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/lebon" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Karim Lebon</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ruiz" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Rafael Ruiz</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/kassim-ahamada" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kassim Ahamada</p>
            </Link>
          </div>
        </div>
      </div>
      )}
      {selectedSeason === 'Season 6' && (
      <div id="season6">
        <div className="goalkeepers">
          <h2>Goalkeepers</h2>
          <div className="player-card">
            <Link to="/players/courtois" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Leonardo Umana</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/schuler" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Patrick Schuler</p>
            </Link>
          </div>
        </div>
        <div className="defenders">
          <h2>Defenders</h2>
          <div className="player-card">
            <Link to="/players/chueca" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Juan Chueca</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/sadiki" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Brahim Sadiki</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/kassim-bourhani" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kassim Bourhani</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ben-aboubakari" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ben Aboubakari</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/diez" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Mario Diez</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mohr" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kevin Mohr</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/kassim-m'ramboini" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kassim M'Ramboini</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/nassuf-ahamada" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Nassuf Ahamada</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ben-youssouf" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ben Youssouf</p>
            </Link>
          </div>
        </div>
        <div className="midlefields">
          <h2>Midlefields</h2>
          <div className="player-card">
            <Link to="/players/merayo" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Daniel Merayo</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mauget" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Thomas Mauget</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mojdl" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Dusan Mojdl</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/bossokem" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Maxim Bossokem</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/nassuf-youssouf" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Nassuf Youssouf</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/murphy" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ronan Murphy</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mohamed-m'changama" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Mohamed M'Changama</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/king" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kwabena King</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ahmed-ahamada" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ahmed Ahamada</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/slavov" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Georgi Slavov</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/buesa" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Tadpong Buesa</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/werge" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Emil Werge</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/balcazar" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Oscar Balcazar</p>
            </Link>
          </div>
        </div>
        <div className="forwards">
          <h2>Forwards</h2>
          <div className="player-card">
            <Link to="/players/morgan" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Matt Morgan</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/lebon" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Karim Lebon</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ruiz" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Rafael Ruiz</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/kassim-ahamada" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kassim Ahamada</p>
            </Link>
          </div>
        </div>
      </div>
      )}
      {selectedSeason === 'Season 7' && (
      <div id="season7">
        <div className="goalkeepers">
          <h2>Goalkeepers</h2>
          <div className="player-card">
            <Link to="/players/courtois" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Leonardo Umana</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/schuler" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Patrick Schuler</p>
            </Link>
          </div>
        </div>
        <div className="defenders">
          <h2>Defenders</h2>
          <div className="player-card">
            <Link to="/players/chueca" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Juan Chueca</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/sadiki" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Brahim Sadiki</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/kassim-bourhani" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kassim Bourhani</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ben-aboubakari" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ben Aboubakari</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/diez" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Mario Diez</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mohr" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kevin Mohr</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/kassim-m'ramboini" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kassim M'Ramboini</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/nassuf-ahamada" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Nassuf Ahamada</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ben-youssouf" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ben Youssouf</p>
            </Link>
          </div>
        </div>
        <div className="midlefields">
          <h2>Midlefields</h2>
          <div className="player-card">
            <Link to="/players/merayo" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Daniel Merayo</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mauget" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Thomas Mauget</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mojdl" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Dusan Mojdl</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/bossokem" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Maxim Bossokem</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/nassuf-youssouf" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Nassuf Youssouf</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/murphy" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ronan Murphy</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mohamed-m'changama" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Mohamed M'Changama</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/king" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kwabena King</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ahmed-ahamada" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ahmed Ahamada</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/slavov" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Georgi Slavov</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/buesa" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Tadpong Buesa</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/werge" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Emil Werge</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/balcazar" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Oscar Balcazar</p>
            </Link>
          </div>
        </div>
        <div className="forwards">
          <h2>Forwards</h2>
          <div className="player-card">
            <Link to="/players/morgan" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Matt Morgan</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/lebon" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Karim Lebon</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ruiz" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Rafael Ruiz</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/kassim-ahamada" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kassim Ahamada</p>
            </Link>
          </div>
        </div>
      </div>
      )}
      {selectedSeason === 'Season 8' && (
      <div id="season8">
        <div className="goalkeepers">
          <h2>Goalkeepers</h2>
          <div className="player-card">
            <Link to="/players/courtois" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Leonardo Umana</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/schuler" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Patrick Schuler</p>
            </Link>
          </div>
        </div>
        <div className="defenders">
          <h2>Defenders</h2>
          <div className="player-card">
            <Link to="/players/chueca" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Juan Chueca</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/sadiki" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Brahim Sadiki</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/kassim-bourhani" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kassim Bourhani</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ben-aboubakari" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ben Aboubakari</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/diez" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Mario Diez</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mohr" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kevin Mohr</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/kassim-m'ramboini" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kassim M'Ramboini</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/nassuf-ahamada" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Nassuf Ahamada</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ben-youssouf" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ben Youssouf</p>
            </Link>
          </div>
        </div>
        <div className="midlefields">
          <h2>Midlefields</h2>
          <div className="player-card">
            <Link to="/players/merayo" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Daniel Merayo</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mauget" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Thomas Mauget</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mojdl" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Dusan Mojdl</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/bossokem" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Maxim Bossokem</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/nassuf-youssouf" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Nassuf Youssouf</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/murphy" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ronan Murphy</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mohamed-m'changama" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Mohamed M'Changama</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/king" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kwabena King</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ahmed-ahamada" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ahmed Ahamada</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/slavov" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Georgi Slavov</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/buesa" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Tadpong Buesa</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/werge" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Emil Werge</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/balcazar" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Oscar Balcazar</p>
            </Link>
          </div>
        </div>
        <div className="forwards">
          <h2>Forwards</h2>
          <div className="player-card">
            <Link to="/players/morgan" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Matt Morgan</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/lebon" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Karim Lebon</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ruiz" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Rafael Ruiz</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/kassim-ahamada" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kassim Ahamada</p>
            </Link>
          </div>
        </div>
      </div>
      )}
      {selectedSeason === 'Season 9' && (
      <div id="season9">
        <div className="goalkeepers">
          <h2>Goalkeepers</h2>
          <div className="player-card">
            <Link to="/players/courtois" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Leonardo Umana</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/schuler" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Patrick Schuler</p>
            </Link>
          </div>
        </div>
        <div className="defenders">
          <h2>Defenders</h2>
          <div className="player-card">
            <Link to="/players/chueca" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Juan Chueca</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/sadiki" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Brahim Sadiki</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/kassim-bourhani" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kassim Bourhani</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ben-aboubakari" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ben Aboubakari</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/diez" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Mario Diez</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mohr" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kevin Mohr</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/kassim-m'ramboini" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kassim M'Ramboini</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/nassuf-ahamada" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Nassuf Ahamada</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ben-youssouf" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ben Youssouf</p>
            </Link>
          </div>
        </div>
        <div className="midlefields">
          <h2>Midlefields</h2>
          <div className="player-card">
            <Link to="/players/merayo" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Daniel Merayo</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mauget" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Thomas Mauget</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mojdl" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Dusan Mojdl</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/bossokem" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Maxim Bossokem</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/nassuf-youssouf" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Nassuf Youssouf</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/murphy" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ronan Murphy</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mohamed-m'changama" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Mohamed M'Changama</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/king" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kwabena King</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ahmed-ahamada" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ahmed Ahamada</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/slavov" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Georgi Slavov</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/buesa" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Tadpong Buesa</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/werge" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Emil Werge</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/balcazar" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Oscar Balcazar</p>
            </Link>
          </div>
        </div>
        <div className="forwards">
          <h2>Forwards</h2>
          <div className="player-card">
            <Link to="/players/morgan" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Matt Morgan</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/lebon" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Karim Lebon</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ruiz" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Rafael Ruiz</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/kassim-ahamada" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kassim Ahamada</p>
            </Link>
          </div>
        </div>
      </div>
      )}
      {selectedSeason === 'Season 10' && (
      <div id="season1O">
        <div className="goalkeepers">
          <h2>Goalkeepers</h2>
          <div className="player-card">
            <Link to="/players/courtois" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Leonardo Umana</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/schuler" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Patrick Schuler</p>
            </Link>
          </div>
        </div>
        <div className="defenders">
          <h2>Defenders</h2>
          <div className="player-card">
            <Link to="/players/chueca" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Juan Chueca</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/sadiki" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Brahim Sadiki</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/kassim-bourhani" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kassim Bourhani</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ben-aboubakari" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ben Aboubakari</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/diez" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Mario Diez</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mohr" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kevin Mohr</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/kassim-m'ramboini" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kassim M'Ramboini</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/nassuf-ahamada" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Nassuf Ahamada</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ben-youssouf" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ben Youssouf</p>
            </Link>
          </div>
        </div>
        <div className="midlefields">
          <h2>Midlefields</h2>
          <div className="player-card">
            <Link to="/players/merayo" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Daniel Merayo</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mauget" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Thomas Mauget</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mojdl" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Dusan Mojdl</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/bossokem" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Maxim Bossokem</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/nassuf-youssouf" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Nassuf Youssouf</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/murphy" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ronan Murphy</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mohamed-m'changama" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Mohamed M'Changama</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/king" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kwabena King</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ahmed-ahamada" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ahmed Ahamada</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/slavov" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Georgi Slavov</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/buesa" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Tadpong Buesa</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/werge" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Emil Werge</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/balcazar" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Oscar Balcazar</p>
            </Link>
          </div>
        </div>
        <div className="forwards">
          <h2>Forwards</h2>
          <div className="player-card">
            <Link to="/players/morgan" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Matt Morgan</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/lebon" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Karim Lebon</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ruiz" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Rafael Ruiz</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/kassim-ahamada" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kassim Ahamada</p>
            </Link>
          </div>
        </div>
      </div>
      )}
      {selectedSeason === 'Season 11' && (
      <div id="season11">
        <div className="goalkeepers">
          <h2>Goalkeepers</h2>
          <div className="player-card">
            <Link to="/players/courtois" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Leonardo Umana</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/schuler" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Patrick Schuler</p>
            </Link>
          </div>
        </div>
        <div className="defenders">
          <h2>Defenders</h2>
          <div className="player-card">
            <Link to="/players/chueca" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Juan Chueca</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/sadiki" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Brahim Sadiki</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/kassim-bourhani" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kassim Bourhani</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ben-aboubakari" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ben Aboubakari</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/diez" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Mario Diez</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mohr" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kevin Mohr</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/kassim-m'ramboini" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kassim M'Ramboini</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/nassuf-ahamada" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Nassuf Ahamada</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ben-youssouf" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ben Youssouf</p>
            </Link>
          </div>
        </div>
        <div className="midlefields">
          <h2>Midlefields</h2>
          <div className="player-card">
            <Link to="/players/merayo" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Daniel Merayo</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mauget" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Thomas Mauget</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mojdl" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Dusan Mojdl</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/bossokem" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Maxim Bossokem</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/nassuf-youssouf" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Nassuf Youssouf</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/murphy" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ronan Murphy</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mohamed-m'changama" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Mohamed M'Changama</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/king" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kwabena King</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ahmed-ahamada" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ahmed Ahamada</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/slavov" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Georgi Slavov</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/buesa" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Tadpong Buesa</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/werge" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Emil Werge</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/balcazar" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Oscar Balcazar</p>
            </Link>
          </div>
        </div>
        <div className="forwards">
          <h2>Forwards</h2>
          <div className="player-card">
            <Link to="/players/morgan" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Matt Morgan</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/lebon" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Karim Lebon</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ruiz" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Rafael Ruiz</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/kassim-ahamada" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kassim Ahamada</p>
            </Link>
          </div>
        </div>
      </div>
      )}
      {selectedSeason === 'Season 12' && (
      <div id="season12">
        <div className="goalkeepers">
          <h2>Goalkeepers</h2>
          <div className="player-card">
            <Link to="/players/courtois" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Leonardo Umana</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/schuler" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Patrick Schuler</p>
            </Link>
          </div>
        </div>
        <div className="defenders">
          <h2>Defenders</h2>
          <div className="player-card">
            <Link to="/players/chueca" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Juan Chueca</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/sadiki" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Brahim Sadiki</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/kassim-bourhani" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kassim Bourhani</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ben-aboubakari" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ben Aboubakari</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/diez" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Mario Diez</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mohr" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kevin Mohr</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/kassim-m'ramboini" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kassim M'Ramboini</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/nassuf-ahamada" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Nassuf Ahamada</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ben-youssouf" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ben Youssouf</p>
            </Link>
          </div>
        </div>
        <div className="midlefields">
          <h2>Midlefields</h2>
          <div className="player-card">
            <Link to="/players/merayo" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Daniel Merayo</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mauget" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Thomas Mauget</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mojdl" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Dusan Mojdl</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/bossokem" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Maxim Bossokem</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/nassuf-youssouf" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Nassuf Youssouf</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/murphy" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ronan Murphy</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mohamed-m'changama" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Mohamed M'Changama</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/king" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kwabena King</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ahmed-ahamada" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ahmed Ahamada</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/slavov" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Georgi Slavov</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/buesa" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Tadpong Buesa</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/werge" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Emil Werge</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/balcazar" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Oscar Balcazar</p>
            </Link>
          </div>
        </div>
        <div className="forwards">
          <h2>Forwards</h2>
          <div className="player-card">
            <Link to="/players/morgan" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Matt Morgan</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/lebon" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Karim Lebon</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ruiz" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Rafael Ruiz</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/kassim-ahamada" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kassim Ahamada</p>
            </Link>
          </div>
        </div>
      </div>
      )}
      {selectedSeason === 'Season 13' && (
      <div id="season13">
        <div className="goalkeepers">
          <h2>Goalkeepers</h2>
          <div className="player-card">
            <Link to="/players/courtois" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Leonardo Umana</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/schuler" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Patrick Schuler</p>
            </Link>
          </div>
        </div>
        <div className="defenders">
          <h2>Defenders</h2>
          <div className="player-card">
            <Link to="/players/chueca" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Juan Chueca</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/sadiki" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Brahim Sadiki</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/kassim-bourhani" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kassim Bourhani</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ben-aboubakari" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ben Aboubakari</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/diez" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Mario Diez</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mohr" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kevin Mohr</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/kassim-m'ramboini" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kassim M'Ramboini</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/nassuf-ahamada" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Nassuf Ahamada</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ben-youssouf" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ben Youssouf</p>
            </Link>
          </div>
        </div>
        <div className="midlefields">
          <h2>Midlefields</h2>
          <div className="player-card">
            <Link to="/players/merayo" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Daniel Merayo</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mauget" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Thomas Mauget</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mojdl" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Dusan Mojdl</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/bossokem" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Maxim Bossokem</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/nassuf-youssouf" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Nassuf Youssouf</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/murphy" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ronan Murphy</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mohamed-m'changama" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Mohamed M'Changama</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/king" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kwabena King</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ahmed-ahamada" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ahmed Ahamada</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/slavov" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Georgi Slavov</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/buesa" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Tadpong Buesa</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/werge" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Emil Werge</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/balcazar" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Oscar Balcazar</p>
            </Link>
          </div>
        </div>
        <div className="forwards">
          <h2>Forwards</h2>
          <div className="player-card">
            <Link to="/players/morgan" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Matt Morgan</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/lebon" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Karim Lebon</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ruiz" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Rafael Ruiz</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/kassim-ahamada" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kassim Ahamada</p>
            </Link>
          </div>
        </div>
      </div>
      )}
      {selectedSeason === 'Season 14' && (
      <div id="season14">
        <div className="goalkeepers">
          <h2>Goalkeepers</h2>
          <div className="player-card">
            <Link to="/players/courtois" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Leonardo Umana</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/schuler" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Patrick Schuler</p>
            </Link>
          </div>
        </div>
        <div className="defenders">
          <h2>Defenders</h2>
          <div className="player-card">
            <Link to="/players/chueca" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Juan Chueca</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/sadiki" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Brahim Sadiki</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/kassim-bourhani" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kassim Bourhani</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ben-aboubakari" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ben Aboubakari</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/diez" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Mario Diez</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mohr" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kevin Mohr</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/kassim-m'ramboini" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kassim M'Ramboini</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/nassuf-ahamada" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Nassuf Ahamada</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ben-youssouf" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ben Youssouf</p>
            </Link>
          </div>
        </div>
        <div className="midlefields">
          <h2>Midlefields</h2>
          <div className="player-card">
            <Link to="/players/merayo" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Daniel Merayo</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mauget" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Thomas Mauget</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mojdl" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Dusan Mojdl</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/bossokem" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Maxim Bossokem</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/nassuf-youssouf" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Nassuf Youssouf</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/murphy" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ronan Murphy</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mohamed-m'changama" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Mohamed M'Changama</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/king" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kwabena King</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ahmed-ahamada" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ahmed Ahamada</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/slavov" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Georgi Slavov</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/buesa" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Tadpong Buesa</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/werge" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Emil Werge</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/balcazar" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Oscar Balcazar</p>
            </Link>
          </div>
        </div>
        <div className="forwards">
          <h2>Forwards</h2>
          <div className="player-card">
            <Link to="/players/morgan" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Matt Morgan</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/lebon" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Karim Lebon</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ruiz" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Rafael Ruiz</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/kassim-ahamada" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kassim Ahamada</p>
            </Link>
          </div>
        </div>
      </div>
      )}
      {selectedSeason === 'Season 15' && (
      <div id="season15">
        <div className="goalkeepers">
          <h2>Goalkeepers</h2>
          <div className="player-card">
            <Link to="/players/courtois" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Leonardo Umana</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/schuler" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Patrick Schuler</p>
            </Link>
          </div>
        </div>
        <div className="defenders">
          <h2>Defenders</h2>
          <div className="player-card">
            <Link to="/players/chueca" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Juan Chueca</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/sadiki" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Brahim Sadiki</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/kassim-bourhani" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kassim Bourhani</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ben-aboubakari" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ben Aboubakari</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/diez" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Mario Diez</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mohr" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kevin Mohr</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/kassim-m'ramboini" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kassim M'Ramboini</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/nassuf-ahamada" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Nassuf Ahamada</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ben-youssouf" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ben Youssouf</p>
            </Link>
          </div>
        </div>
        <div className="midlefields">
          <h2>Midlefields</h2>
          <div className="player-card">
            <Link to="/players/merayo" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Daniel Merayo</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mauget" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Thomas Mauget</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mojdl" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Dusan Mojdl</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/bossokem" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Maxim Bossokem</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/nassuf-youssouf" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Nassuf Youssouf</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/murphy" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ronan Murphy</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mohamed-m'changama" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Mohamed M'Changama</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/king" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kwabena King</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ahmed-ahamada" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ahmed Ahamada</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/slavov" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Georgi Slavov</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/buesa" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Tadpong Buesa</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/werge" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Emil Werge</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/balcazar" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Oscar Balcazar</p>
            </Link>
          </div>
        </div>
        <div className="forwards">
          <h2>Forwards</h2>
          <div className="player-card">
            <Link to="/players/morgan" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Matt Morgan</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/lebon" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Karim Lebon</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ruiz" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Rafael Ruiz</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/kassim-ahamada" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kassim Ahamada</p>
            </Link>
          </div>
        </div>
      </div>
      )}
      {selectedSeason === 'Season 16' && (
      <div id="season16">
        <div className="goalkeepers">
          <h2>Goalkeepers</h2>
          <div className="player-card">
            <Link to="/players/courtois" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Leonardo Umana</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/schuler" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Patrick Schuler</p>
            </Link>
          </div>
        </div>
        <div className="defenders">
          <h2>Defenders</h2>
          <div className="player-card">
            <Link to="/players/chueca" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Juan Chueca</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/sadiki" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Brahim Sadiki</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/kassim-bourhani" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kassim Bourhani</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ben-aboubakari" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ben Aboubakari</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/diez" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Mario Diez</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mohr" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kevin Mohr</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/kassim-m'ramboini" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kassim M'Ramboini</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/nassuf-ahamada" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Nassuf Ahamada</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ben-youssouf" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ben Youssouf</p>
            </Link>
          </div>
        </div>
        <div className="midlefields">
          <h2>Midlefields</h2>
          <div className="player-card">
            <Link to="/players/merayo" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Daniel Merayo</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mauget" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Thomas Mauget</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mojdl" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Dusan Mojdl</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/bossokem" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Maxim Bossokem</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/nassuf-youssouf" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Nassuf Youssouf</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/murphy" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ronan Murphy</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mohamed-m'changama" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Mohamed M'Changama</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/king" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kwabena King</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ahmed-ahamada" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ahmed Ahamada</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/slavov" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Georgi Slavov</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/buesa" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Tadpong Buesa</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/werge" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Emil Werge</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/balcazar" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Oscar Balcazar</p>
            </Link>
          </div>
        </div>
        <div className="forwards">
          <h2>Forwards</h2>
          <div className="player-card">
            <Link to="/players/morgan" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Matt Morgan</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/lebon" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Karim Lebon</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ruiz" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Rafael Ruiz</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/kassim-ahamada" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kassim Ahamada</p>
            </Link>
          </div>
        </div>
      </div>
      )}
      {selectedSeason === 'Season 17' && (
      <div id="season17">
        <div className="goalkeepers">
          <h2>Goalkeepers</h2>
          <div className="player-card">
            <Link to="/players/courtois" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Leonardo Umana</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/schuler" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Patrick Schuler</p>
            </Link>
          </div>
        </div>
        <div className="defenders">
          <h2>Defenders</h2>
          <div className="player-card">
            <Link to="/players/chueca" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Juan Chueca</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/sadiki" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Brahim Sadiki</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/kassim-bourhani" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kassim Bourhani</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ben-aboubakari" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ben Aboubakari</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/diez" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Mario Diez</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mohr" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kevin Mohr</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/kassim-m'ramboini" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kassim M'Ramboini</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/nassuf-ahamada" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Nassuf Ahamada</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ben-youssouf" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ben Youssouf</p>
            </Link>
          </div>
        </div>
        <div className="midlefields">
          <h2>Midlefields</h2>
          <div className="player-card">
            <Link to="/players/merayo" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Daniel Merayo</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mauget" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Thomas Mauget</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mojdl" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Dusan Mojdl</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/bossokem" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Maxim Bossokem</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/nassuf-youssouf" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Nassuf Youssouf</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/murphy" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ronan Murphy</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mohamed-m'changama" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Mohamed M'Changama</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/king" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kwabena King</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ahmed-ahamada" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ahmed Ahamada</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/slavov" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Georgi Slavov</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/buesa" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Tadpong Buesa</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/werge" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Emil Werge</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/balcazar" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Oscar Balcazar</p>
            </Link>
          </div>
        </div>
        <div className="forwards">
          <h2>Forwards</h2>
          <div className="player-card">
            <Link to="/players/morgan" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Matt Morgan</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/lebon" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Karim Lebon</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ruiz" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Rafael Ruiz</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/kassim-ahamada" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kassim Ahamada</p>
            </Link>
          </div>
        </div>
      </div>
      )}
      {selectedSeason === 'Season 18' && (
      <div id="season18">
        <div className="goalkeepers">
          <h2>Goalkeepers</h2>
          <div className="player-card">
            <Link to="/players/courtois" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Leonardo Umana</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/schuler" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Patrick Schuler</p>
            </Link>
          </div>
        </div>
        <div className="defenders">
          <h2>Defenders</h2>
          <div className="player-card">
            <Link to="/players/chueca" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Juan Chueca</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/sadiki" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Brahim Sadiki</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/kassim-bourhani" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kassim Bourhani</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ben-aboubakari" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ben Aboubakari</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/diez" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Mario Diez</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mohr" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kevin Mohr</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/kassim-m'ramboini" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kassim M'Ramboini</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/nassuf-ahamada" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Nassuf Ahamada</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ben-youssouf" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ben Youssouf</p>
            </Link>
          </div>
        </div>
        <div className="midlefields">
          <h2>Midlefields</h2>
          <div className="player-card">
            <Link to="/players/merayo" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Daniel Merayo</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mauget" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Thomas Mauget</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mojdl" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Dusan Mojdl</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/bossokem" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Maxim Bossokem</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/nassuf-youssouf" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Nassuf Youssouf</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/murphy" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ronan Murphy</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/mohamed-m'changama" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Mohamed M'Changama</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/king" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kwabena King</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ahmed-ahamada" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Ahmed Ahamada</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/slavov" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Georgi Slavov</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/buesa" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Tadpong Buesa</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/werge" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Emil Werge</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/balcazar" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Oscar Balcazar</p>
            </Link>
          </div>
        </div>
        <div className="forwards">
          <h2>Forwards</h2>
          <div className="player-card">
            <Link to="/players/morgan" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Matt Morgan</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/lebon" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Karim Lebon</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/ruiz" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Rafael Ruiz</p>
            </Link>
          </div>
          <div className="player-card">
            <Link to="/players/kassim-ahamada" className="player-link">
              <img src="/assets/courtois.png" alt="Thibaut Courtois" />
              <p>Kassim Ahamada</p>
            </Link>
          </div>
        </div>
      </div>
      )}

    </main>
  );
}



export default Players;