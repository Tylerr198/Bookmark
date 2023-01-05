import React from 'react'
import { PlusCircleIcon } from '@heroicons/react/24/outline'
import { useSession, signIn, signOut } from "next-auth/react"
import { collection, doc, setDoc, getDoc, addDoc } from "firebase/firestore"; 
import {app, db} from '../firebase';

function Book({title, img, link, id}) {
    const {data: session} = useSession()

    const addBook = async (e)=>{
        e.preventDefault()
        console.log('added')
        await addDoc(collection(db,'users',session.user.email,'books'),{
            title: title,
            img: img,
            link:link,
        })
    }

  return (
      <div className='flex gap-4 mt-5 mx-11 item-center shadow'>
        <div className=' h-[200px]'>
            <div className='flex items-center'>
                <a target='_black' href={link}><img src={img}/></a>
                <button onClick={addBook}>
                    <PlusCircleIcon className='h-7 w-7 mx-2 hover:scale-125 cursor-pointer transition-all duration-150 ease-out;'/>
                </button>
            <p className='hover:underline'><a target='_black' href={link}>{title}</a></p>
            </div>
        </div>     
    </div>
  )
}

export default Book