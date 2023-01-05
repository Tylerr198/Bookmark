import React, { useEffect, useState } from 'react'
import {app, db} from '../firebase';
import { useSession } from 'next-auth/react';
import { getDocs, doc, collection, query, onSnapshot } from 'firebase/firestore';
import Book from './Book';

function BookList() {
    const {data: session} = useSession()
    const [bookList, setBookList] = useState([])
    const [empty, setEmpty] = useState(true)
    useEffect(()=>{
        async function getList(){
            const data = []
            const querySnapshot = await getDocs(collection(db, "users",session.user.email,'books'));
            if (!querySnapshot.empty){
                querySnapshot.forEach((doc) => {
                    data.push(doc.data())
                })
            }
            setBookList(data)
            setEmpty(false)
       }     
       getList()
},[]);
    

  return (
    <div>{empty?
    <h1>You have no books yet!</h1>:
     (  <div>
        <h1>Your Books!</h1>
        {bookList.map(book=>(<Book key={book.title} title={book.title} img={book.img} link={book.link}/> 
        )
        )}
        </div>)}
    </div>
  )
}

export default BookList