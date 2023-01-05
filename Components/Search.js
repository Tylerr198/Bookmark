import React from 'react'
import BookSearch from './BookSearch'

function Search() {
  return (
    <div>
        <div className='mt-[15px] ml-[35vw]'>
            <input className='border h-10 w-[500px] hover:ring-1 ring-black pl-2' type='text' placeholder='Search for a book' ></input>
        </div>
        <BookSearch/>
    </div>
  )
}

export default Search