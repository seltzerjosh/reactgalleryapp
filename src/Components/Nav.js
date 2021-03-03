// A Nav component for the apps navigation links.
// Stateless component

import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = () => (
        <nav className='main-nav'>
            <ul>
                <li><NavLink exact to="/Cats">Cats</NavLink></li>
                <li><NavLink to="/Dogs">Dogs</NavLink></li>
                <li><NavLink to="/Computers">Computers</NavLink></li>
            </ul>
        </nav>
);

export default Nav;

