 import React, { useState, useEffect } from 'react';
function Chapters({match, book, setBooks, bookId}) {
    const [chapters, setChapters] = useState(null)
    const [loading, setLoading] = useState (true)
    
    useEffect (() => {
        const bookReturn = {
          key: process.env.REACT_APP_PROJECT_KEY,
          limit: 9,
          api: 'https://the-one-api.dev/v2',
          // endpoint: '/character/5cd99d4bde30eff6ebccfc42',
          book: '/book/',
          id : match.params._id,
          chapter: '/chapter/'
        };
       
    
        function getBook () {
    
          const url = `${bookReturn.api}${bookReturn.book}${bookId}${bookReturn.chapter}`;
            console.log(url)

          fetch (url, {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_PROJECT_KEY}`,
            },
          })
            .then (res => res.json ())
            .then (res => {
              setChapters (res);
             
              setLoading (false);
            });
        };
    
        getBook ();
      }, []);
      
      if (loading) {
        return <h1>Fly, you fools!</h1>;
      } else {
        return (
        <div>
            {chapters.docs.map (chapter => {
                console.log(chapter.name)
                return (
                <div>
                    <h1>
                   {chapter.name}
                    </h1>
                    <h1>{chapter._id}</h1>
                </div>
                
            )})
      } 
      </div>
        )}
    }
    
    export default Chapters;