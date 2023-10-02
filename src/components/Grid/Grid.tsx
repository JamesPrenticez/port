import React, { useState, type ReactElement, forwardRef } from "react";

import { projects as data } from '../../data';
import Modal from "./Modal";
import Card from "./Card";
import { AnimatePresence } from "framer-motion";

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

function Grid(): ReactElement {
    const [items, setItems] = useState(data)
    const [selectedId, setSelectedId] = useState<string | null>(null) // to open modal

    return (
      <div className="flex justify-center items-center pt-4">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 max-w-7xl ">
          {items.map((item) => (
            <AnimatePresence key={item.id}>
              <Card
                selectedId={selectedId}
                item={item}
                handleClick={setSelectedId}
              />
            </AnimatePresence>

            ))} 
        </ul>

        {selectedId && (
          <AnimatePresence>
            <Modal
              selectedId={selectedId}
              setSelectedId={setSelectedId}
              item={items.find(item => item.id === selectedId)}
            />
          </AnimatePresence>

        )}
      </div>
  )
}

export default Grid

// https://github.com/JamesPrenticez/component-storage/blob/master/components/DNDFramerMotionGrid/DNDFramerMotionGrid.jsx