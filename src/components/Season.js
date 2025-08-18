import React, {useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';


function Season({seasonDropdownOpen, setSeasonDropdownOpen, selectedSeason, setSelectedSeason}) {

    // const [seasonDropdownOpen, setSeasonDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);

    const toggleSeason = () => {
        setSeasonDropdownOpen(!seasonDropdownOpen);
    };

    const handleSelectSeason = (season) => {
        setSelectedSeason(season);
        setSeasonDropdownOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)
            ) {
                setSeasonDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setSeasonDropdownOpen]);
    
    return (
            <div className="seasons-container">
            <div className="season" onClick={toggleSeason} ref={buttonRef}>
            <span>{selectedSeason ? selectedSeason : 'Season 1'}</span>
            </div>
        {seasonDropdownOpen && (
        <div id="dropdown-career" className="dropdown-seasons">
           <ul>
            <li onClick={() => handleSelectSeason('Season 1')}>Season 1</li>
                        <li onClick={() => handleSelectSeason('Season 2')}>Season 2</li>
                        <li onClick={() => handleSelectSeason("Season 3")}>Season 3</li>
                        <li onClick={() => handleSelectSeason("Season 4")}>Season 4</li>
                        <li onClick={() => handleSelectSeason("Season 5")}>Season 5</li>
                        <li onClick={() => handleSelectSeason("Season 6")}>Season 6</li>
                        <li onClick={() => handleSelectSeason("Season 7")}>Season 7</li>
                        <li onClick={() => handleSelectSeason("Season 8")}>Season 8</li>
                        <li onClick={() => handleSelectSeason("Season 9")}>Season 9</li>
                        <li onClick={() => handleSelectSeason("Season 10")}>Season 10</li>
                        <li onClick={() => handleSelectSeason("Season 11")}>Season 11</li>
                        <li onClick={() => handleSelectSeason("Season 12")}>Season 12</li>
                        <li onClick={() => handleSelectSeason("Season 13")}>Season 13</li>
                        <li onClick={() => handleSelectSeason("Season 14")}>Season 14</li>
                        <li onClick={() => handleSelectSeason("Season 15")}>Season 15</li>
                        <li onClick={() => handleSelectSeason("Season 16")}>Season 16</li>
                        <li onClick={() => handleSelectSeason("Season 17")}>Season 17</li>
                        <li onClick={() => handleSelectSeason("Season 18")}>Season 18</li>
          </ul>
        </div>
        )}
        </div>
    );
}

function toggleSeason() {
    const dropdownSeason = document.getElementById("dropdown-career");
    dropdownSeason.classList.toggle("open");

    document.addEventListener("click", function(event) {
        const season = document.querySelector(".season");
        const dropdownSeason = document.getElementById("dropdown-career");

        // Si on clique ni sur le bouton, ni sur le menu
        if (!season.contains(event.target) && !dropdownSeason.contains(event.target)) {
            dropdownSeason.classList.remove("open");
        }
    });
}

export default Season;