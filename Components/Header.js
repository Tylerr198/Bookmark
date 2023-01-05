import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { collection, doc, setDoc, getDoc } from "firebase/firestore"; 
import {app, db} from '../firebase';

function Header() {
  const { data: session } = useSession()

    async function addUser (){
    const docRef = doc(db,'users',session.user.email)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()){
      return;
    } else{
      await setDoc(doc(db,'users',session.user.email),{
        name:session.user.name,
        email:session.user.email,
      })
    }
  }
  if (session){
    addUser()
  }
  const logIn = ()=>{
    if (session) {
      return (
        <>
          <img className='rounded-full w-14 h-14 mt-2' alt='' src={session.user.image}/>
          <button className='pr-2 hover:underline' onClick={() => signOut()}>Sign out</button>
        </>
      )
    }
    return (
      <>
        <button className='pr-2 hover:underline' onClick={() => signIn()}>Sign in</button>
      </>
    )
  }
  return (
    <div>
        <div className='flex justify-between bg-white border-b shadow-sm item-center pt-2 h-15'>
            <div className='flex gap-2 pt-2 text-lg items-center'>
                <h1 className='ml-3 font-bold'>BookMark</h1>
                <button className=' p-2 m-3 hover:underline'>My Books</button>
                <button className='hover:underline'>Search For Book</button>
            </div>
            <div className='flex gap-4 mr-5'>
                {logIn()}
            </div>
        </div>
    </div>
  )
}

export default Header