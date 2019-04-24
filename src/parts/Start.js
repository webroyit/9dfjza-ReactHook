import React from 'react';

const start = props => {
    // top level sibling elements
    return <React.Fragment>
        <input type="text" placeholder="Something..." />
        <button type="button">Enter</button>
    </React.Fragment>
};

export default start;