import React, { useEffect, useReducer, useRef } from 'react';
import axios from 'axios';

import List from './small/List';

const reference = props => {
    const textInputRef = useRef();

    // this give the lastest state
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

    const addTextToList = () => {
        // this point to html input element 
        const textInfor = textInputRef.current.value;

        axios.post('https://reacthook-dbe0f.firebaseio.com/text.json', {text: textInfor})
            .then(res => {
                const listData = { id: res.data.name, text: textInfor}

                // concat return a new array
                dispatch({ type: 'ADD', payload: listData });
                textInputRef.current.value = "";
            })
            .catch(err => {
                console.log(err)
            })
    }

    const removeTextFromList = itemId => {
        axios.delete(`https://reacthook-dbe0f.firebaseio.com/text/${itemId}.json`)
            .then(res => {
                dispatch({ type: 'REMOVE', payload: itemId });
            })
            .catch(err => {
                console.log(err)
            })
    }

    return <React.Fragment>
        <p>Using useRef</p>
        <p>It allow you to pass props in functional components</p>
        <p>Using useRef to get the input from html input element instead of using onChange and setState methods</p>
        <input
            type="text"
            placeholder="Something..."
            ref={textInputRef} />
        <button type="button" onClick={ addTextToList }>Enter</button>

        <List items={listOfText} onClick={removeTextFromList} />
    </React.Fragment>
};

export default reference;