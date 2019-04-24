// useState enable hooks
import React, { useState } from 'react';

const start = props => {
    // this is a function that replace state
    // this has two elements
    // first element is the current value
    // second element is the function to change the value
    const [textInfor, setTextInfor] = useState('');

    const changeInput = (e) => {
        // this will update the value of textInfor
        setTextInfor(e.target.value);
    };

    // <React.Fragment> is top level sibling elements
    return <React.Fragment>
        <input
            type="text"
            placeholder="Something..."
            onChange={ changeInput }
            value={ textInfor } />
        <button type="button">Enter</button>
    </React.Fragment>
};

export default start;