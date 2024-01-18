import React from 'react'
import { Link } from 'react-router-dom'

function Hobbies() {
  return (
    <div className='flex flex-col grow items-center justify-center'>
      <Link 
        className='text-fuchsia-500 hover:underline cursor-pointer'
        to="/playground">
        Vist the playground
      </Link>
      <p className='text-white'>PS. this website is a work in progress</p>
    </div>
  )
}

export default Hobbies