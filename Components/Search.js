import React, { useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import axios from 'axios';
import Book from './Book';

function Search() {
    const [search, setSearch] = useState("")
    const [results, setResults] = useState([])

    const handleSubmit = (e)=>{
        e.preventDefault()
        const s = search
        if (s===''){
            return;
        }
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + s)
        .then(data => {
            setResults(data.data.items)
            }
        )
        setSearch('')
    }
  return (
    <div>
        <div className='mt-[15px] ml-[35vw] flex'>
            <form className='flex' onSubmit={handleSubmit}>
                <input className='border h-10 w-[500px] hover:ring-1 ring-black pl-2' type='text' value={search}placeholder='Search for a book'
                    onChange={(e)=>setSearch(e.target.value)}></input>
                <button type='submit'><MagnifyingGlassIcon className='h-10 border hover:ring-1 ring-black'/></button>
            </form>
        </div>
        {results.map((book) =><Book img={book.volumeInfo.imageLinks.thumbnail}
            title={book.volumeInfo.title} id={book.id} link={book.volumeInfo.infoLink}/>)}
    </div>
  )
}

export default Search