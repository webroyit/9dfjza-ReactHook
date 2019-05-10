import React from 'react';

const header = props => {
    return <header>
        <button onClick={props.loadStart}>Start</button>
        <button onClick={props.loadSingle}>Single</button>
        <button onClick={props.loadReducer}>Reducer</button>
    </header>
};

export default header;