import React from 'react'

function Header() {
  return (
    <div>
        <div className='flex justify-between bg-white border-b shadow-sm item-center pt-2 h-15'>
            <div className='flex gap-2 pt-2 text-lg items-center'>
                <h1 className='ml-3 font-bold'>BookMark</h1>
                <button className=' p-2 m-3 hover:underline'>My Books</button>
                <button className='hover:underline'>Search For Book</button>
            </div>
            <div className='flex gap-2 mr-5'>
                <img className='rounded-full w-14 h-14 mt-2'
                alt='' src='https://preview.redd.it/ot8wvzl7snd71.png?width=356&format=png&auto=webp&s=43b677fd94fe01e3b2b104eec753481139dbec3b'/>
                <button className='pr-2 '>Sign out</button>
            </div>
        </div>
    </div>
  )
}

export default Header