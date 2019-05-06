import React from 'react';

// set up value for context
const nameContext = React.createContext({ name: "Guest", changeName: () => {} });

export default nameContext;