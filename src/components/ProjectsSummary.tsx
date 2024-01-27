import React from 'react'
import Title from './common/Title'
import ProjectsGrid from './Projects/ProjectsGrid'
import ProjectComponent from './Projects/ProjectComponent'

function ProjectsSummary() {
  return (
    <div className='w-full max-w-[95rem] px-6 mx-auto'>
      <Title text="Personal Projects" />
      {/* <ProjectsGrid /> */}
      <ProjectComponent />
    </div>
  )
}

export default ProjectsSummary