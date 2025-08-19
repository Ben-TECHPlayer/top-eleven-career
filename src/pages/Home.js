import React from 'react';
import '../styles/Home.css'

function Home() {
  return (
    <main>
      <div id="panel">
        <div className="quadruple">
          <img src="{`${process.env.PUBLIC_URL}/assets/vivatech2024.jpg`} alt="Quadruple" />
          <h2>Quadruplé</h2>
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

export default Home;
