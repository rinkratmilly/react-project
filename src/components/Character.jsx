import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';


function Character (props) {
  const [characters, setCharacters] = useState (null);
  const [loading, setLoading] = useState (true);


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

  if(loading){
    return <h1>Fly, you fools!</h1>
} else {

  return (
    <div>
    {characters.docs.map(character => {
       return(
         <Link to = {`/book/${character.name}`} key= {character.name}>
         <li>{character.name}</li>
           </Link>
       );
     })
     }
  
   </div>
  );
}
}
export default Character;
