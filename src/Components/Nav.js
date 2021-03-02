// A Nav component for the apps navigation links.
// Stateless component


/*
<nav className="main-nav">
    <ul>
        <li><a href='#'>Cats</a></li>
        <li><a href='#'>Dogs</a></li>
        <li><a href='#'>Computers</a></li>
    </ul>
</nav>*/

import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
        <nav className='main-nav'>
            <ul>
                <li><NavLink exact to="/Cats">Cats</NavLink></li>
                <li><NavLink to="/Dogs">Dogs</NavLink></li>
                <li><NavLink to="/Computers">Computers</NavLink></li>
            </ul>
        </nav>
);

export default Header;

