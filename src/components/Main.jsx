import React from 'react';
import {Link, Route} from 'react-router-dom';
import Character from './Character';
import CharacterInfo from './CharacterInfo';
import Book from './Book';
function Main (props) {
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

    </div>
  );
}

export default Main;
