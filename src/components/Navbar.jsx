import React, { useState } from 'react';
import { Link } from 'react-router';
import './Navbar.css';

function Navbar() {
    const [menuOpen, setMenuState] = useState(false);

    return (
        <nav className='main-nav'>
            <Link to='/' className='logo'>X</Link>
            <div className='menu-icon' onClick={() => setMenuState(!menuOpen)}>

            </div>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/spells'>Spells</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar