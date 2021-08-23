import React,{useState, useEffect} from 'react';
import {Link, Route} from 'react-router-dom';
import Character from './Character';
import CharacterInfo from './CharacterInfo';
import Book from './Book';
import Chapters from './Chapters'

function Main (props) {

  const [books, setBooks] = useState ([]);
  const [loading, setLoading] = useState (true);

  useEffect (() => {
 
    const bookReturn = {
      key: process.env.REACT_APP_PROJECT_KEY,
      limit: 9,
      api: 'https://the-one-api.dev/v2',
      // endpoint: '/character/5cd99d4bde30eff6ebccfc42',
      book: '/book',
    };

    function getBook () {

      const url = `${bookReturn.api}${bookReturn.book}`;
      
      fetch (url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_PROJECT_KEY}`,
        },
      })
        .then (res => res.json ())
        .then (res => {
          setBooks (res.docs);
          setLoading (false);
        });
    }

    getBook ();
  }, []);

  // console.log(books)



  return (
    <div>
      <Route
      exact path= '/book' 
      component ={Book}/>
{/* 
      
      <Route
        exact
        path="/book/:id"
        render={routerProps => <Character match={routerProps.match} />}
      /> */}
      <Route
        exact
        path="/book/character/:id"
        render={routerProps => <CharacterInfo match={routerProps.match} />}
      />

      <Route exact path={`/book/:id`} >
          <Chapters books={books} />
      </Route>

    </div>
  );
}

export default Main;
