import React from 'react';
import './App.css';
import Header from './layout/Header'
import Main from './layout/Main'
import Guests from './components/Guests'
import State from './context/State'



function App() {
  return (
    <State>
      <div className="App">
        <Header />
        <Main />
        <Guests />
      </div>
    </State>
  );
}

export default App;
