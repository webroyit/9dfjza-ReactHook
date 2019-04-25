// useState enable hooks
import React, { useState } from 'react';
import axios from 'axios';

const start = props => {
    // this is a function that replace state
    // this has two elements
    // first element is the current value
    // second element is the function to change the value
    const [textInfor, setTextInfor] = useState('');
    const [listOfText, setListOfText] = useState([]);

    const changeInput = (e) => {
        // this will update the value of textInfor
        setTextInfor(e.target.value);
    };

    const addTextToList = () => {
        // concat reuturn a new array
        setListOfText(listOfText.concat(textInfor));
        setTextInfor("");

        // using firebase
        // passing textInfor as body
        axios.post('https://reacthook-dbe0f.firebaseio.com/text.json', {text: textInfor})
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err)
            })
    }

    // <React.Fragment> is top level sibling elements
    return <React.Fragment>
        <p>Using useState</p>
        <input
            type="text"
            placeholder="Something..."
            onChange={ changeInput }
            value={ textInfor } />
        <button type="button" onClick={ addTextToList }>Enter</button>

        <ul>
            { listOfText.map(item => (
                <li key={ item }>{ item } </li>
            )) }
        </ul>
    </React.Fragment>
};

export default start;