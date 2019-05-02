import React, { Component } from 'react';

import Header from './parts/Header';
import Start from './parts/Start';
import SingleState from './parts/SingleState';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Example of using React Hook</h1>
        <Header />
        <Start />
        <SingleState />
      </div>
    );
  }
}

export default App;
