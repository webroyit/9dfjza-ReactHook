import React,{ useState } from 'react';

import Header from './parts/Header';
import Start from './parts/Start';
import SingleState from './parts/SingleState';

const app = props => {
  const [page, setPage] = useState('start');

  // switch component
  const changePage = pageName => {
    setPage(pageName);
  }

  return(
    <div className="App">
      <h1>Example of using React Hook</h1>
      <Header 
        loadStart={changePage.bind(this, 'start')}
        loadSingle={changePage.bind(this, 'single')} />
      {page === 'start' ? <Start /> : <SingleState />}
    </div>
  );
}

export default app;