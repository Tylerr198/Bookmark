import React from 'react'

function Book() {
  return (
      <div className='flex gap-4 mt-5 mx-10 item-center'>
        <div className=' h-[200px]'>
            <div className='flex items-center'>
                <img src="http://books.google.com/books/content?id=L18VBQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                    alt=''/>
                <button className='border h-[30px] ml-2'>Add</button>
        
            <p className=''>The Psychology of Harry Potter</p>
            </div>
        </div>     
    </div>
  )
}

export default Book