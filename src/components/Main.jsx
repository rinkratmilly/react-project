import React from 'react';
import { Link, Route } from 'react-router-dom';

function Main ({characters, loading}) {
  
    if(loading){
        return <h1>loading</h1>
    } else {
        console.log(characters)
        console.log('LOOKHERE', characters.id)
  
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

export default Main;
