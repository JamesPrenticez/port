import React, { useState, type ReactElement } from "react";
import { motion } from "framer-motion";
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { SortableContext, useSortable, rectSortingStrategy, arrayMove } from "@dnd-kit/sortable";

import {projects as data} from '../../data';
import { Button } from "@components/common/Button";
import SearchInput from "@components/common/SearchInput";

function Item(props) {
    const { id, title } = props;
    const { attributes, setNodeRef, listeners, transform, isDragging } = useSortable({
        id,
        transition: null
    });
    //console.log(isDragging);
    return (
      <motion.li 
        className="flex relative flex-grow-1 items-center p-4 bg-blue-900 text-white outline-none rounded-sm border-box list-none origin-[50%, 50%] whitespace-nowrap transform "
        style={{
          touchAction: 'none',
          position: 'relative',
          height: 140,
          width: 140,
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
              boxShadow: isDragging ? "0 0 0 1px rgba(63, 63, 68, 0.05), 0px 15px 15px 0 rgba(34, 33, 81, 0.25)" : "boxShadow: '0 0 0 0 rgba(63, 63, 68, 0), 0px 0px 0px 0 rgba(34, 33, 81, 0)'"
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
        {id}
        {title}
      </motion.li>
    );
}

function GridDnD(): ReactElement {    
    const [items, setItems] = useState(data)
    const [filteredIds, setFilteredIds] = useState([])
    const [activeId, setActiveId] = useState(null)//being dragged
    const [searchQuery, setSearchQuery] = useState("")

    console.log(searchQuery)

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
        console.log(items)
    }

    function addToFilteredIds(word){
      let newArrayOfItems = items.filter(item => item.tags.includes(word) === false)
      let newArrayOfItemIds = newArrayOfItems.map(item => item.id)
      setFilteredIds(newArrayOfItemIds)
    }

      // For string
    function sort() {
      //  let sortedArrayOfItems = items.sort((a, b) => { return a.id - b.id }); // for number
      //  let sortedArrayOfItems = items.slice().sort((a, b) => a.id.localeCompare(b.id)); // for lexicographic aka abcdef
      let sortedArrayOfItems = items.slice().sort((a, b) => parseInt(a.id, 10) - parseInt(b.id, 10)); // for number as string
      setItems(sortedArrayOfItems)
    }

    function shuffle(){
      let shuffledArrayOfItems = items.sort(() => Math.random() - 0.5) 
      setItems((items) => arrayMove(items, items.findIndex((item) => item.id), shuffledArrayOfItems.findIndex((item) => item.id)))
    }

    return (<>
    <div className="flex items-center justify-center space-x-2 w-full bg-blue-600">


      <SearchInput
        label="Linky Code:"
        placeholder="Search..."
        className=""
        value={searchQuery}
        onChange={(e) => { setSearchQuery(e.target.value.toLowerCase()) }}
      />

      <button className="!bg-red-500 !text-white font-bold w-24 p-x-2 py-2 rounded-sm" onClick={() => addToFilteredIds('clone')}>
        Clone
      </button>
      <button className="!bg-green-500 !text-white font-bold w-24 p-x-2 py-2 rounded-sm" onClick={() => addToFilteredIds('database')}>
        Database
      </button>
      <button className="!bg-blue-500 !text-white font-bold w-24 p-x-2 py-2 rounded-sm" onClick={() => addToFilteredIds('crypto')}>
        Crypto
      </button>
      <button className="!bg-pink-500 !text-white font-bold w-24 p-x-2 py-2 rounded-sm" onClick={() => setFilteredIds([])}>
        Show All
      </button>
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
                  {[...items]
                    .filter(
                      item =>
                      (item.title ? item.title.toLowerCase().includes(searchQuery.toLowerCase()) : false) &&
                      !filteredIds.includes(item.id)
                        // item.title.toLowerCase().includes(searchQuery.toLowerCase())  ||
                        // !filteredIds.includes(item.id)
                    )
                    .map(({id, title}) => (
                      <Item
                        id={id}
                        key={id}
                        title={title}
                      />
                    ))} 
              </ul>
          </SortableContext>
        </DndContext>
      </div>
    </>
  )
}

export default GridDnD
// https://github.com/JamesPrenticez/component-storage/blob/master/components/DNDFramerMotionGrid/DNDFramerMotionGrid.jsx