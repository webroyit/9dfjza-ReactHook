import React from 'react';

import Header from './parts/Header';
import Start from './parts/Start';
import SingleState from './parts/SingleState';

const app = props => {
  return(
    <div className="App">
      <h1>Example of using React Hook</h1>
      <Header />
      <Start />
      <SingleState />
    </div>
  );
}

export default app;