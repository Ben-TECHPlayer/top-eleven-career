import React from 'react';
import '../styles/Rankings.css'

function Rankings() {
  return (
    <main>
        <h1>Trophies</h1>
        <div className="grille-palmares">
            <div className="league">
                <div className="left-side">
                    <div className="logoleague">
                        <img src="/assets/league-trophy.png" alt="League" />
                    </div>
                    <div className="number">
                        <h2>13</h2>
                    </div>
                </div>
                <div className="right-side">
                    <div className="text">
                        <h3>League</h3>
                        <p>November 7th to 30th, 2023</p>
                        <p>December 31th, 2023 to Janaury 27th, 2024</p>
                        <p>February 25th to March 23rd, 2024</p>
                        <p>April 21st to May 18th, 2024</p>
                        <p>May 19th to June 15th, 2024</p>
                        <p>August 11th to September 7th, 2024</p>
                        <p>September 8th to October 5th, 2024</p>
                        <p>October 6th to November 2nd, 2024</p>
                        <p>November 3rd to November 30th, 2024</p>
                        <p>December 1st to 28th, 2024</p>
                        <p>December 29th, 2024 to Janaury 25th, 2025</p>
                        <p>Janaury 26rd to February 22nd, 2025</p>
                        <p>February 23rd to March 22nd, 2025</p>
                    </div>
                </div>
            </div>
            <div className="ldc">
                <div className="left-side">
                    <div className="logoelite">
                        <img src="/assets/ucl-trophy.png" alt="League" />
                    </div>
                    <div className="number">
                        <h2>1</h2>
                    </div>
                </div>
                <div className="right-side">
                    <div className="text">
                        <h3>UEFA Champions League</h3>
                        <p>February 23rd to March 22nd, 2025</p>
                    </div>
                </div>
            </div>
            <div className="cup">
                <div className="left-side">
                    <div className="logocup">
                        <img src="/assets/cup-trophy.png" alt="League" />
                    </div>
                    <div className="number">
                        <h2>2</h2>
                    </div>
                </div>
                <div className="right-side">
                    <div className="text">
                        <h3>Cup</h3>
                        <p>December 31th, 2023 to Janaury 27th, 2024</p>
                        <p>February 23rd to March 22nd, 2025</p>
                    </div>
                </div>
            </div>
            <div className="super-cup">
                <div className="left-side">
                    <div className="logosupercup">
                        <img src="/assets/supercup-trophy.png" alt="Super Cup" />
                    </div>
                    <div className="number">
                        <h2>1</h2>
                    </div>
                </div>
                <div className="right-side">
                    <div className="text">
                        <h3>Ultimate Cup</h3>
                        <p>March 22nd, 2025</p>
                    </div>
                </div>
            </div>
        </div>
        <h1>Throwback moments</h1>
        <p className="throwback">Season 18(February 23nd-March 22nd, 2025): Quadruple Crown(League+UCL+Cup+Super Cup)</p>
        <p className="throwback">Season 18(February 23nd-March 22nd, 2025): No loses, neither draws, only wins</p>
    </main>
  );
}

export default Rankings;