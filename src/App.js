import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Aside from './components/Aside';
import background from './img/LOTR.jpeg'

import './App.css';

function App () {
  return (
    <div style={{backgroundImage: `url(${background})`}}>
      
         <div className="App">

      <header className="App-header">
        <Header />
      </header>
     
      <main>
        <Main />
      </main>

      <aside>
        <Aside />
      </aside>
    </div>
  );
}
export default App;
