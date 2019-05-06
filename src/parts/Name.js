import React, { useContext } from 'react';

import NameContext from '../nameContext';

const name = props => {
    const name = useContext(NameContext);

    return <h1 onClick={name.changeName}>Your name is { name.name }</h1>
};

export default name;