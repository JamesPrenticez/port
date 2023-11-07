import React from 'react'
import Title from './common/Title'
import ProjectsGrid from './Projects/ProjectsGrid'

function ProjectsSummary() {
  return (
    <div className='w-full max-w-[95rem] px-6 mx-auto'>
      <Title text="Projects" />
      <ProjectsGrid />
    </div>
  )
}

export default ProjectsSummary