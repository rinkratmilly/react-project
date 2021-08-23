import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';


function Chapters({match, books, setBooks, bookId}) {

    // const [chapters, setChapters] = useState(null)
    // const [loading, setLoading] = useState (true)
    
    // useEffect (() => {
    //     const bookReturn = {
    //       key: process.env.REACT_APP_PROJECT_KEY,
    //       limit: 9,
    //       api: 'https://the-one-api.dev/v2',
    //       // endpoint: '/character/5cd99d4bde30eff6ebccfc42',
    //       book: '/book/',
    //       id : match.params._id,
    //       chapter: '/chapter/'
    //     };
       
    
    //     function getBook () {
    
    //       const url = `${bookReturn.api}${bookReturn.book}${bookId}${bookReturn.chapter}`;
    //         console.log(url)

    //       fetch (url, {
    //         method: 'GET',
    //         headers: {
    //           Authorization: `Bearer ${process.env.REACT_APP_PROJECT_KEY}`,
    //         },
    //       })
    //         .then (res => res.json ())
    //         .then (res => {
    //           setChapters (res);
             
    //           setLoading (false);
    //         });
    //     };
    
    //     getBook ();
    //   }, []);
      
    //   if (loading) {
    //     return <h1>Fly, you fools!</h1>;
    //   } else {
    //     return (
    //     <div>
    //         {chapters.docs.map (chapter => {
    //             console.log(chapter.name)
    //             return (
    //             <div>
    //                 <h1>
    //                {chapter.name}
    //                 </h1>
    //                 <h1>{chapter._id}</h1>
    //             </div>
                
    //         )})
    //   } 
    //   </div>
    //     )}
    const {id} = useParams();

    const [chapters, setChapters] = useState([])
    const [loading, setLoading] = useState (true)
    
    useEffect(() => {

        const chapterReturn = {
          key: process.env.REACT_APP_PROJECT_KEY,
          limit: 9,
          api: 'https://the-one-api.dev/v2',
          // endpoint: '/character/5cd99d4bde30eff6ebccfc42',
          book: '/book/',
          // id : match.params._id,
          chapter: '/chapter'
        };
    
          const url = `${chapterReturn.api}${chapterReturn.book}${id}${chapterReturn.chapter}`;
            // console.log(url);

          fetch (url, {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_PROJECT_KEY}`,
            }
          })
            .then (res => res.json())
            .then (res => {
              setChapters (res.docs)
             
              setLoading (false)
            })
            .catch(console.err)
        }, [])

        // console.log(chapters)
    
    //     getBook ();
    //   }, []);
      
    //   if (loading) {
    //     return <h1>Fly, you fools!</h1>;
    //   } else {
    //     return (
    //     <div>
    //         {chapters.docs.map (chapter => {
    //             console.log(chapter.name)
    //             return (
    //             <div>
    //                 <h1>
    //                {chapter.name}
    //                 </h1>
    //                 <h1>{chapter._id}</h1>
    //             </div>
                
    //         )})
    //   } 
    //   </div>
    //     )}

    

    // console.log(books)


    //this is what we want
    let filteredBooks = books.filter(filtered => filtered !== undefined) //returned data that is not undefined 1
    let filteredChapters = chapters.filter(chapters => chapters !== undefined)
   console.log(filteredChapters);
   //to see what we are doing 
    let bookName = filteredBooks.map(book_name => book_name.name) //array of books 2
    let bookID = filteredBooks.map(id => id['_id']) //array of book ids 3

    // console.log(filteredBooks)

  

      return (
      <div>
        {
          //here
          filteredBooks.filter(data => data['_id'].includes(id)).map( data => {
            return (
              <h3>{data.name}</h3>
            );
          })
        }

        <ul>
          {
            filteredChapters.map(bookChapters => {
            return (
              <li>{bookChapters.chapterName}</li>
            );
            })
          }
        </ul>
      </div>
      )
    }
    
    export default Chapters;