import React, {useState, useEffect} from 'react';
import {Link, Route} from 'react-router-dom';
import Chapters from './Chapters';
const Book = () => {
  const [books, setBooks] = useState (null);
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
          setBooks (res);
          setLoading (false);
        });
    }

    getBook ();
  }, []);

  if (loading) {
    return <h1>Fly, you fools!</h1>;
  } else {
    return (
      <div>
        {books.docs.map (book => {
            console.log(book)
          return (
            <div>
            <Link to={`/book/${book._id}/chapter`} key={book.name}>
              <li>{book.name}</li>
            </Link> 
            
              <Route exact path={`/book/${book._id}/chapter`}
              render={(routerProps) => <Chapters book = {book} setBooks= {setBooks} match = {routerProps.match}
              bookId = {book._id}/>}
              />
             
              </div> 
          );
        })}

      </div>
    );
  }
};

export default Book;
