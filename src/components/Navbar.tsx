import React from 'react'
import TextEffect from './common/TextEffect'
import { useRefContext } from './providers/refProvider'

function Navbar() {
  const { projectsRef, skillsRef, hobbiesRef} = useRefContext()

  const executeScroll = (ref) => {
    ref.current.scrollIntoView({behavior: "smooth"})  
  }
  
  return (
    <nav className="absolute top-0 left-0 py-5 w-full z-50 px-4 flex">
      
      <div className="md:hidden">
        <TextEffect text={"JP"}/>
      </div>

      <ul className='flex ml-auto space-x-4 cursor-pointer text-gray-100 font-medium items-center'>
        <li className="hover:text-orange-500" onClick={() => executeScroll(skillsRef)}>Skills</li>
        <li className="hover:text-orange-500" onClick={() => executeScroll(projectsRef)}>Projects</li>
        <li className="hover:text-orange-500" onClick={() => executeScroll(hobbiesRef)}>Hobbies</li>
      </ul>

    </nav>
  )
}

export default Navbar
