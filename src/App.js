import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Aside from './components/Aside';
import './App.css';


function App () {
  const [characters, setCharacters] = useState (null);
  const [loading, setLoading] = useState (true);
  const [quote, setQuote] = useState ();

  useEffect (() => {
    // !!!Below is format for auth in documentation!!!
    // const headers = {
    //   'Accept': 'application/json',
    //   'Authorization': "Bearer "
    // }
    const charReturn = {
      key: process.env.REACT_APP_PROJECT_KEY,
      limit: 9,
      api: 'https://the-one-api.dev/v2',
      // endpoint: '/character/5cd99d4bde30eff6ebccfc42',
      endpoint: '/character',
    };

    function getCharacters () {
      const url = `${charReturn.api}${charReturn.endpoint}`;
      // !!!Below was instructed by jexxe for auth/api call!!!
      fetch (url, {
        method: 'GET',
        headers: {Authorization: `Bearer ${process.env.REACT_APP_PROJECT_KEY}`},
      })
        .then (res => res.json ())
        .then (res => {
          setCharacters (res);
          setLoading (false);
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

        <Main characters={characters} loading={loading} quote={quote}
         />

      </main>

      <aside>

        <Aside />

      </aside>
    </div>
  );
}

export default App;
