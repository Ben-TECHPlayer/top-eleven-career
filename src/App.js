// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import News from './pages/News';
import Games from './pages/Games';
import Players from './pages/Players';
import Rankings from './pages/Rankings';
import Partners from './pages/Partners';
import QuadruplePage from './pages/QuadruplePage';
import LeonardoUmana from './pages/players/LeonardoUmana';
import VivaTech from './pages/partners/VivaTech';
import RealMadrid from './pages/partners/RealMadrid';
import PlayStation from './pages/partners/PlayStation';
import ParisSaclay from './pages/partners/ParisSaclay';
import Epita from './pages/partners/Epita';
import Student from './pages/partners/Student';
import ParisCite from './pages/partners/ParisCite';
import Apple from './pages/partners/Apple';
import Nike from './pages/partners/Nike';
import Emirates from './pages/partners/Emirates';
import Samsung from './pages/partners/Samsung';
import Asus from './pages/partners/Asus';
import HP from './pages/partners/HP';
import Axe from './pages/partners/Axe';
import Mercedes from './pages/partners/Mercedes';
import Quick from './pages/partners/Quick';

import './styles/Footer.css';
import './styles/Header.css';
import './styles/index.css'
import './styles/Home.css';
import './styles/News.css';
import './styles/Games.css';
import './styles/Players.css';
import './styles/Rankings.css';
import './styles/Partners.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/quadruple" element={<QuadruplePage />} />
          <Route path="/games" element={<Games />} />
          <Route path="/players" element={<Players />} />
          <Route path="/players/umana" element={<LeonardoUmana />} />
          <Route path="/rankings" element={<Rankings />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/partners/vivatech" element={<VivaTech />} />
          <Route path="/partners/realmadrid" element={<RealMadrid />} />        
          <Route path="/partners/ps5" element={<PlayStation />} />
          <Route path="/partners/parissaclay" element={<ParisSaclay />} />
          <Route path="/partners/epita" element={<Epita />} />
          <Route path="/partners/iut-orsay" element={<Student />} />        
          <Route path="/partners/ps5" element={<ParisCite />} />
          <Route path="/partners/apple" element={<Apple />} />
          <Route path="/partners/nike" element={<Nike />} />
          <Route path="/partners/emirates" element={<Emirates />} />        
          <Route path="/partners/samsung-galaxy" element={<Samsung />} />
          <Route path="/partners/asus" element={<Asus />} />
          <Route path="/partners/hp" element={<HP />} />
          <Route path="/partners/axe" element={<Axe />} />        
          <Route path="/partners/merrcedes" element={<Mercedes />} />
          <Route path="/partners/quick" element={<Quick />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;