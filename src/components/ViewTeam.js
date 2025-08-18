import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function ViewTeam({currentView, setCurrentView}) {
    // const [currentView, setCurrentView] = useState('games');
    
    const handleViewChange = (view) => {
        setCurrentView(view);
    };
    
    return (
        <nav class="filtres-rankings">
            <button onClick={() => handleViewChange('games')}>Games</button>
            <button onClick={() => handleViewChange('draws')}>Draws</button>
        </nav>
    );
}

export default ViewTeam;