import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';

const reducer = props => {
    const [textInfor, setTextInfor] = useState('');

    const textReducer = (state, action) => {
        switch(action.type){
            case 'ADD':
                return state.concat(action.payload);
            case 'SET':
                // return the whole thing
                return action.payload;
            case 'REMOVE':
                // payload is the item id to remove
                return state.filter(item => item.id !== action.payload)
            default:
                return state;   
        }
    };
    
    const [listOfText, dispatch] = useReducer(textReducer, []);

    useEffect(() => {
        axios.get('https://reacthook-dbe0f.firebaseio.com/text.json')
            .then(res => {
                console.log(res);
                const textData = res.data;
                const texts = [];

                for(let key in textData){
                    texts.push({ id: key, text: textData[key].text})
                }
                // overwrite the listOfText with texts's array
                dispatch({ type: 'SET', payload: texts });
            });
            // cleanup
            return () => {
                console.log('This is same as componentWillUnmount');
            };
    }, []);

    const changeInput = (e) => {
        setTextInfor(e.target.value);
    };

    const addTextToList = () => {
        axios.post('https://reacthook-dbe0f.firebaseio.com/text.json', {text: textInfor})
            .then(res => {
                const listData = { id: res.data.name, text: textInfor}

                // concat return a new array
                dispatch({ type: 'ADD', payload: listData });
                setTextInfor("");
            })
            .catch(err => {
                console.log(err)
            })
    }

    const removeTextFromList = itemId => {
        dispatch({ type: 'REMOVE', payload: itemId });
    }

    return <React.Fragment>
        <p>Using useReducer</p>
        <input
            type="text"
            placeholder="Something..."
            onChange={ changeInput }
            value={ textInfor } />
        <button type="button" onClick={ addTextToList }>Enter</button>

        <ul>
            { listOfText.map(item => (
                <li key={ item.id } onClick={removeTextFromList.bind(this, item.id)}>{ item.text } </li>
            )) }
        </ul>
    </React.Fragment>
};

export default reducer;