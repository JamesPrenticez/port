import React, { useState, type ReactElement } from "react";
import { motion } from "framer-motion";
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { SortableContext, useSortable, rectSortingStrategy, arrayMove } from "@dnd-kit/sortable";

import { ISkills } from "@models";
import { AEMIcon, AzureIcon, BashIcon, CSSIcon, ExpressIcon, FlaskIcon, GitIcon, HTMLIcon, JSIcon, JestIcon, MUIIcon, MongoDBIcon, NodeIcon, PythonIcon, ReactIcon, ReduxIcon, SQLIcon, TSIcon, TwindIcon } from "./icons";
import { Squircle } from "./playground";
import TextEffect from "./common/TextEffect";

export const skills: ISkills[] = [
  { id: 1, title: "HTML", tags: ["frontend"], icon: <HTMLIcon /> },
  { id: 2, title: "CSS", tags: ["frontend"], icon: <CSSIcon /> },
  { id: 3, title: "Javascript", tags: ["frontend"], icon: <JSIcon /> },
  { id: 4, title: "Typescript", tags: ["frontend"], icon: <TSIcon /> },
  { id: 5, title: "React", tags: ["frontend"], icon: <ReactIcon /> },
  { id: 6, title: "Redux", tags: ["frontend"], icon: <ReduxIcon /> },
  { id: 7, title: "Tailwind", tags: ["frontend"], icon: <TwindIcon /> },
  { id: 8, title: "Python", tags: ["backend"], icon: <PythonIcon /> },
  { id: 9, title: "Flask", tags: ["backend"], icon: <FlaskIcon /> },
  { id: 10, title: "T-SQL", tags: ["backend"], icon: <SQLIcon /> },
  { id: 11, title: "Azure", tags: ["infrastructure"], icon: <AzureIcon /> },
  { id: 12, title: "NodeJS", tags: ["infrastructure"], icon: <NodeIcon />},
  { id: 13, title: "GIT", tags: ["infrastructure"], icon: <GitIcon /> },
  { id: 14, title: "AEM", tags: ["frontend", "backend"], icon: <AEMIcon /> },
  { id: 15, title: "Bash", tags: ["infrastructure"], icon: <BashIcon /> },
  { id: 16, title: "MUI", tags: ["frontend"], icon: <MUIIcon /> },
  { id: 17, title: "Express", tags: ["backend"], icon: <ExpressIcon /> },
  { id: 18, title: "Jest", tags: ["frontend", "backend"], icon: <JestIcon />},
  // { id: 19, title: "Mongo DB", icon: <MongoDBIcon /> },
]

function Item(props) {
    const { id, title, icon } = props;
    const { attributes, setNodeRef, listeners, transform, isDragging } = useSortable({
        id,
        transition: null
    });

    return (
      <motion.li 
        className="flex relative flex-grow-1 items-center p-4 bg-transparent text-white outline-none rounded-lg border-box list-none whitespace-nowrap transform"
        style={{
          touchAction: 'none',
          position: 'relative',
          height: 200,
          width: 200,
        }}
        ref={setNodeRef}
        tabIndex={0}
        layoutId={id}
        animate={transform 
          ? {
              x: transform.x,
              y: transform.y,
              scale: isDragging ? 1.05 : 1,
              zIndex: isDragging ? 1 : 0,
            } : {
            x: 0,
            y: 0,
            scale: 1
          }}
      
        transition={{
          duration: !isDragging ? 0.25 : 0,
          easings: {
            type: "spring"
          },
          scale: {
              duration: 0.25
          },
          zIndex: {
            delay: isDragging ? 0 : 0.25
          }
        }}
        
        {...attributes}
        {...listeners}
      >
        {/* {JSON.stringify(isDragging)} */}
        <Squircle 
          width={160}
          bgcolor= " #2c5ec0" // "#468df7"//" #1e3a8a80" //"#f9fafbCC"
          roundness={0.25}
          shadow={isDragging ? "drop-shadow(0 0 0.75rem rgb(56 189 248) )" : ""}
        >
          <div className="h-full w-full flex flex-col items-center justify-center relative">
            <div className="h-1/2 w-1/2">{icon}</div>
            <div className="absolute bottom-[15px] font-medium text-[#f9fafbCC] text-center whitespace-normal">{title}</div>
          </div>
        </Squircle>
      </motion.li>
    );
}

function Skills(): ReactElement {    
    const [items, setItems] = useState(skills)
    const [activeId, setActiveId] = useState(null)//being dragged

    const sensors = useSensors(useSensor(PointerSensor));

    function handleDragStart({ active }){
        setActiveId(active.id);
    }

    function handleDragEnd({ over }){
      setItems((items) => arrayMove(items, items.findIndex((item) => item.id === activeId), items.findIndex((item) => item.id === over.id)))
      setActiveId(null);
    }

    function sort() {
      let sortedArrayOfItems = [...items].sort((a, b) => { return a.id - b.id }); // for number
      setItems(sortedArrayOfItems)
    }

    function shuffle(){
      let shuffledArrayOfItems = items.sort(() => Math.random() - 0.5) 
      setItems((items) => arrayMove(items, items.findIndex((item) => item.id), shuffledArrayOfItems.findIndex((item) => item.id)))
    }

    return (
    
    <div className="flex flex-col grow ">

      <div className="flex items-center px-16 bg-blue-00 py-8">
        <TextEffect text="Technologies"/>

        <div className="text-gray-50/80 font-bold text-lg ml-auto space-x-2 ">
          <button className="bg-lue-700 border-gray-50/80 hover:bg-blue-800 hover:border-blue-800 hover:text-white  border-2 w-24 py-4 rounded-lg" onClick={() => sort()}>
            Sort
          </button>
          <button className="bg-lue-700 border-gray-50/80 hover:bg-blue-800 hover:border-blue-800 hover:text-white border-2 w-24 py-4 rounded-lg" onClick={() => shuffle()}>
            Shuffle
          </button>

          <button className="bg-lue-700 border-gray-50/80 hover:bg-blue-800 hover:border-blue-800 hover:text-white border-2 w-24 py-4 rounded-lg" onClick={() => shuffle()}>
            Frontend
          </button>
        </div>

      </div>

      <div className="flex justify-center items-center grow">
        <DndContext 
          collisionDetection={closestCenter}
          sensors={sensors}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          autoScroll={false}
        >
          <SortableContext strategy={rectSortingStrategy} items={items}>
          <ul className="grid grid-cols-6 gap-4">
                  {items.map((item, index) => (
                      <Item
                        id={item.id}
                        key={item.id}
                        title={item.title}
                        icon={item.icon}
                      />
                    ))} 
              </ul>
          </SortableContext>
        </DndContext>
      </div>

    </div>
  )
}

export default Skills
// https://github.com/JamesPrenticez/component-storage/blob/master/components/DNDFramerMotionGrid/DNDFramerMotionGrid.jsx