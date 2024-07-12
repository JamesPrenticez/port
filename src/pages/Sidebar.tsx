import React from 'react'

interface IPlaygroundNavigation {
  [key: string]: string[];
}

import { INavigationItem } from "@constan

const navigationItems: IPlaygroundNavigation[] = [
  { "3d": [ "minecraft", "car"] },
  { "animation": ["card", "cogs", "cube" ] },
  { "components": ["process display", "tile", "horizontal scroller", "recursive tree", "stripe navbar" ]},
  { "forms": ["form validation"] },
  { "icons": [] },
  { "inputs": [ "weird input", "dot slider" ] },
  { "interactive": [ "particle image", "particle text" ] },
  { "static": ["squircle", "synthwave"] },
  { "text effects": ["bouncy text", "hand writing", "transparent text", "type writer"] }
]


const SubMenu = ({ title, children }) => {
  return (
    <div>
      <h5 className="mb-0.5 ml-2.5 font-light">{title}</h5>
      <div className="flex flex-col">{children}</div>
    </div>
  );
};

//   <NavLink
//   key={`${item.name} ${index}`}
//   to={item.url}
//   // className="flex items-center p-1.25 cursor-pointer border-l-5 border-transparent hover:bg-blue-300"
//   // activeClassName="bg-blue-300 border-blue-200"
//   className={({ isActive }) =>
//     twMerge(
//       "flex items-center p-1.25 cursor-pointer border-l-5 border-transparent hover:bg-blue-300",
//       isActive ? "bg-red-500" : "bg-green-500"
//     )
//   }
// >
//   <svg className={`w-6 h-6 ${item.supported ? "text-green-500" : ""}`}>{item.icon}</svg>
//   <span className="hidden md:inline-block ml-2.5 truncate">
//     {item.name}
//   </span>
// </NavLink>

const Sidebar = () => {
  return (
    <div>Sidebar</div>
  )
}

export default Sidebar