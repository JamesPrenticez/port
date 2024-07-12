import React, {
  useState,
  type ReactElement,
} from "react";
import { NavLink } from "react-router-dom";
import { ArrowBackIcon } from "../icons";


interface item {
  name: string;
  slug: string;
}

interface IPlaygroundNavigation {
  [key: string]: string[];
}

interface Props {
  title: string;
  items: IPlaygroundNavigation[];
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
                {/* <ArrowBackIcon/>  */}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  &lt;-
                </span>
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

          {items.map((item, index) => (
              <div key={`${Object.keys(item)[0]}-${index}`} className="mb-3.75">
                {Object.keys(item).map((key) => (
                  <SubMenu title={key} key={key}>
                    {item[key].map((subItem, subIndex) => (
                      <NavLink
                      key={`${subItem}-${subIndex}`}
                      className="bg-transparent text-fuchsia-500 overflow-hidden flex cursor-pointer border-l-[5px] border-transparent hover:border-fuchsia-500 text-lg font-bold"
                      to={key}
                      style={({ isActive }) => ({
                        backgroundColor: isActive ? "#D946EF33" : "",
                        borderLeft: isActive ? `solid 5px #D946EF` : "",
                      })}
                    >
                      <h6 className="ml-[10px] text-ellipsis no-wrap transition-all duration-500 ease-in-out">
                        {subItem}
                      </h6>
                    </NavLink>
                    ))}
                  </SubMenu>
                ))}
              </div>
            ))}

          {/* NAVIGATION ITEMS */}

        </div>
    </div>
  );
};


export default Sidebar;

const SubMenu = ({ title, children }) => {
  return (
    <div>
      <h5 className="mb-0.5 ml-2.5 font-light text-black">{title}</h5>
      <div className="flex flex-col">{children}</div>
    </div>
  );
};