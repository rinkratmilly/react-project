import React from 'react';

function Main ({characters, loading}) {
    console.log(characters)
    if(loading){
        return <h1>loading</h1>
    } else {
        
        return (
          <div>
            {/* <h1>{characters.docs[0].name}</h1> */}
      
          </div>
        );
    }

}

export default Main;
