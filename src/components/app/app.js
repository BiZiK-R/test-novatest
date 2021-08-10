import React from 'react';
import './app.sass';
import Header from '../header';
import Body from '../body';
import Basement from '../basement';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Body/>
      <Basement/>
    </div>
  )
}

export default App;
