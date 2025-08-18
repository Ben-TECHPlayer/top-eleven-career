import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function ViewSeason({currentSeason, setCurrentSeason}) {
    // const [currentView, setCurrentView] = useState('games');
    
    const handleSeasonChange = (view) => {
        setCurrentSeason(view);
    }

    return(
        <nav class="filtres-seasons">
            <button onClick={() => handleSeasonChange('career')}>Career</button>
            <button onClick={() => handleSeasonChange('season1')}>Season 1</button>
            <button onClick={() => handleSeasonChange('season2')}>Season 2</button>
        </nav>
    )
}

export default ViewSeason;