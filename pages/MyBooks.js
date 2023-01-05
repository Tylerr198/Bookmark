import React from 'react'
import Header from '../Components/Header'
import {app, db} from '../firebase';
import { useSession } from 'next-auth/react';

function MyBooks() {
    const { data: session } = useSession()
  return (
    <div>
        <Header/>
        <h1>Your books</h1>
    </div>
  )
}

export default MyBooks