import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { data } from '../data/playgroundProjects';
import Sidebar from '@components/Sidebar';

const Playground = () => {
  return (
    <div className='bg-gray-50 flex flex-col min-h-screen'>

      <div className='flex'>
        <Sidebar 
          title="Playground"
          items={data.map(x => ({name: x.title, slug: x.slug}))}
        />

        <div className='flex grow'>
          <Routes>
            <Route index element={<h3>Welcome to the Playground</h3>} />
            {data.map((data) => (
              <Route key={data.id} path={data.slug} element={data.component} />
            ))}
          </Routes>
        </div>

      </div>
    </div>
  );
};

export default Playground
