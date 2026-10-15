import React, { useState } from 'react';
import { Link } from 'react-router';
import './Navbar.css';

function Navbar() {
    const [menuOpen, setMenuState] = useState(false);

    return (
        <nav className='main-nav'>
            <Link to='/react-char-sheet/stats' className='logo'>X</Link>
            <div className='menu-icon' onClick={() => setMenuState(!menuOpen)}>

            </div>
            <ul>
                <li>
                    <Link to='/react-char-sheet/stats'>Stats</Link>
                </li>
                <li>
                    <Link to='/react-char-sheet/features'>Features</Link>
                </li>
                <li>
                    <Link to='/react-char-sheet/items'>Items</Link>
                </li>
                <li>
                    <Link to='/react-char-sheet/spells'>Spells</Link>
                </li>
                <li>
                    <Link to='/react-char-sheet/notes'>Notes</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar