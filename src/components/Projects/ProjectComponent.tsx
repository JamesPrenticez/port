import React from "react";

export interface Item {
  id: string;
  title: string;
  desc: string;
  tech: string[];
  images: string[];
  link?: string;
  video?: string;
  tags: string[];
  color: string;
}

import { projects } from "@data"; 


function ProjectComponent(){


  return (

    projects.map((project, index) => {
      const isImageLeft= index % 2 === 0

      return (
<div key={project.id} className={`flex ${isImageLeft ? 'flex-row' : 'flex-row-reverse'} items-stretch my-8 bg-blue-600 p-4 rounded-[20px] gap-16`}>
  
  <div className="flex-1 flex items-center justify-center">
    <img src={project.images[0]} alt={project.title} className="w-full h-[450px] rounded-[20px]" />
  </div>

  <div className="flex-1 flex flex-col grow text-white">
    <h2 className="text-6xl font-bold">{project.title}</h2>
    <p className="mt-2">{project.desc}</p>
  </div>
</div>
      )
    }))
};

export default ProjectComponent;