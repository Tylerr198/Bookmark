import React, { useState, useEffect } from 'react'
import Header from '../Components/Header'
import {app, db} from '../firebase';
import { useSession } from 'next-auth/react';
import { getDocs, doc, collection, query, onSnapshot } from 'firebase/firestore';
import Book from '../Components/Book';
import BookList from '../Components/BookList';

function MyBooks() {
    const { data: session } = useSession()

  return (  
    <div>
        <Header/>
        {session? <div>
            {<BookList/>}
            </div>:
        <h1>Sign in first!</h1>}
    </div>
  )
}

export default MyBooks