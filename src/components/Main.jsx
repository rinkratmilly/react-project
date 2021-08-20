import React from 'react';
import { Link, Route } from 'react-router-dom';

function Main ({characters, loading}) {
    if(loading){
        return <h1>loading</h1>
    } else {
        console.log(characters)
  
        return (
          <div>
            <h1>{characters.docs.map(character => {
              return(
                <h1>{character.name}</h1>
              );
            })
            }

          </div>
        );
    }
   
}

export default Main;
