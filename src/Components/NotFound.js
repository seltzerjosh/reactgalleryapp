// A NotFound component for displaying a user-friendly message when the search returns no results.
// Stateless component

import React from 'react';

const NotFound = () => (
    <li className="not=found">
        <h3>No Results Found</h3>
        <p>Your search did not return any results. </p>
    </li>
)

export default NotFound;