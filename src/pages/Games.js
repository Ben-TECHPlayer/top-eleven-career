import React, { useState } from 'react';
import '../styles/Games.css'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import ViewTeam from '../components/ViewTeam';
import Season from '../components/Season';
import Competition from '../components/Competition';

import '../styles/Season.css';

function Games() {
    const [currentCompetition, setCurrentCompetition] = useState('league');
    const [currentView, setCurrentView] = useState('games');
    const [seasonDropdownOpen, setSeasonDropdownOpen] = useState(false);
    const [selectedSeason, setSelectedSeason] = useState('Season 1');

  return (
    <main>
      <h1>Games</h1>
        <Competition currentCompetition={currentCompetition} setCurrentCompetition={setCurrentCompetition} />
        <ViewTeam currentView={currentView} setCurrentView={setCurrentView} />
        <Season seasonDropdownOpen={seasonDropdownOpen} setSeasonDropdownOpen={setSeasonDropdownOpen} selectedSeason={selectedSeason} setSelectedSeason={setSelectedSeason} />
        {selectedSeason === 'Season 1' && (
        <div id="season1">
            {currentCompetition === 'league' && (
            <div id="league">
                {currentView === 'games' && (
                    <p>No matches found</p>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    <table>
                        <caption>Table League</caption>
                        <thead>
                            <tr>
                                <th>N°</th>
                                <th>Team</th>
                                <th>MD</th>
                                <th>W</th>
                                <th>D</th>
                                <th>L</th>
                                <th>BP</th>
                                <th>BC</th>
                                <th>AVG</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Gaming FC</td>
                                <td>26</td>
                                <td>22</td>
                                <td>3</td>
                                <td>1</td>
                                <td>73</td>
                                <td>-</td>
                                <td>-</td>
                                <td>69</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Prague ACF</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>56</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Spenge 2013</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>48</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>UnwarreantedTr FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>44</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Porsib FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>44</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Dingolfing RCD</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>39</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>ElaboratePeak FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>37</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Camilia FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>33</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>The Wolf</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>29</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>hh FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>27</td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>RCD Zlin</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>27</td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>Kilkis CFR</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>19</td>
                            </tr>
                            <tr>
                                <td>13</td>
                                <td>Elektrougli</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>18</td>
                            </tr>
                            <tr>
                                <td>14</td>
                                <td>ACF Empoli</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>17</td>
                            </tr>
                        </tbody>
                        <tfoot>

                        </tfoot>
                    </table>
                </div>
                )}
            </div>
            )}
            {currentCompetition === 'ucl' && (
            <div id="ucl">
                {currentView === 'games' && (
                    <p>No qualified because we began our career</p>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    <p>No draws fonud</p>
                </div>
                )}
            </div>
            )}
            {currentCompetition === 'cup' && (
            <div id="cup">
                {currentView === 'games' && (
                <div id="games" className="matches-panel">
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs">2-0</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Barcelona" />
                                <span>Atletico Madrid</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: March 14th, 2025</p>
                            <p>Cup - Final</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>
                </div>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    <p>No draws found</p>
                </div>
                )}

            </div>
            )}
            {currentCompetition === 'supercup' && (
            <div id="supercup">
                {currentView === 'games' && (
                    <p>No played because we haven't won the Elite League or Gold League</p>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                </div>
                )}
            </div>
            )}
        </div>
        )}
        {selectedSeason === 'Season 2' && (
        <div id="season2">
            {currentCompetition === 'league' && (
            <div id="league">
                {currentView === 'games' && (
                <p>No matches fonud</p>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    <table>
                        <caption>Table League</caption>
                        <thead>
                            <tr>
                                <th>N°</th>
                                <th>Team</th>
                                <th>MD</th>
                                <th>W</th>
                                <th>D</th>
                                <th>L</th>
                                <th>BP</th>
                                <th>BC</th>
                                <th>AVG</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Gaming FC</td>
                                <td>26</td>
                                <td>22</td>
                                <td>3</td>
                                <td>1</td>
                                <td>73</td>
                                <td>-</td>
                                <td>-</td>
                                <td>69</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Prague ACF</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>56</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Spenge 2013</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>48</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>UnwarreantedTr FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>44</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Porsib FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>44</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Dingolfing RCD</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>39</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>ElaboratePeak FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>37</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Camilia FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>33</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>The Wolf</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>29</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>hh FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>27</td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>RCD Zlin</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>27</td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>Kilkis CFR</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>19</td>
                            </tr>
                            <tr>
                                <td>13</td>
                                <td>Elektrougli</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>18</td>
                            </tr>
                            <tr>
                                <td>14</td>
                                <td>ACF Empoli</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>17</td>
                            </tr>
                        </tbody>
                        <tfoot>

                        </tfoot>
                    </table>
                </div>
                )}
            </div>
            )}
            {currentCompetition === 'ucl' && (
            <div id="ucl">
                {currentView === 'games' && (
                <div id="games" className="matches-panel">
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs">1-2</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Chelsea FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 27th, 2023</p>
                            <p>Elite League - Final</p>
                            <p>Status: Finish</p>
                        </div>
                        
                    </div>
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Panathinaikos FC</span>
                            </div>
                            <span className="vs">1-1</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Gaming FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 25th, 2023</p>
                            <p>Elite League - Semifinal : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs">2-1</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Panathinaikos FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 23rd, 2023</p>
                            <p>Elite League - Semifinal : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span></span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span></span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 21st, 2023</p>
                            <p>Elite League - Round of 8 : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span></span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span></span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 19th, 2023</p>
                            <p>Elite League - Round of 8 : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span></span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 17th, 2023</p>
                            <p>Elite League - Round of 16 : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span></span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Gaming FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 15th, 2023</p>
                            <p>Elite League - Round of 16 : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>
                    <p>No matches found for group stage</p>
                </div>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    <table>
                        <caption>Group Stage : Group </caption>
                        <thead>
                            <tr>
                                <th>N°</th>
                                <th>Team</th>
                                <th>MD</th>
                                <th>W</th>
                                <th>D</th>
                                <th>L</th>
                                <th>BP</th>
                                <th>BC</th>
                                <th>AVG</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Gaming FC</td>
                                <td>6</td>
                                <td>5</td>
                                <td>1</td>
                                <td>0</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td></td>
                                <td>6</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td></td>
                                <td>6</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td></td>
                                <td>6</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )}
            </div>
            )}
            {currentCompetition === 'cup' && (
            <div id="cup">
                {currentView === 'games' && (
                <div id="games" className="matches-panel">
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Seville</span>
                            </div>
                            <span className="vs">4-1</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Barcelona" />
                                <span>Gaming FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 10th, 2023</p>
                            <p>Cup - Round of 64 : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs">3-2</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Barcelona" />
                                <span>Sevilla</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 8th, 2023</p>
                            <p>Cup - Round of 64 : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>
                </div>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    
                </div>
                )}
            </div>
            )}
            {currentCompetition === 'supercup' && (
            <div id="supercup">
                {currentView === 'games' && (
                    <p>No played because we haven't won the Elite League or Gold League</p>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    <p>No draws fonud</p>
                </div>
                )}
            </div>
            )}
        </div>
        )}
        {selectedSeason === 'Season 3' && (
        <div id="season3">
            {currentCompetition === 'league' && (
            <div id="league">
                {currentView === 'games' && (
                <p>No matches fonud</p>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    <table>
                        <caption>Table League</caption>
                        <thead>
                            <tr>
                                <th>N°</th>
                                <th>Team</th>
                                <th>MD</th>
                                <th>W</th>
                                <th>D</th>
                                <th>L</th>
                                <th>BP</th>
                                <th>BC</th>
                                <th>AVG</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Gaming FC</td>
                                <td>26</td>
                                <td>22</td>
                                <td>3</td>
                                <td>1</td>
                                <td>73</td>
                                <td>-</td>
                                <td>-</td>
                                <td>69</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Prague ACF</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>56</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Spenge 2013</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>48</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>UnwarreantedTr FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>44</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Porsib FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>44</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Dingolfing RCD</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>39</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>ElaboratePeak FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>37</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Camilia FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>33</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>The Wolf</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>29</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>hh FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>27</td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>RCD Zlin</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>27</td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>Kilkis CFR</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>19</td>
                            </tr>
                            <tr>
                                <td>13</td>
                                <td>Elektrougli</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>18</td>
                            </tr>
                            <tr>
                                <td>14</td>
                                <td>ACF Empoli</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>17</td>
                            </tr>
                        </tbody>
                        <tfoot>

                        </tfoot>
                    </table>
                </div>
                )}
            </div>
            )}
            {currentCompetition === 'ucl' && (
            <div id="ucl">
                {currentView === 'games' && (
                <div id="games" className="matches-panel">
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs">1-2</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Chelsea FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 27th, 2023</p>
                            <p>Elite League - Final</p>
                            <p>Status: Finish</p>
                        </div>
                        
                    </div>
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Panathinaikos FC</span>
                            </div>
                            <span className="vs">1-1</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Gaming FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 25th, 2023</p>
                            <p>Elite League - Semifinal : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs">2-1</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Panathinaikos FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 23rd, 2023</p>
                            <p>Elite League - Semifinal : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span></span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span></span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 21st, 2023</p>
                            <p>Elite League - Round of 8 : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span></span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span></span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 19th, 2023</p>
                            <p>Elite League - Round of 8 : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span></span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 17th, 2023</p>
                            <p>Elite League - Round of 16 : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span></span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Gaming FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 15th, 2023</p>
                            <p>Elite League - Round of 16 : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>
                    <p>No matches found for group stage</p>
                </div>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    <table>
                        <caption>Group Stage : Group </caption>
                        <thead>
                            <tr>
                                <th>N°</th>
                                <th>Team</th>
                                <th>MD</th>
                                <th>W</th>
                                <th>D</th>
                                <th>L</th>
                                <th>BP</th>
                                <th>BC</th>
                                <th>AVG</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Gaming FC</td>
                                <td>6</td>
                                <td>5</td>
                                <td>1</td>
                                <td>0</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td></td>
                                <td>6</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td></td>
                                <td>6</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td></td>
                                <td>6</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )}
            </div>
            )}
            {currentCompetition === 'cup' && (
            <div id="cup">
                {currentView === 'games' && (
                <div id="games" className="matches-panel">
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Seville</span>
                            </div>
                            <span className="vs">4-1</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Barcelona" />
                                <span>Gaming FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 10th, 2023</p>
                            <p>Cup - Round of 64 : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs">3-2</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Barcelona" />
                                <span>Sevilla</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 8th, 2023</p>
                            <p>Cup - Round of 64 : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>
                </div>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    
                </div>
                )}
            </div>
            )}
            {currentCompetition === 'supercup' && (
            <div id="supercup">
                {currentView === 'games' && (
                    <p>No played because we haven't won the Elite League or Gold League</p>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    <p>No draws fonud</p>
                </div>
                )}
            </div>
            )}
        </div>
        )}
        {selectedSeason === 'Season 4' && (
        <div id="season4">
            {currentCompetition === 'league' && (
            <div id="league">
                {currentView === 'games' && (
                <p>No matches fonud</p>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    <table>
                        <caption>Table League</caption>
                        <thead>
                            <tr>
                                <th>N°</th>
                                <th>Team</th>
                                <th>MD</th>
                                <th>W</th>
                                <th>D</th>
                                <th>L</th>
                                <th>BP</th>
                                <th>BC</th>
                                <th>AVG</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Gaming FC</td>
                                <td>26</td>
                                <td>22</td>
                                <td>3</td>
                                <td>1</td>
                                <td>73</td>
                                <td>-</td>
                                <td>-</td>
                                <td>69</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Prague ACF</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>56</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Spenge 2013</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>48</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>UnwarreantedTr FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>44</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Porsib FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>44</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Dingolfing RCD</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>39</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>ElaboratePeak FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>37</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Camilia FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>33</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>The Wolf</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>29</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>hh FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>27</td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>RCD Zlin</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>27</td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>Kilkis CFR</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>19</td>
                            </tr>
                            <tr>
                                <td>13</td>
                                <td>Elektrougli</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>18</td>
                            </tr>
                            <tr>
                                <td>14</td>
                                <td>ACF Empoli</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>17</td>
                            </tr>
                        </tbody>
                        <tfoot>

                        </tfoot>
                    </table>
                </div>
                )}
            </div>
            )}
            {currentCompetition === 'ucl' && (
            <div id="ucl">
                {currentView === 'games' && (
                <div id="games" className="matches-panel">
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs">1-2</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Chelsea FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 27th, 2023</p>
                            <p>Elite League - Final</p>
                            <p>Status: Finish</p>
                        </div>
                        
                    </div>
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Panathinaikos FC</span>
                            </div>
                            <span className="vs">1-1</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Gaming FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 25th, 2023</p>
                            <p>Elite League - Semifinal : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs">2-1</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Panathinaikos FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 23rd, 2023</p>
                            <p>Elite League - Semifinal : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span></span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span></span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 21st, 2023</p>
                            <p>Elite League - Round of 8 : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span></span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span></span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 19th, 2023</p>
                            <p>Elite League - Round of 8 : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span></span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 17th, 2023</p>
                            <p>Elite League - Round of 16 : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span></span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Gaming FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 15th, 2023</p>
                            <p>Elite League - Round of 16 : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>
                    <p>No matches found for group stage</p>
                </div>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    <table>
                        <caption>Group Stage : Group </caption>
                        <thead>
                            <tr>
                                <th>N°</th>
                                <th>Team</th>
                                <th>MD</th>
                                <th>W</th>
                                <th>D</th>
                                <th>L</th>
                                <th>BP</th>
                                <th>BC</th>
                                <th>AVG</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Gaming FC</td>
                                <td>6</td>
                                <td>5</td>
                                <td>1</td>
                                <td>0</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td></td>
                                <td>6</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td></td>
                                <td>6</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td></td>
                                <td>6</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )}
            </div>
            )}
            {currentCompetition === 'cup' && (
            <div id="cup">
                {currentView === 'games' && (
                <div id="games" className="matches-panel">
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Seville</span>
                            </div>
                            <span className="vs">4-1</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Barcelona" />
                                <span>Gaming FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 10th, 2023</p>
                            <p>Cup - Round of 64 : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs">3-2</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Barcelona" />
                                <span>Sevilla</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 8th, 2023</p>
                            <p>Cup - Round of 64 : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>
                </div>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    
                </div>
                )}
            </div>
            )}
            {currentCompetition === 'supercup' && (
            <div id="supercup">
                {currentView === 'games' && (
                    <p>No played because we haven't won the Elite League or Gold League</p>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    <p>No draws fonud</p>
                </div>
                )}
            </div>
            )}
        </div>
        )}
        {selectedSeason === 'Season 5' && (
        <div id="season5">
            {currentCompetition === 'league' && (
            <div id="league">
                {currentView === 'games' && (
                <p>No matches fonud</p>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    <table>
                        <caption>Table League</caption>
                        <thead>
                            <tr>
                                <th>N°</th>
                                <th>Team</th>
                                <th>MD</th>
                                <th>W</th>
                                <th>D</th>
                                <th>L</th>
                                <th>BP</th>
                                <th>BC</th>
                                <th>AVG</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Gaming FC</td>
                                <td>26</td>
                                <td>22</td>
                                <td>3</td>
                                <td>1</td>
                                <td>73</td>
                                <td>-</td>
                                <td>-</td>
                                <td>69</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Prague ACF</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>56</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Spenge 2013</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>48</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>UnwarreantedTr FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>44</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Porsib FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>44</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Dingolfing RCD</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>39</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>ElaboratePeak FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>37</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Camilia FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>33</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>The Wolf</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>29</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>hh FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>27</td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>RCD Zlin</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>27</td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>Kilkis CFR</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>19</td>
                            </tr>
                            <tr>
                                <td>13</td>
                                <td>Elektrougli</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>18</td>
                            </tr>
                            <tr>
                                <td>14</td>
                                <td>ACF Empoli</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>17</td>
                            </tr>
                        </tbody>
                        <tfoot>

                        </tfoot>
                    </table>
                </div>
                )}
            </div>
            )}
            {currentCompetition === 'ucl' && (
            <div id="ucl">
                {currentView === 'games' && (
                <div id="games" className="matches-panel">
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs">1-2</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Chelsea FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 27th, 2023</p>
                            <p>Elite League - Final</p>
                            <p>Status: Finish</p>
                        </div>
                        
                    </div>
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Panathinaikos FC</span>
                            </div>
                            <span className="vs">1-1</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Gaming FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 25th, 2023</p>
                            <p>Elite League - Semifinal : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs">2-1</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Panathinaikos FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 23rd, 2023</p>
                            <p>Elite League - Semifinal : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span></span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span></span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 21st, 2023</p>
                            <p>Elite League - Round of 8 : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span></span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span></span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 19th, 2023</p>
                            <p>Elite League - Round of 8 : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span></span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 17th, 2023</p>
                            <p>Elite League - Round of 16 : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span></span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Gaming FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 15th, 2023</p>
                            <p>Elite League - Round of 16 : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>
                    <p>No matches found for group stage</p>
                </div>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    <table>
                        <caption>Group Stage : Group </caption>
                        <thead>
                            <tr>
                                <th>N°</th>
                                <th>Team</th>
                                <th>MD</th>
                                <th>W</th>
                                <th>D</th>
                                <th>L</th>
                                <th>BP</th>
                                <th>BC</th>
                                <th>AVG</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Gaming FC</td>
                                <td>6</td>
                                <td>5</td>
                                <td>1</td>
                                <td>0</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td></td>
                                <td>6</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td></td>
                                <td>6</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td></td>
                                <td>6</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )}
            </div>
            )}
            {currentCompetition === 'cup' && (
            <div id="cup">
                {currentView === 'games' && (
                <div id="games" className="matches-panel">
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Seville</span>
                            </div>
                            <span className="vs">4-1</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Barcelona" />
                                <span>Gaming FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 10th, 2023</p>
                            <p>Cup - Round of 64 : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs">3-2</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Barcelona" />
                                <span>Sevilla</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 8th, 2023</p>
                            <p>Cup - Round of 64 : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>
                </div>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    
                </div>
                )}
            </div>
            )}
            {currentCompetition === 'supercup' && (
            <div id="supercup">
                {currentView === 'games' && (
                    <p>No played because we haven't won the Elite League or Gold League</p>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    <p>No draws fonud</p>
                </div>
                )}
            </div>
            )}
        </div>
        )}
        {selectedSeason === 'Season 6' && (
        <div id="season6">
            {currentCompetition === 'league' && (
            <div id="league">
                {currentView === 'games' && (
                <p>No matches fonud</p>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    <table>
                        <caption>Table League</caption>
                        <thead>
                            <tr>
                                <th>N°</th>
                                <th>Team</th>
                                <th>MD</th>
                                <th>W</th>
                                <th>D</th>
                                <th>L</th>
                                <th>BP</th>
                                <th>BC</th>
                                <th>AVG</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Gaming FC</td>
                                <td>26</td>
                                <td>22</td>
                                <td>3</td>
                                <td>1</td>
                                <td>73</td>
                                <td>-</td>
                                <td>-</td>
                                <td>69</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Prague ACF</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>56</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Spenge 2013</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>48</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>UnwarreantedTr FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>44</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Porsib FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>44</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Dingolfing RCD</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>39</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>ElaboratePeak FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>37</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Camilia FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>33</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>The Wolf</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>29</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>hh FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>27</td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>RCD Zlin</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>27</td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>Kilkis CFR</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>19</td>
                            </tr>
                            <tr>
                                <td>13</td>
                                <td>Elektrougli</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>18</td>
                            </tr>
                            <tr>
                                <td>14</td>
                                <td>ACF Empoli</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>17</td>
                            </tr>
                        </tbody>
                        <tfoot>

                        </tfoot>
                    </table>
                </div>
                )}
            </div>
            )}
            {currentCompetition === 'ucl' && (
            <div id="ucl">
                {currentView === 'games' && (
                <div id="games" className="matches-panel">
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs">1-2</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Chelsea FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 27th, 2023</p>
                            <p>Elite League - Final</p>
                            <p>Status: Finish</p>
                        </div>
                        
                    </div>
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Panathinaikos FC</span>
                            </div>
                            <span className="vs">1-1</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Gaming FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 25th, 2023</p>
                            <p>Elite League - Semifinal : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs">2-1</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Panathinaikos FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 23rd, 2023</p>
                            <p>Elite League - Semifinal : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span></span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span></span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 21st, 2023</p>
                            <p>Elite League - Round of 8 : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span></span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span></span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 19th, 2023</p>
                            <p>Elite League - Round of 8 : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span></span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 17th, 2023</p>
                            <p>Elite League - Round of 16 : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span></span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Gaming FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 15th, 2023</p>
                            <p>Elite League - Round of 16 : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>
                    <p>No matches found for group stage</p>
                </div>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    <table>
                        <caption>Group Stage : Group </caption>
                        <thead>
                            <tr>
                                <th>N°</th>
                                <th>Team</th>
                                <th>MD</th>
                                <th>W</th>
                                <th>D</th>
                                <th>L</th>
                                <th>BP</th>
                                <th>BC</th>
                                <th>AVG</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Gaming FC</td>
                                <td>6</td>
                                <td>5</td>
                                <td>1</td>
                                <td>0</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td></td>
                                <td>6</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td></td>
                                <td>6</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td></td>
                                <td>6</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )}
            </div>
            )}
            {currentCompetition === 'cup' && (
            <div id="cup">
                {currentView === 'games' && (
                <div id="games" className="matches-panel">
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Seville</span>
                            </div>
                            <span className="vs">4-1</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Barcelona" />
                                <span>Gaming FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 10th, 2023</p>
                            <p>Cup - Round of 64 : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs">3-2</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Barcelona" />
                                <span>Sevilla</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 8th, 2023</p>
                            <p>Cup - Round of 64 : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>
                </div>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    
                </div>
                )}
            </div>
            )}
            {currentCompetition === 'supercup' && (
            <div id="supercup">
                {currentView === 'games' && (
                    <p>No played because we haven't won the Elite League or Gold League</p>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    <p>No draws fonud</p>
                </div>
                )}
            </div>
            )}
        </div>
        )}
        {selectedSeason === 'Season 7' && (
        <div id="season7">
            {currentCompetition === 'league' && (
            <div id="league">
                {currentView === 'games' && (
                <p>No matches fonud</p>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    <table>
                        <caption>Table League</caption>
                        <thead>
                            <tr>
                                <th>N°</th>
                                <th>Team</th>
                                <th>MD</th>
                                <th>W</th>
                                <th>D</th>
                                <th>L</th>
                                <th>BP</th>
                                <th>BC</th>
                                <th>AVG</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Gaming FC</td>
                                <td>26</td>
                                <td>22</td>
                                <td>3</td>
                                <td>1</td>
                                <td>73</td>
                                <td>-</td>
                                <td>-</td>
                                <td>69</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Prague ACF</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>56</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Spenge 2013</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>48</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>UnwarreantedTr FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>44</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Porsib FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>44</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Dingolfing RCD</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>39</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>ElaboratePeak FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>37</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Camilia FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>33</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>The Wolf</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>29</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>hh FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>27</td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>RCD Zlin</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>27</td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>Kilkis CFR</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>19</td>
                            </tr>
                            <tr>
                                <td>13</td>
                                <td>Elektrougli</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>18</td>
                            </tr>
                            <tr>
                                <td>14</td>
                                <td>ACF Empoli</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>17</td>
                            </tr>
                        </tbody>
                        <tfoot>

                        </tfoot>
                    </table>
                </div>
                )}
            </div>
            )}
            {currentCompetition === 'ucl' && (
            <div id="ucl">
                {currentView === 'games' && (
                <div id="games" className="matches-panel">
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs">1-2</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Chelsea FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 27th, 2023</p>
                            <p>Elite League - Final</p>
                            <p>Status: Finish</p>
                        </div>
                        
                    </div>
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Panathinaikos FC</span>
                            </div>
                            <span className="vs">1-1</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Gaming FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 25th, 2023</p>
                            <p>Elite League - Semifinal : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs">2-1</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Panathinaikos FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 23rd, 2023</p>
                            <p>Elite League - Semifinal : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span></span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span></span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 21st, 2023</p>
                            <p>Elite League - Round of 8 : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span></span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span></span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 19th, 2023</p>
                            <p>Elite League - Round of 8 : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span></span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 17th, 2023</p>
                            <p>Elite League - Round of 16 : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span></span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Gaming FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 15th, 2023</p>
                            <p>Elite League - Round of 16 : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>
                    <p>No matches found for group stage</p>
                </div>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    <table>
                        <caption>Group Stage : Group </caption>
                        <thead>
                            <tr>
                                <th>N°</th>
                                <th>Team</th>
                                <th>MD</th>
                                <th>W</th>
                                <th>D</th>
                                <th>L</th>
                                <th>BP</th>
                                <th>BC</th>
                                <th>AVG</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Gaming FC</td>
                                <td>6</td>
                                <td>5</td>
                                <td>1</td>
                                <td>0</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td></td>
                                <td>6</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td></td>
                                <td>6</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td></td>
                                <td>6</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )}
            </div>
            )}
            {currentCompetition === 'cup' && (
            <div id="cup">
                {currentView === 'games' && (
                <div id="games" className="matches-panel">
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Seville</span>
                            </div>
                            <span className="vs">4-1</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Barcelona" />
                                <span>Gaming FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 10th, 2023</p>
                            <p>Cup - Round of 64 : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs">3-2</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Barcelona" />
                                <span>Sevilla</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 8th, 2023</p>
                            <p>Cup - Round of 64 : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>
                </div>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    
                </div>
                )}
            </div>
            )}
            {currentCompetition === 'supercup' && (
            <div id="supercup">
                {currentView === 'games' && (
                    <p>No played because we haven't won the Elite League or Gold League</p>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    <p>No draws fonud</p>
                </div>
                )}
            </div>
            )}
        </div>
        )}
        {selectedSeason === 'Season 8' && (
        <div id="season8">
            {currentCompetition === 'league' && (
            <div id="league">
                {currentView === 'games' && (
                <p>No matches fonud</p>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    <table>
                        <caption>Table League</caption>
                        <thead>
                            <tr>
                                <th>N°</th>
                                <th>Team</th>
                                <th>MD</th>
                                <th>W</th>
                                <th>D</th>
                                <th>L</th>
                                <th>BP</th>
                                <th>BC</th>
                                <th>AVG</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Gaming FC</td>
                                <td>26</td>
                                <td>22</td>
                                <td>3</td>
                                <td>1</td>
                                <td>73</td>
                                <td>-</td>
                                <td>-</td>
                                <td>69</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Prague ACF</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>56</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Spenge 2013</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>48</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>UnwarreantedTr FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>44</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Porsib FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>44</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Dingolfing RCD</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>39</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>ElaboratePeak FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>37</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Camilia FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>33</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>The Wolf</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>29</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>hh FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>27</td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>RCD Zlin</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>27</td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>Kilkis CFR</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>19</td>
                            </tr>
                            <tr>
                                <td>13</td>
                                <td>Elektrougli</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>18</td>
                            </tr>
                            <tr>
                                <td>14</td>
                                <td>ACF Empoli</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>17</td>
                            </tr>
                        </tbody>
                        <tfoot>

                        </tfoot>
                    </table>
                </div>
                )}
            </div>
            )}
            {currentCompetition === 'ucl' && (
            <div id="ucl">
                {currentView === 'games' && (
                <div id="games" className="matches-panel">
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs">1-2</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Chelsea FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 27th, 2023</p>
                            <p>Elite League - Final</p>
                            <p>Status: Finish</p>
                        </div>
                        
                    </div>
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Panathinaikos FC</span>
                            </div>
                            <span className="vs">1-1</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Gaming FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 25th, 2023</p>
                            <p>Elite League - Semifinal : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs">2-1</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Panathinaikos FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 23rd, 2023</p>
                            <p>Elite League - Semifinal : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span></span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span></span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 21st, 2023</p>
                            <p>Elite League - Round of 8 : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span></span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span></span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 19th, 2023</p>
                            <p>Elite League - Round of 8 : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span></span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 17th, 2023</p>
                            <p>Elite League - Round of 16 : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span></span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Gaming FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 15th, 2023</p>
                            <p>Elite League - Round of 16 : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>
                    <p>No matches found for group stage</p>
                </div>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    <table>
                        <caption>Group Stage : Group </caption>
                        <thead>
                            <tr>
                                <th>N°</th>
                                <th>Team</th>
                                <th>MD</th>
                                <th>W</th>
                                <th>D</th>
                                <th>L</th>
                                <th>BP</th>
                                <th>BC</th>
                                <th>AVG</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Gaming FC</td>
                                <td>6</td>
                                <td>5</td>
                                <td>1</td>
                                <td>0</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td></td>
                                <td>6</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td></td>
                                <td>6</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td></td>
                                <td>6</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )}
            </div>
            )}
            {currentCompetition === 'cup' && (
            <div id="cup">
                {currentView === 'games' && (
                <div id="games" className="matches-panel">
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Seville</span>
                            </div>
                            <span className="vs">4-1</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Barcelona" />
                                <span>Gaming FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 10th, 2023</p>
                            <p>Cup - Round of 64 : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs">3-2</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Barcelona" />
                                <span>Sevilla</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 8th, 2023</p>
                            <p>Cup - Round of 64 : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>
                </div>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    
                </div>
                )}
            </div>
            )}
            {currentCompetition === 'supercup' && (
            <div id="supercup">
                {currentView === 'games' && (
                    <p>No played because we haven't won the Elite League or Gold League</p>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    <p>No draws fonud</p>
                </div>
                )}
            </div>
            )}
        </div>
        )}
        {selectedSeason === 'Season 9' && (
        <div id="season9">
            {currentCompetition === 'league' && (
            <div id="league">
                {currentView === 'games' && (
                <p>No matches fonud</p>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    <table>
                        <caption>Table League</caption>
                        <thead>
                            <tr>
                                <th>N°</th>
                                <th>Team</th>
                                <th>MD</th>
                                <th>W</th>
                                <th>D</th>
                                <th>L</th>
                                <th>BP</th>
                                <th>BC</th>
                                <th>AVG</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Gaming FC</td>
                                <td>26</td>
                                <td>22</td>
                                <td>3</td>
                                <td>1</td>
                                <td>73</td>
                                <td>-</td>
                                <td>-</td>
                                <td>69</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Prague ACF</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>56</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Spenge 2013</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>48</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>UnwarreantedTr FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>44</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Porsib FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>44</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Dingolfing RCD</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>39</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>ElaboratePeak FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>37</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Camilia FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>33</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>The Wolf</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>29</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>hh FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>27</td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>RCD Zlin</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>27</td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>Kilkis CFR</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>19</td>
                            </tr>
                            <tr>
                                <td>13</td>
                                <td>Elektrougli</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>18</td>
                            </tr>
                            <tr>
                                <td>14</td>
                                <td>ACF Empoli</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>17</td>
                            </tr>
                        </tbody>
                        <tfoot>

                        </tfoot>
                    </table>
                </div>
                )}
            </div>
            )}
            {currentCompetition === 'ucl' && (
            <div id="ucl">
                {currentView === 'games' && (
                <div id="games" className="matches-panel">
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs">1-2</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Chelsea FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 27th, 2023</p>
                            <p>Elite League - Final</p>
                            <p>Status: Finish</p>
                        </div>
                        
                    </div>
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Panathinaikos FC</span>
                            </div>
                            <span className="vs">1-1</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Gaming FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 25th, 2023</p>
                            <p>Elite League - Semifinal : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs">2-1</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Panathinaikos FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 23rd, 2023</p>
                            <p>Elite League - Semifinal : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span></span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span></span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 21st, 2023</p>
                            <p>Elite League - Round of 8 : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span></span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span></span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 19th, 2023</p>
                            <p>Elite League - Round of 8 : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span></span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 17th, 2023</p>
                            <p>Elite League - Round of 16 : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span></span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Gaming FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 15th, 2023</p>
                            <p>Elite League - Round of 16 : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>
                    <p>No matches found for group stage</p>
                </div>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    <table>
                        <caption>Group Stage : Group </caption>
                        <thead>
                            <tr>
                                <th>N°</th>
                                <th>Team</th>
                                <th>MD</th>
                                <th>W</th>
                                <th>D</th>
                                <th>L</th>
                                <th>BP</th>
                                <th>BC</th>
                                <th>AVG</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Gaming FC</td>
                                <td>6</td>
                                <td>5</td>
                                <td>1</td>
                                <td>0</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td></td>
                                <td>6</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td></td>
                                <td>6</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td></td>
                                <td>6</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )}
            </div>
            )}
            {currentCompetition === 'cup' && (
            <div id="cup">
                {currentView === 'games' && (
                <div id="games" className="matches-panel">
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Seville</span>
                            </div>
                            <span className="vs">4-1</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Barcelona" />
                                <span>Gaming FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 10th, 2023</p>
                            <p>Cup - Round of 64 : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs">3-2</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Barcelona" />
                                <span>Sevilla</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 8th, 2023</p>
                            <p>Cup - Round of 64 : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>
                </div>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    
                </div>
                )}
            </div>
            )}
            {currentCompetition === 'supercup' && (
            <div id="supercup">
                {currentView === 'games' && (
                    <p>No played because we haven't won the Elite League or Gold League</p>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    <p>No draws fonud</p>
                </div>
                )}
            </div>
            )}
        </div>
        )}
        {selectedSeason === 'Season 10' && (
        <div id="season10">
            {currentCompetition === 'league' && (
            <div id="league">
                {currentView === 'games' && (
                <p>No matches fonud</p>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    <table>
                        <caption>Table League</caption>
                        <thead>
                            <tr>
                                <th>N°</th>
                                <th>Team</th>
                                <th>MD</th>
                                <th>W</th>
                                <th>D</th>
                                <th>L</th>
                                <th>BP</th>
                                <th>BC</th>
                                <th>AVG</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Gaming FC</td>
                                <td>26</td>
                                <td>22</td>
                                <td>3</td>
                                <td>1</td>
                                <td>73</td>
                                <td>-</td>
                                <td>-</td>
                                <td>69</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Prague ACF</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>56</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Spenge 2013</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>48</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>UnwarreantedTr FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>44</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Porsib FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>44</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Dingolfing RCD</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>39</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>ElaboratePeak FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>37</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Camilia FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>33</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>The Wolf</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>29</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>hh FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>27</td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>RCD Zlin</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>27</td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>Kilkis CFR</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>19</td>
                            </tr>
                            <tr>
                                <td>13</td>
                                <td>Elektrougli</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>18</td>
                            </tr>
                            <tr>
                                <td>14</td>
                                <td>ACF Empoli</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>17</td>
                            </tr>
                        </tbody>
                        <tfoot>

                        </tfoot>
                    </table>
                </div>
                )}
            </div>
            )}
            {currentCompetition === 'ucl' && (
            <div id="ucl">
                {currentView === 'games' && (
                <div id="games" className="matches-panel">
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs">1-2</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Chelsea FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 27th, 2023</p>
                            <p>Elite League - Final</p>
                            <p>Status: Finish</p>
                        </div>
                        
                    </div>
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Panathinaikos FC</span>
                            </div>
                            <span className="vs">1-1</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Gaming FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 25th, 2023</p>
                            <p>Elite League - Semifinal : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs">2-1</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Panathinaikos FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 23rd, 2023</p>
                            <p>Elite League - Semifinal : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span></span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span></span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 21st, 2023</p>
                            <p>Elite League - Round of 8 : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span></span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span></span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 19th, 2023</p>
                            <p>Elite League - Round of 8 : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span></span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 17th, 2023</p>
                            <p>Elite League - Round of 16 : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span></span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Gaming FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 15th, 2023</p>
                            <p>Elite League - Round of 16 : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>
                    <p>No matches found for group stage</p>
                </div>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    <table>
                        <caption>Group Stage : Group </caption>
                        <thead>
                            <tr>
                                <th>N°</th>
                                <th>Team</th>
                                <th>MD</th>
                                <th>W</th>
                                <th>D</th>
                                <th>L</th>
                                <th>BP</th>
                                <th>BC</th>
                                <th>AVG</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Gaming FC</td>
                                <td>6</td>
                                <td>5</td>
                                <td>1</td>
                                <td>0</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td></td>
                                <td>6</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td></td>
                                <td>6</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td></td>
                                <td>6</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )}
            </div>
            )}
            {currentCompetition === 'cup' && (
            <div id="cup">
                {currentView === 'games' && (
                <div id="games" className="matches-panel">
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Seville</span>
                            </div>
                            <span className="vs">4-1</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Barcelona" />
                                <span>Gaming FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 10th, 2023</p>
                            <p>Cup - Round of 64 : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs">3-2</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Barcelona" />
                                <span>Sevilla</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 8th, 2023</p>
                            <p>Cup - Round of 64 : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>
                </div>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    
                </div>
                )}
            </div>
            )}
            {currentCompetition === 'supercup' && (
            <div id="supercup">
                {currentView === 'games' && (
                    <p>No played because we haven't won the Elite League or Gold League</p>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    <p>No draws fonud</p>
                </div>
                )}
            </div>
            )}
        </div>
        )}
        {selectedSeason === 'Season 11' && (
        <div id="season11">
            {currentCompetition === 'league' && (
            <div id="league">
                {currentView === 'games' && (
                <p>No matches fonud</p>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    <table>
                        <caption>Table League</caption>
                        <thead>
                            <tr>
                                <th>N°</th>
                                <th>Team</th>
                                <th>MD</th>
                                <th>W</th>
                                <th>D</th>
                                <th>L</th>
                                <th>BP</th>
                                <th>BC</th>
                                <th>AVG</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Gaming FC</td>
                                <td>26</td>
                                <td>22</td>
                                <td>3</td>
                                <td>1</td>
                                <td>73</td>
                                <td>-</td>
                                <td>-</td>
                                <td>69</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Prague ACF</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>56</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Spenge 2013</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>48</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>UnwarreantedTr FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>44</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Porsib FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>44</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Dingolfing RCD</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>39</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>ElaboratePeak FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>37</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Camilia FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>33</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>The Wolf</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>29</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>hh FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>27</td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>RCD Zlin</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>27</td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>Kilkis CFR</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>19</td>
                            </tr>
                            <tr>
                                <td>13</td>
                                <td>Elektrougli</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>18</td>
                            </tr>
                            <tr>
                                <td>14</td>
                                <td>ACF Empoli</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>17</td>
                            </tr>
                        </tbody>
                        <tfoot>

                        </tfoot>
                    </table>
                </div>
                )}
            </div>
            )}
            {currentCompetition === 'ucl' && (
            <div id="ucl">
                {currentView === 'games' && (
                <div id="games" className="matches-panel">
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs">1-2</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Chelsea FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 27th, 2023</p>
                            <p>Elite League - Final</p>
                            <p>Status: Finish</p>
                        </div>
                        
                    </div>
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Panathinaikos FC</span>
                            </div>
                            <span className="vs">1-1</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Gaming FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 25th, 2023</p>
                            <p>Elite League - Semifinal : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs">2-1</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Panathinaikos FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 23rd, 2023</p>
                            <p>Elite League - Semifinal : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span></span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span></span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 21st, 2023</p>
                            <p>Elite League - Round of 8 : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span></span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span></span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 19th, 2023</p>
                            <p>Elite League - Round of 8 : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span></span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 17th, 2023</p>
                            <p>Elite League - Round of 16 : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span></span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Gaming FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 15th, 2023</p>
                            <p>Elite League - Round of 16 : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>
                    <p>No matches found for group stage</p>
                </div>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    <table>
                        <caption>Group Stage : Group </caption>
                        <thead>
                            <tr>
                                <th>N°</th>
                                <th>Team</th>
                                <th>MD</th>
                                <th>W</th>
                                <th>D</th>
                                <th>L</th>
                                <th>BP</th>
                                <th>BC</th>
                                <th>AVG</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Gaming FC</td>
                                <td>6</td>
                                <td>5</td>
                                <td>1</td>
                                <td>0</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td></td>
                                <td>6</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td></td>
                                <td>6</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td></td>
                                <td>6</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )}
            </div>
            )}
            {currentCompetition === 'cup' && (
            <div id="cup">
                {currentView === 'games' && (
                <div id="games" className="matches-panel">
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Seville</span>
                            </div>
                            <span className="vs">4-1</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Barcelona" />
                                <span>Gaming FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 10th, 2023</p>
                            <p>Cup - Round of 64 : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs">3-2</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Barcelona" />
                                <span>Sevilla</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 8th, 2023</p>
                            <p>Cup - Round of 64 : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>
                </div>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    
                </div>
                )}
            </div>
            )}
            {currentCompetition === 'supercup' && (
            <div id="supercup">
                {currentView === 'games' && (
                    <p>No played because we haven't won the Elite League or Gold League</p>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    <p>No draws fonud</p>
                </div>
                )}
            </div>
            )}
        </div>
        )}
        {selectedSeason === 'Season 12' && (
        <div id="season12">
            {currentCompetition === 'league' && (
            <div id="league">
                {currentView === 'games' && (
                <p>No matches fonud</p>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    <table>
                        <caption>Table League</caption>
                        <thead>
                            <tr>
                                <th>N°</th>
                                <th>Team</th>
                                <th>MD</th>
                                <th>W</th>
                                <th>D</th>
                                <th>L</th>
                                <th>BP</th>
                                <th>BC</th>
                                <th>AVG</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Gaming FC</td>
                                <td>26</td>
                                <td>22</td>
                                <td>3</td>
                                <td>1</td>
                                <td>73</td>
                                <td>-</td>
                                <td>-</td>
                                <td>69</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Prague ACF</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>56</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Spenge 2013</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>48</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>UnwarreantedTr FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>44</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Porsib FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>44</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Dingolfing RCD</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>39</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>ElaboratePeak FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>37</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Camilia FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>33</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>The Wolf</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>29</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>hh FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>27</td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>RCD Zlin</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>27</td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>Kilkis CFR</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>19</td>
                            </tr>
                            <tr>
                                <td>13</td>
                                <td>Elektrougli</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>18</td>
                            </tr>
                            <tr>
                                <td>14</td>
                                <td>ACF Empoli</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>17</td>
                            </tr>
                        </tbody>
                        <tfoot>

                        </tfoot>
                    </table>
                </div>
                )}
            </div>
            )}
            {currentCompetition === 'ucl' && (
            <div id="ucl">
                {currentView === 'games' && (
                <div id="games" className="matches-panel">
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs">1-2</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Chelsea FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 27th, 2023</p>
                            <p>Elite League - Final</p>
                            <p>Status: Finish</p>
                        </div>
                        
                    </div>
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Panathinaikos FC</span>
                            </div>
                            <span className="vs">1-1</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Gaming FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 25th, 2023</p>
                            <p>Elite League - Semifinal : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs">2-1</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Panathinaikos FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 23rd, 2023</p>
                            <p>Elite League - Semifinal : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span></span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span></span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 21st, 2023</p>
                            <p>Elite League - Round of 8 : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span></span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span></span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 19th, 2023</p>
                            <p>Elite League - Round of 8 : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span></span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 17th, 2023</p>
                            <p>Elite League - Round of 16 : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span></span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Gaming FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 15th, 2023</p>
                            <p>Elite League - Round of 16 : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>
                    <p>No matches found for group stage</p>
                </div>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    <table>
                        <caption>Group Stage : Group </caption>
                        <thead>
                            <tr>
                                <th>N°</th>
                                <th>Team</th>
                                <th>MD</th>
                                <th>W</th>
                                <th>D</th>
                                <th>L</th>
                                <th>BP</th>
                                <th>BC</th>
                                <th>AVG</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Gaming FC</td>
                                <td>6</td>
                                <td>5</td>
                                <td>1</td>
                                <td>0</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td></td>
                                <td>6</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td></td>
                                <td>6</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td></td>
                                <td>6</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )}
            </div>
            )}
            {currentCompetition === 'cup' && (
            <div id="cup">
                {currentView === 'games' && (
                <div id="games" className="matches-panel">
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Seville</span>
                            </div>
                            <span className="vs">4-1</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Barcelona" />
                                <span>Gaming FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 10th, 2023</p>
                            <p>Cup - Round of 64 : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs">3-2</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Barcelona" />
                                <span>Sevilla</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 8th, 2023</p>
                            <p>Cup - Round of 64 : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>
                </div>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    
                </div>
                )}
            </div>
            )}
            {currentCompetition === 'supercup' && (
            <div id="supercup">
                {currentView === 'games' && (
                    <p>No played because we haven't won the Elite League or Gold League</p>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    <p>No draws fonud</p>
                </div>
                )}
            </div>
            )}
        </div>
        )}
        {selectedSeason === 'Season 13' && (
        <div id="season13">
            {currentCompetition === 'league' && (
            <div id="league">
                {currentView === 'games' && (
                <p>No matches fonud</p>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    <table>
                        <caption>Table League</caption>
                        <thead>
                            <tr>
                                <th>N°</th>
                                <th>Team</th>
                                <th>MD</th>
                                <th>W</th>
                                <th>D</th>
                                <th>L</th>
                                <th>BP</th>
                                <th>BC</th>
                                <th>AVG</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Gaming FC</td>
                                <td>26</td>
                                <td>22</td>
                                <td>3</td>
                                <td>1</td>
                                <td>73</td>
                                <td>-</td>
                                <td>-</td>
                                <td>69</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Prague ACF</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>56</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Spenge 2013</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>48</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>UnwarreantedTr FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>44</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Porsib FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>44</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Dingolfing RCD</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>39</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>ElaboratePeak FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>37</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Camilia FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>33</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>The Wolf</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>29</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>hh FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>27</td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>RCD Zlin</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>27</td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>Kilkis CFR</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>19</td>
                            </tr>
                            <tr>
                                <td>13</td>
                                <td>Elektrougli</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>18</td>
                            </tr>
                            <tr>
                                <td>14</td>
                                <td>ACF Empoli</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>17</td>
                            </tr>
                        </tbody>
                        <tfoot>

                        </tfoot>
                    </table>
                </div>
                )}
            </div>
            )}
            {currentCompetition === 'ucl' && (
            <div id="ucl">
                {currentView === 'games' && (
                <div id="games" className="matches-panel">
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs">1-2</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Chelsea FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 27th, 2023</p>
                            <p>Elite League - Final</p>
                            <p>Status: Finish</p>
                        </div>
                        
                    </div>
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Panathinaikos FC</span>
                            </div>
                            <span className="vs">1-1</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Gaming FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 25th, 2023</p>
                            <p>Elite League - Semifinal : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs">2-1</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Panathinaikos FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 23rd, 2023</p>
                            <p>Elite League - Semifinal : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span></span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span></span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 21st, 2023</p>
                            <p>Elite League - Round of 8 : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span></span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span></span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 19th, 2023</p>
                            <p>Elite League - Round of 8 : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span></span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 17th, 2023</p>
                            <p>Elite League - Round of 16 : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span></span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Gaming FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 15th, 2023</p>
                            <p>Elite League - Round of 16 : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>
                    <p>No matches found for group stage</p>
                </div>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    <table>
                        <caption>Group Stage : Group </caption>
                        <thead>
                            <tr>
                                <th>N°</th>
                                <th>Team</th>
                                <th>MD</th>
                                <th>W</th>
                                <th>D</th>
                                <th>L</th>
                                <th>BP</th>
                                <th>BC</th>
                                <th>AVG</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Gaming FC</td>
                                <td>6</td>
                                <td>5</td>
                                <td>1</td>
                                <td>0</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td></td>
                                <td>6</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td></td>
                                <td>6</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td></td>
                                <td>6</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )}
            </div>
            )}
            {currentCompetition === 'cup' && (
            <div id="cup">
                {currentView === 'games' && (
                <div id="games" className="matches-panel">
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Seville</span>
                            </div>
                            <span className="vs">4-1</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Barcelona" />
                                <span>Gaming FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 10th, 2023</p>
                            <p>Cup - Round of 64 : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs">3-2</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Barcelona" />
                                <span>Sevilla</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 8th, 2023</p>
                            <p>Cup - Round of 64 : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>
                </div>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    
                </div>
                )}
            </div>
            )}
            {currentCompetition === 'supercup' && (
            <div id="supercup">
                {currentView === 'games' && (
                    <p>No played because we haven't won the Elite League or Gold League</p>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    <p>No draws fonud</p>
                </div>
                )}
            </div>
            )}
        </div>
        )}
        {selectedSeason === 'Season 14' && (
        <div id="season14">
            {currentCompetition === 'league' && (
            <div id="league">
                {currentView === 'games' && (
                <p>No matches fonud</p>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    <table>
                        <caption>Table League</caption>
                        <thead>
                            <tr>
                                <th>N°</th>
                                <th>Team</th>
                                <th>MD</th>
                                <th>W</th>
                                <th>D</th>
                                <th>L</th>
                                <th>BP</th>
                                <th>BC</th>
                                <th>AVG</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Gaming FC</td>
                                <td>26</td>
                                <td>22</td>
                                <td>3</td>
                                <td>1</td>
                                <td>73</td>
                                <td>-</td>
                                <td>-</td>
                                <td>69</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Prague ACF</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>56</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Spenge 2013</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>48</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>UnwarreantedTr FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>44</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Porsib FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>44</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Dingolfing RCD</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>39</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>ElaboratePeak FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>37</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Camilia FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>33</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>The Wolf</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>29</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>hh FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>27</td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>RCD Zlin</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>27</td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>Kilkis CFR</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>19</td>
                            </tr>
                            <tr>
                                <td>13</td>
                                <td>Elektrougli</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>18</td>
                            </tr>
                            <tr>
                                <td>14</td>
                                <td>ACF Empoli</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>17</td>
                            </tr>
                        </tbody>
                        <tfoot>

                        </tfoot>
                    </table>
                </div>
                )}
            </div>
            )}
            {currentCompetition === 'ucl' && (
            <div id="ucl">
                {currentView === 'games' && (
                <div id="games" className="matches-panel">
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs">1-2</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Chelsea FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 27th, 2023</p>
                            <p>Elite League - Final</p>
                            <p>Status: Finish</p>
                        </div>
                        
                    </div>
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Panathinaikos FC</span>
                            </div>
                            <span className="vs">1-1</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Gaming FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 25th, 2023</p>
                            <p>Elite League - Semifinal : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs">2-1</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Panathinaikos FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 23rd, 2023</p>
                            <p>Elite League - Semifinal : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span></span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span></span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 21st, 2023</p>
                            <p>Elite League - Round of 8 : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span></span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span></span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 19th, 2023</p>
                            <p>Elite League - Round of 8 : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span></span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 17th, 2023</p>
                            <p>Elite League - Round of 16 : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span></span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Gaming FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 15th, 2023</p>
                            <p>Elite League - Round of 16 : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>
                    <p>No matches found for group stage</p>
                </div>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    <table>
                        <caption>Group Stage : Group </caption>
                        <thead>
                            <tr>
                                <th>N°</th>
                                <th>Team</th>
                                <th>MD</th>
                                <th>W</th>
                                <th>D</th>
                                <th>L</th>
                                <th>BP</th>
                                <th>BC</th>
                                <th>AVG</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Gaming FC</td>
                                <td>6</td>
                                <td>5</td>
                                <td>1</td>
                                <td>0</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td></td>
                                <td>6</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td></td>
                                <td>6</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td></td>
                                <td>6</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )}
            </div>
            )}
            {currentCompetition === 'cup' && (
            <div id="cup">
                {currentView === 'games' && (
                <div id="games" className="matches-panel">
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Seville</span>
                            </div>
                            <span className="vs">4-1</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Barcelona" />
                                <span>Gaming FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 10th, 2023</p>
                            <p>Cup - Round of 64 : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs">3-2</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Barcelona" />
                                <span>Sevilla</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 8th, 2023</p>
                            <p>Cup - Round of 64 : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>
                </div>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    
                </div>
                )}
            </div>
            )}
            {currentCompetition === 'supercup' && (
            <div id="supercup">
                {currentView === 'games' && (
                    <p>No played because we haven't won the Elite League or Gold League</p>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    <p>No draws fonud</p>
                </div>
                )}
            </div>
            )}
        </div>
        )}
        {selectedSeason === 'Season 15' && (
        <div id="season15">
            {currentCompetition === 'league' && (
            <div id="league">
                {currentView === 'games' && (
                <p>No matches fonud</p>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    <table>
                        <caption>Table League</caption>
                        <thead>
                            <tr>
                                <th>N°</th>
                                <th>Team</th>
                                <th>MD</th>
                                <th>W</th>
                                <th>D</th>
                                <th>L</th>
                                <th>BP</th>
                                <th>BC</th>
                                <th>AVG</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Gaming FC</td>
                                <td>26</td>
                                <td>22</td>
                                <td>3</td>
                                <td>1</td>
                                <td>73</td>
                                <td>-</td>
                                <td>-</td>
                                <td>69</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Prague ACF</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>56</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Spenge 2013</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>48</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>UnwarreantedTr FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>44</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Porsib FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>44</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Dingolfing RCD</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>39</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>ElaboratePeak FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>37</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Camilia FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>33</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>The Wolf</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>29</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>hh FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>27</td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>RCD Zlin</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>27</td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>Kilkis CFR</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>19</td>
                            </tr>
                            <tr>
                                <td>13</td>
                                <td>Elektrougli</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>18</td>
                            </tr>
                            <tr>
                                <td>14</td>
                                <td>ACF Empoli</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>17</td>
                            </tr>
                        </tbody>
                        <tfoot>

                        </tfoot>
                    </table>
                </div>
                )}
            </div>
            )}
            {currentCompetition === 'ucl' && (
            <div id="ucl">
                {currentView === 'games' && (
                <div id="games" className="matches-panel">
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs">1-2</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Chelsea FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 27th, 2023</p>
                            <p>Elite League - Final</p>
                            <p>Status: Finish</p>
                        </div>
                        
                    </div>
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Panathinaikos FC</span>
                            </div>
                            <span className="vs">1-1</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Gaming FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 25th, 2023</p>
                            <p>Elite League - Semifinal : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs">2-1</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Panathinaikos FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 23rd, 2023</p>
                            <p>Elite League - Semifinal : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span></span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span></span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 21st, 2023</p>
                            <p>Elite League - Round of 8 : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span></span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span></span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 19th, 2023</p>
                            <p>Elite League - Round of 8 : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span></span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 17th, 2023</p>
                            <p>Elite League - Round of 16 : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span></span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Gaming FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 15th, 2023</p>
                            <p>Elite League - Round of 16 : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>
                    <p>No matches found for group stage</p>
                </div>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    <table>
                        <caption>Group Stage : Group </caption>
                        <thead>
                            <tr>
                                <th>N°</th>
                                <th>Team</th>
                                <th>MD</th>
                                <th>W</th>
                                <th>D</th>
                                <th>L</th>
                                <th>BP</th>
                                <th>BC</th>
                                <th>AVG</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Gaming FC</td>
                                <td>6</td>
                                <td>5</td>
                                <td>1</td>
                                <td>0</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td></td>
                                <td>6</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td></td>
                                <td>6</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td></td>
                                <td>6</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )}
            </div>
            )}
            {currentCompetition === 'cup' && (
            <div id="cup">
                {currentView === 'games' && (
                <div id="games" className="matches-panel">
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Seville</span>
                            </div>
                            <span className="vs">4-1</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Barcelona" />
                                <span>Gaming FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 10th, 2023</p>
                            <p>Cup - Round of 64 : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs">3-2</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Barcelona" />
                                <span>Sevilla</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 8th, 2023</p>
                            <p>Cup - Round of 64 : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>
                </div>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    
                </div>
                )}
            </div>
            )}
            {currentCompetition === 'supercup' && (
            <div id="supercup">
                {currentView === 'games' && (
                    <p>No played because we haven't won the Elite League or Gold League</p>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    <p>No draws fonud</p>
                </div>
                )}
            </div>
            )}
        </div>
        )}
        {selectedSeason === 'Season 16' && (
        <div id="season16">
            {currentCompetition === 'league' && (
            <div id="league">
                {currentView === 'games' && (
                <p>No matches fonud</p>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    <table>
                        <caption>Table League</caption>
                        <thead>
                            <tr>
                                <th>N°</th>
                                <th>Team</th>
                                <th>MD</th>
                                <th>W</th>
                                <th>D</th>
                                <th>L</th>
                                <th>BP</th>
                                <th>BC</th>
                                <th>AVG</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Gaming FC</td>
                                <td>26</td>
                                <td>22</td>
                                <td>3</td>
                                <td>1</td>
                                <td>73</td>
                                <td>-</td>
                                <td>-</td>
                                <td>69</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Prague ACF</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>56</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Spenge 2013</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>48</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>UnwarreantedTr FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>44</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Porsib FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>44</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Dingolfing RCD</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>39</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>ElaboratePeak FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>37</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Camilia FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>33</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>The Wolf</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>29</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>hh FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>27</td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>RCD Zlin</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>27</td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>Kilkis CFR</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>19</td>
                            </tr>
                            <tr>
                                <td>13</td>
                                <td>Elektrougli</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>18</td>
                            </tr>
                            <tr>
                                <td>14</td>
                                <td>ACF Empoli</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>17</td>
                            </tr>
                        </tbody>
                        <tfoot>

                        </tfoot>
                    </table>
                </div>
                )}
            </div>
            )}
            {currentCompetition === 'ucl' && (
            <div id="ucl">
                {currentView === 'games' && (
                <div id="games" className="matches-panel">
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs">1-2</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Chelsea FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 27th, 2023</p>
                            <p>Elite League - Final</p>
                            <p>Status: Finish</p>
                        </div>
                        
                    </div>
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Panathinaikos FC</span>
                            </div>
                            <span className="vs">1-1</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Gaming FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 25th, 2023</p>
                            <p>Elite League - Semifinal : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs">2-1</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Panathinaikos FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 23rd, 2023</p>
                            <p>Elite League - Semifinal : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span></span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span></span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 21st, 2023</p>
                            <p>Elite League - Round of 8 : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span></span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span></span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 19th, 2023</p>
                            <p>Elite League - Round of 8 : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span></span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 17th, 2023</p>
                            <p>Elite League - Round of 16 : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span></span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Gaming FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 15th, 2023</p>
                            <p>Elite League - Round of 16 : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>
                    <p>No matches found for group stage</p>
                </div>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    <table>
                        <caption>Group Stage : Group </caption>
                        <thead>
                            <tr>
                                <th>N°</th>
                                <th>Team</th>
                                <th>MD</th>
                                <th>W</th>
                                <th>D</th>
                                <th>L</th>
                                <th>BP</th>
                                <th>BC</th>
                                <th>AVG</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Gaming FC</td>
                                <td>6</td>
                                <td>5</td>
                                <td>1</td>
                                <td>0</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td></td>
                                <td>6</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td></td>
                                <td>6</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td></td>
                                <td>6</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )}
            </div>
            )}
            {currentCompetition === 'cup' && (
            <div id="cup">
                {currentView === 'games' && (
                <div id="games" className="matches-panel">
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Seville</span>
                            </div>
                            <span className="vs">4-1</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Barcelona" />
                                <span>Gaming FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 10th, 2023</p>
                            <p>Cup - Round of 64 : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs">3-2</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Barcelona" />
                                <span>Sevilla</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 8th, 2023</p>
                            <p>Cup - Round of 64 : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>
                </div>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    
                </div>
                )}
            </div>
            )}
            {currentCompetition === 'supercup' && (
            <div id="supercup">
                {currentView === 'games' && (
                    <p>No played because we haven't won the Elite League or Gold League</p>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    <p>No draws fonud</p>
                </div>
                )}
            </div>
            )}
        </div>
        )}
        {selectedSeason === 'Season 17' && (
        <div id="season17">
            {currentCompetition === 'league' && (
            <div id="league">
                {currentView === 'games' && (
                <p>No matches fonud</p>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    <table>
                        <caption>Table League</caption>
                        <thead>
                            <tr>
                                <th>N°</th>
                                <th>Team</th>
                                <th>MD</th>
                                <th>W</th>
                                <th>D</th>
                                <th>L</th>
                                <th>BP</th>
                                <th>BC</th>
                                <th>AVG</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Gaming FC</td>
                                <td>26</td>
                                <td>22</td>
                                <td>3</td>
                                <td>1</td>
                                <td>73</td>
                                <td>-</td>
                                <td>-</td>
                                <td>69</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Prague ACF</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>56</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Spenge 2013</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>48</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>UnwarreantedTr FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>44</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Porsib FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>44</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Dingolfing RCD</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>39</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>ElaboratePeak FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>37</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Camilia FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>33</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>The Wolf</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>29</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>hh FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>27</td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>RCD Zlin</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>27</td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>Kilkis CFR</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>19</td>
                            </tr>
                            <tr>
                                <td>13</td>
                                <td>Elektrougli</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>18</td>
                            </tr>
                            <tr>
                                <td>14</td>
                                <td>ACF Empoli</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>17</td>
                            </tr>
                        </tbody>
                        <tfoot>

                        </tfoot>
                    </table>
                </div>
                )}
            </div>
            )}
            {currentCompetition === 'ucl' && (
            <div id="ucl">
                {currentView === 'games' && (
                <div id="games" className="matches-panel">
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs">1-2</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Chelsea FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 27th, 2023</p>
                            <p>Elite League - Final</p>
                            <p>Status: Finish</p>
                        </div>
                        
                    </div>
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Panathinaikos FC</span>
                            </div>
                            <span className="vs">1-1</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Gaming FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 25th, 2023</p>
                            <p>Elite League - Semifinal : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs">2-1</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Panathinaikos FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 23rd, 2023</p>
                            <p>Elite League - Semifinal : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span></span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span></span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 21st, 2023</p>
                            <p>Elite League - Round of 8 : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span></span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span></span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 19th, 2023</p>
                            <p>Elite League - Round of 8 : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span></span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 17th, 2023</p>
                            <p>Elite League - Round of 16 : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span></span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Gaming FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 15th, 2023</p>
                            <p>Elite League - Round of 16 : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>
                    <p>No matches found for group stage</p>
                </div>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    <table>
                        <caption>Group Stage : Group </caption>
                        <thead>
                            <tr>
                                <th>N°</th>
                                <th>Team</th>
                                <th>MD</th>
                                <th>W</th>
                                <th>D</th>
                                <th>L</th>
                                <th>BP</th>
                                <th>BC</th>
                                <th>AVG</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Gaming FC</td>
                                <td>6</td>
                                <td>5</td>
                                <td>1</td>
                                <td>0</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td></td>
                                <td>6</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td></td>
                                <td>6</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td></td>
                                <td>6</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )}
            </div>
            )}
            {currentCompetition === 'cup' && (
            <div id="cup">
                {currentView === 'games' && (
                <div id="games" className="matches-panel">
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Seville</span>
                            </div>
                            <span className="vs">4-1</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Barcelona" />
                                <span>Gaming FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 10th, 2023</p>
                            <p>Cup - Round of 64 : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs">3-2</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Barcelona" />
                                <span>Sevilla</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 8th, 2023</p>
                            <p>Cup - Round of 64 : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>
                </div>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    
                </div>
                )}
            </div>
            )}
            {currentCompetition === 'supercup' && (
            <div id="supercup">
                {currentView === 'games' && (
                    <p>No played because we haven't won the Elite League or Gold League</p>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    <p>No draws fonud</p>
                </div>
                )}
            </div>
            )}
        </div>
        )}
        {selectedSeason === 'Season 18' && (
        <div id="season18">
            {currentCompetition === 'league' && (
            <div id="league">
                {currentView === 'games' && (
                <p>No matches fonud</p>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    <table>
                        <caption>Table League</caption>
                        <thead>
                            <tr>
                                <th>N°</th>
                                <th>Team</th>
                                <th>MD</th>
                                <th>W</th>
                                <th>D</th>
                                <th>L</th>
                                <th>BP</th>
                                <th>BC</th>
                                <th>AVG</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Gaming FC</td>
                                <td>26</td>
                                <td>22</td>
                                <td>3</td>
                                <td>1</td>
                                <td>73</td>
                                <td>-</td>
                                <td>-</td>
                                <td>69</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Prague ACF</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>56</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Spenge 2013</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>48</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>UnwarreantedTr FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>44</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Porsib FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>44</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Dingolfing RCD</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>39</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>ElaboratePeak FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>37</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Camilia FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>33</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>The Wolf</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>29</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>hh FC</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>27</td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>RCD Zlin</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>27</td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>Kilkis CFR</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>19</td>
                            </tr>
                            <tr>
                                <td>13</td>
                                <td>Elektrougli</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>18</td>
                            </tr>
                            <tr>
                                <td>14</td>
                                <td>ACF Empoli</td>
                                <td>26</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>17</td>
                            </tr>
                        </tbody>
                        <tfoot>

                        </tfoot>
                    </table>
                </div>
                )}
            </div>
            )}
            {currentCompetition === 'ucl' && (
            <div id="ucl">
                {currentView === 'games' && (
                <div id="games" className="matches-panel">
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs">1-2</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Chelsea FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 27th, 2023</p>
                            <p>Elite League - Final</p>
                            <p>Status: Finish</p>
                        </div>
                        
                    </div>
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Panathinaikos FC</span>
                            </div>
                            <span className="vs">1-1</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Gaming FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 25th, 2023</p>
                            <p>Elite League - Semifinal : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs">2-1</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Panathinaikos FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 23rd, 2023</p>
                            <p>Elite League - Semifinal : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span></span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span></span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 21st, 2023</p>
                            <p>Elite League - Round of 8 : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span></span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span></span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 19th, 2023</p>
                            <p>Elite League - Round of 8 : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span></span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 17th, 2023</p>
                            <p>Elite League - Round of 16 : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>

                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span></span>
                            </div>
                            <span className="vs"></span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="AC Milan" />
                                <span>Gaming FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 15th, 2023</p>
                            <p>Elite League - Round of 16 : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>
                    <p>No matches found for group stage</p>
                </div>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    <table>
                        <caption>Group Stage : Group </caption>
                        <thead>
                            <tr>
                                <th>N°</th>
                                <th>Team</th>
                                <th>MD</th>
                                <th>W</th>
                                <th>D</th>
                                <th>L</th>
                                <th>BP</th>
                                <th>BC</th>
                                <th>AVG</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Gaming FC</td>
                                <td>6</td>
                                <td>5</td>
                                <td>1</td>
                                <td>0</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td></td>
                                <td>6</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td></td>
                                <td>6</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td></td>
                                <td>6</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )}
            </div>
            )}
            {currentCompetition === 'cup' && (
            <div id="cup">
                {currentView === 'games' && (
                <div id="games" className="matches-panel">
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Seville</span>
                            </div>
                            <span className="vs">4-1</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Barcelona" />
                                <span>Gaming FC</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 10th, 2023</p>
                            <p>Cup - Round of 64 : Second leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs">3-2</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Barcelona" />
                                <span>Sevilla</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: December 8th, 2023</p>
                            <p>Cup - Round of 64 : First leg</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>
                </div>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    
                </div>
                )}
            </div>
            )}
            {currentCompetition === 'supercup' && (
            <div id="supercup">
                {currentView === 'games' && (
                <div id="games" className="matches-panel">
                    <div className="match-card">
                        <div className="teams">
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Real Madrid" />
                                <span>Gaming FC</span>
                            </div>
                            <span className="vs">7-0</span>
                            <div className="team">
                                <img src="/assets/realmadrid.png" alt="Barcelona" />
                                <span>Sevilla</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <p>Date: March 22nd, 2025</p>
                            <p>Ultimate Cup - Final</p>
                            <p>Status: Finish</p>
                        </div>
                    </div>
                </div>
                )}

                {currentView === 'draws' && (
                <div id="draws">
                    <p>No draws fonud</p>
                </div>
                )}
            </div>
            )}
        </div>
        )}

    </main>
  );
}

export default Games;
