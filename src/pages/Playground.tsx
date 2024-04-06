import React from "react";
import { Routes, Route } from "react-router-dom";
import { data } from "../data/playgroundProjects";
import Sidebar from "@components/Sidebar";
import TextEffect from "@components/common/TextEffect";

const Playground = () => {
  return (
    <div className="bg-gray-50 flex flex-col min-h-screen">
      <div className="flex">
        <Sidebar title="Playground" items={data.map((x) => ({ name: x.title, slug: x.slug }))} />

        <div className="flex grow">
          <Routes>
            <Route index element={<PlaygroundHomepage />} />
            {data.map((data) => (
              <Route key={data.id} path={data.slug} element={data.component} />
            ))}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Playground;

function PlaygroundHomepage(){
  return (
    <div className="bg-violet-700 flex-col gap-4 flex w-full items-center justify-center">
      <TextEffect color1="#5c8ba1" color2="#8ec8e3" text='Welcome' />
      <span className="flex space-x-4">
        <TextEffect color1="#cbb76e" color2="#fee99b" text='to' />
        <TextEffect color1="#b5666f" color2="#f79196" text='the' />
      </span>
      <TextEffect color1="#648f7d" color2="#96dab4" text='Playground!' />
    </div>
  )
}
