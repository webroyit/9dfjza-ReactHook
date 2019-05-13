import React from 'react';

const list = props => {
    return <ul>
        { props.items.map(item => (
            <li key={ item.id } onClick={props.onClick.bind(this, item.id)}>{ item.text } </li>
        )) }
    </ul>
};

export default list;