import React, { useState, type ReactElement } from "react";
import { motion } from "framer-motion";
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { SortableContext, useSortable, rectSortingStrategy, arrayMove } from "@dnd-kit/sortable";

import { ISkills } from "@models";
import { AzureIcon, CSSIcon, FlaskIcon, GitIcon, HTMLIcon, JSIcon, NodeIcon, PythonIcon, ReactIcon, ReduxIcon, SQLIcon, TwindIcon } from "./icons";
import { Squircle } from "./playground";

export const skills: ISkills[] = [
  { id: 1, title: "HTML", icon: <HTMLIcon /> },
  { id: 2, title: "CSS", icon: <CSSIcon /> },
  { id: 3, title: "Javascript", icon: <JSIcon /> },
  { id: 4, title: "React", icon: <ReactIcon /> },
  { id: 5, title: "Redux", icon: <ReduxIcon /> },
  { id: 6, title: "Tailwind", icon: <TwindIcon /> },
  { id: 7, title: "Python", icon: <PythonIcon /> },
  { id: 8, title: "Flask", icon: <FlaskIcon /> },
  { id: 9, title: "T-SQL", icon: <SQLIcon /> },
  { id: 10, title: "Azure", icon: <AzureIcon /> },
  { id: 11, title: "NodeJS", icon: <NodeIcon />},
  { id: 12, title: "GIT", icon: <GitIcon /> },
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
          <div className="absolute bottom-[15px] font-medium text-[#f9fafbCC]">{title}</div>
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
        //console.log(active);
        setActiveId(active.id);
    }

    function handleDragEnd({ over }){
        //console.log(over)
        // const a = items.findIndex((item) => item.id === activeId);
        // const b = items.findIndex((item) => item.id === over.id)
        setItems((items) => arrayMove(items, items.findIndex((item) => item.id === activeId), items.findIndex((item) => item.id === over.id)))
        setActiveId(null);
    }

      // For string
    function sort() {
      // let sortedArrayOfItems = [...items].sort((a, b) => { return a.id - b.id }); // for number
      let sortedArrayOfItems = [...items].sort((a, b) => { return a.id - b.id }); // for number
      // let sortedArrayOfItems = items.slice().sort((a, b) => a.id.localeCompare(b.id)); // for lexicographic aka abcdef
      // let sortedArrayOfItems = items.slice().sort((a, b) => parseInt(a.id, 10) - parseInt(b.id, 10)); // for number as string
      setItems(sortedArrayOfItems)
      console.log(sortedArrayOfItems)
    }

    function shuffle(){
      let shuffledArrayOfItems = items.sort(() => Math.random() - 0.5) 
      setItems((items) => arrayMove(items, items.findIndex((item) => item.id), shuffledArrayOfItems.findIndex((item) => item.id)))
    }

    return (<>
    <div className="flex items-center justify-center space-x-2 w-full bg-blue-600">

      <button className="!bg-orange-500 !text-white font-bold w-24 p-x-2 py-2 rounded-sm" onClick={() => sort()}>
        Sort
      </button>
      <button className="!bg-yellow-500 !text-white font-bold w-24 p-x-2 py-2 rounded-sm" onClick={() => shuffle()}>
        Shuffle
      </button>

    </div>
      <div className="flex justify-center items-center w-full border-box p-4">
        <DndContext collisionDetection={closestCenter} sensors={sensors} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
          <SortableContext strategy={rectSortingStrategy} items={items}>
          <ul className="grid grid-cols-4 gap-4 p-4">
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
    </>
  )
}

export default Skills
// https://github.com/JamesPrenticez/component-storage/blob/master/components/DNDFramerMotionGrid/DNDFramerMotionGrid.jsx