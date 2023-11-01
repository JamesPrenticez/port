import React, {
  useState,
  type ReactElement,
} from "react";
import { NavLink } from "react-router-dom";
import { ArrowBackIcon } from "./icons";


interface item {
  name: string;
  slug: string;
}

interface Props {
  title: string;
  items: item[]
}

const Sidebar = ({title, items}: Props): ReactElement => {
  const [sidebarOpen, toggleSidebar] = useState(false);

  return (
    <div 
      className="flex h-screen bg-white border-r border-fuchsia-300 transition-all duration-500 ease-in-out" 
      style={{width: `${sidebarOpen ? "90px" : "280px"}`}}
    >
        <div className="w-full">
          {/* MENU TITLE & COLLAPSE TOGGLE */}

          
          <div className="pt-[5px] ml-[15px] mb-4">

            <NavLink to="/">
              <button className="text-blue-600 hover:underline font-medium flex space-x-[4px]">
                <ArrowBackIcon/> 
                <p>back</p>
              </button>
            </NavLink>

            <h3 className="text-4xl hidden font-black text-fuchsia-500 md:flex">
              {title}
            </h3>



 
            {/* <Box margin={`${sidebarOpen ? "0 auto" : "0 0 0 auto"}`}>
              <IconButton
                onClick={() => {
                  toggleSidebar(!sidebarOpen);
                }}
                sx={{ color: "inherit" }}
              >
                {sidebarOpen ? <MenuOutlinedIcon sx={{ fontSize: "24px" }} /> : <KeyboardArrowLeftOutlinedIcon sx={{ fontSize: "24px" }} />}
              </IconButton>
            </Box> */}
          </div>



          {/* NAVIGATION ITEMS */}
          {items?.map((item, index) => (
            <NavLink
              key={`${item.name} ${index}`}
              className="bg-transparent text-fuchsia-500 overflow-hidden flex cursor-pointer border-l-[5px] border-transparent hover:border-fuchsia-500 text-lg font-bold"
              to={item.slug}
              style={({ isActive }) => ({
                backgroundColor: isActive ? "#D946EF33" : "",
                borderLeft: isActive ? `solid 5px #D946EF` : "",
              })}
            >
              <h6 className="ml-[10px] text-ellipsis no-wrap transition-all duration-500 ease-in-out">
                {item.name}
              </h6>
            </NavLink>
          ))}
          
        </div>
    </div>
  );
};

export default Sidebar;
