import React from 'react'
import { PlusCircleIcon } from '@heroicons/react/24/outline'

function Book({title, img, link, id}) {
  return (
      <div key={id} className='flex gap-4 mt-5 mx-11 item-center shadow'>
        <div className=' h-[200px]'>
            <div className='flex items-center'>
                <a target='_black' href={link}><img src={img}/></a>
                <PlusCircleIcon className='h-7 w-7 mx-2 hover:scale-125 cursor-pointer transition-all duration-150 ease-out;'/>
            <p className='hover:underline'><a target='_black' href={link}>{title}</a></p>
            </div>
        </div>     
    </div>
  )
}

export default Book