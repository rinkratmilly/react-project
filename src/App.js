import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Aside from './components/Aside';
import './App.css';

function App () {
  const [characters, setCharacters] = useState (null);
  const [loading, setLoading] = useState(true)
  
  useEffect (() => {
    const charReturn = {
      key: process.env.REACT_APP_PROJECT_KEY,
      limit: 9,
      api: 'https://the-one-api.dev/v2',
      endpoint: '/character',
    };
    
    function getCharacters () {
      const url = `${charReturn.api}${charReturn.endpoint}`;
  
      fetch (url, {
        method: 'GET',
        headers: {Authorization: `Bearer ${charReturn.key}`},
      })
        .then (res => res.json ())
        .then (res => {
          setCharacters (res);
          setLoading(false)
          console.log ();
        });
    }
    getCharacters ();
  }, []);

  return (
    <div className="App">

      <header className="App-header">

        <Header />

      </header>

      <main>

        <Main characters={characters}
              loading={loading} />

      </main>

      <aside>

        <Aside />

      </aside>
    </div>
  );
}

export default App;
