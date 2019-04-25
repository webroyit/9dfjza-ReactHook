import React, { useState } from 'react';

const oneState = props => {
    // this does not merge the state
    const [textState, setTextState] = useState({textInfor: '', listOfText: []});

    const changeInput = (e) => {
        // must set the each properties to something because it will be set to null
        setTextState({textInfor: e.target.value, listOfText: textState.listOfText});
    };

    const addTextToList = () => {
        setTextState({textInfor: textState.textInfor, listOfText: textState.listOfText.concat(textState.textInfor)});
    }

    return <React.Fragment>
        <p>Using One State</p>
        <input
            type="text"
            placeholder="Something..."
            onChange={ changeInput }
            value={ textState.textInfor } />
        <button type="button" onClick={ addTextToList }>Enter</button>

        <ul>
            { textState.listOfText.map(item => (
                <li key={ item }>{ item } </li>
            )) }
        </ul>
    </React.Fragment>
};

export default oneState;