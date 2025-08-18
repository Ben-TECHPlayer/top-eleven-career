import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Competition({ currentCompetition, setCurrentCompetition }) {

    // const [currentCompetition, setCurrentCompetition] = useState('league');

    const handleCompetitionChange = (competition) => {
        setCurrentCompetition(competition);
    };
    
    return (
        <nav class="filtres-competitions">
            <button onClick={() => handleCompetitionChange('league')}>Championship</button>
            <button onClick={() => handleCompetitionChange('ucl')}>UEFA Champions League</button>
            <button onClick={() => handleCompetitionChange('cup')}>Cup</button>
            <button onClick={() => handleCompetitionChange('supercup')}>Ultimate Cup</button>
        </nav>
    );
}

export default Competition;

