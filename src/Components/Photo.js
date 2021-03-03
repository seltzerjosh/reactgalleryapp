// A Photo component that displays the li and img elements.
// Stateless component
import React from 'react';

const Photo = props => (
    <li>
        <img  src={props.url} alt={props.altText}/>
    </li>
);

export default Photo;
// Replace src with {props.url} and figure out alt