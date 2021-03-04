// A Nav component for the apps navigation links.
// Stateless component

import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = () => (
        <div className='main-nav'>
            <ul>
                <li><NavLink to="/cat">Cats</NavLink></li>
                <li><NavLink to="/bat">Bats</NavLink></li>
                <li><NavLink to="/hat">Hats</NavLink></li>
            </ul>
        </div>
);

export default Nav;

