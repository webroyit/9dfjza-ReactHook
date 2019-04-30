// useState enable hooks
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const start = props => {
    // this is a function that replace state
    // this has two elements
    // first element is the current value
    // second element is the function to change the value
    const [textInfor, setTextInfor] = useState('');
    const [listOfText, setListOfText] = useState([]);

    // this is render cycle
    // this is a function
    useEffect(() => {
        // get the data from firebase
        axios.get('https://reacthook-dbe0f.firebaseio.com/text.json')
            .then(res => {
                console.log(res);
                const textData = res.data;
                const texts = [];
                // store each res.data to the texts's array
                for(let key in textData){
                    texts.push({ id: key, text: textData[key].text})
                }
                // overwrite the listOfText with texts's array
                setListOfText(texts);
            });
            // cleanup
            return () => {
                console.log('This is same as componentWillUnmount');
            };

    // second argument is the condition before executing this function
    // value in the array is the listener that it check when it is change, it will execute this function
    }, []);

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
                <li key={ item.id }>{ item.text } </li>
            )) }
        </ul>
    </React.Fragment>
};

export default start;