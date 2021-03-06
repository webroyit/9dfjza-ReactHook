import React,{ useState } from 'react';

import Header from './parts/Header';
import Start from './parts/Start';
import SingleState from './parts/SingleState';
import Reducer from './parts/Reducer';
import Reference from './parts/Reference';
import Name from './parts/Name';
import NameContext from './nameContext';

const app = props => {
  const [page, setPage] = useState('start');
  const [nameState, setName] = useState("Guest");

  // switch component
  const changePage = pageName => {
    setPage(pageName);
  }

  const changeName = () => {
    setName("Admin");
  }

  return(
    <div className="App">
      {/* Allow access to the variable */}
      <NameContext.Provider value={{ name: nameState, changeName: changeName }}>
        <Name />
        <h1>Example of using React Hook</h1>
        <Header 
          loadStart={changePage.bind(this, 'start')}
          loadSingle={changePage.bind(this, 'single')}
          loadReducer={changePage.bind(this, 'reducer')}
          loadReference={changePage.bind(this, 'reference')} />
        
        {page === 'start' ? <Start /> : null}
        {page === 'single' ? <SingleState /> : null}
        {page === 'reducer' ? <Reducer /> : null}
        {page === 'reference' ? <Reference /> : null}
      </NameContext.Provider>
    </div>
  );
}

export default app;