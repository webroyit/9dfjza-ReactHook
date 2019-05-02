import React from 'react';

const header = props => {
    return <header>
        <button onClick={props.loadStart}>Start</button>
        <button onClick={props.loadSingle}>Single</button>
    </header>
};

export default header;