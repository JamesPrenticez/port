import React, { useState, type ReactElement, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { SortableContext, useSortable, rectSortingStrategy, arrayMove } from "@dnd-kit/sortable";

import { ISkills } from "@models";
import { AEMIcon, AzureIcon, BashIcon, CSSIcon, ExpressIcon, FlaskIcon, GitIcon, HTMLIcon, JSIcon, JestIcon, MUIIcon, MongoDBIcon, NodeIcon, PythonIcon, ReactIcon, ReduxIcon, SQLIcon, TSIcon, TwindIcon } from "./icons";
import { Squircle } from "./playground";
import TextEffect from "./common/TextEffect";
import useMediaQuery from "@hooks/useMediaQuery";
import Title from "./common/Title";
import { debounce } from "lodash";

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

    const ref = useRef<HTMLDivElement>(null);
    const [cellWidth, setCellWidth] = useState(0)

    useEffect(() => {
      // dont really need the debounce but we keep it just cause
      const updateWidth = debounce(() => {
        if(ref.current) {
          setCellWidth(ref.current.offsetWidth);
        }
      }, 0); 
  
      updateWidth();
  
      window.addEventListener('resize', updateWidth);
  
      return () => window.removeEventListener('resize', updateWidth);
    }, []);

    return (
      <motion.li 
        className="flex relative items-center justify-center bg-transparent text-white outline-none rounded-lg border-box list-none whitespace-nowrap transform"
        style={{
          touchAction: 'none',
          position: 'relative',
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
      <div ref={ref} className="w-[80%] h-[80%]">
        <Squircle 
          width={cellWidth}
          bgcolor= " #2c5ec0"
          roundness={0.25}
          shadow={isDragging ? "drop-shadow(0 0 0.75rem rgb(56 189 248) )" : ""}
        >
          <div className="flex items-center justify-center relative">
            <div className="h-[60%] w-[60%] mb-2">{icon}</div>
            <div className="absolute bottom-[-20px] lg:bottom-[-25px] font-medium text-[#f9fafbCC] text-center whitespace-normal">{title}</div>
          </div>
        </Squircle>
          </div>
      </motion.li>
    );
}

function Skills(): ReactElement {    
    const [items, setItems] = useState(skills)
    const [activeId, setActiveId] = useState(null)
    const [filteredIds, setFilteredIds] = useState([])

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

    function addToFilteredIds(word){
      let newArrayOfItems = items.filter(item => item.tags.includes(word) === false)
      let newArrayOfItemIds = newArrayOfItems.map(item => item.id)
      setFilteredIds(newArrayOfItemIds)
    }

    return (
    
    // <div className="flex flex-col w-full grow px-6 mx-auto bg-red-400 max-w-[100vw]">
      <div className='w-full max-w-[95rem] mx-auto flex flex-col grow'>

      <div className="block lg:flex items-center">
        <Title text="Technologies"/>

        <div className="text-gray-50/80 font-bold text-[16px] ml-auto space-x-2 flex ">
          <button className="bg-blue-700  hover:bg-white  hover:text-blue-900 w-24 py-[0.75rem] rounded-lg" onClick={() => addToFilteredIds('frontend')}>
            Frontend
          </button>
          <button className="bg-blue-700  hover:bg-white  hover:text-blue-900 w-24 py-[0.75rem] rounded-lg" onClick={() => setFilteredIds([])}>
            Show All
         </button>
          <button className="bg-blue-700  hover:bg-white  hover:text-blue-900  w-24 py-[0.75rem] rounded-lg" onClick={() => shuffle()}>
            Shuffle
          </button>
          <button className="bg-blue-700  hover:bg-white  hover:text-blue-900 w-24 py-[0.75rem] rounded-lg" onClick={() => sort()}>
            Sort
          </button>
        </div>

      </div>

      <div className='w-full mx-auto'>
        <DndContext 
          collisionDetection={closestCenter}
          sensors={sensors}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          autoScroll={false}
        >
          <SortableContext strategy={rectSortingStrategy} items={items}>
          <ul className="grid grid-cols-3 lg:grid-cols-6 gap-0 lg:gap-6">
                  {items
                  
                  .filter(
                    item =>
                    !filteredIds.includes(item.id)
                  )
                  
                  .map((item, index) => (
                    
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

//  <button className="bg-lue-700 border-gray-50/80 hover:bg-blue-800 hover:border-blue-800 hover:text-white border-2 w-24 py-[0.75rem] rounded-lg" onClick={() => addToFilteredIds('frontend')}>
//     Frontend
//   </button>
//   <button className="bg-lue-700 border-gray-50/80 hover:bg-blue-800 hover:border-blue-800 hover:text-white border-2 w-24 py-[0.75rem] rounded-lg" onClick={() => addToFilteredIds('backend')}>
//     Backend
//   </button>
//   <button className="bg-lue-700 border-gray-50/80 hover:bg-blue-800 hover:border-blue-800 hover:text-white border-2 w-36 py-[0.75rem] rounded-lg" onClick={() => addToFilteredIds('infrastructure')}>
//     Infrastructure
//   </button>
//   <button className="bg-lue-700 border-gray-50/80 hover:bg-blue-800 hover:border-blue-800 hover:text-white border-2 w-24 py-[0.75rem] rounded-lg" onClick={() => setFilteredIds([])}>
//     Show All
//   </button>
// https://github.com/JamesPrenticez/component-storage/blob/master/components/DNDFramerMotionGrid/DNDFramerMotionGrid.jsx