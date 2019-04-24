// useState enable hooks
import React, { useState } from 'react';

const start = props => {
    // this is a function that replace state
    // this has two elements
    const inputValue = useState('');

    const changeInput = (e) => {
        // this will update the value of inputValue
        inputValue[1](e.target.value);
    };

    // top level sibling elements
    return <React.Fragment>
        <input
            type="text"
            placeholder="Something..."
            onChange={ changeInput }
            value={ inputValue[0] } />
        <button type="button">Enter</button>
    </React.Fragment>
};

export default start;