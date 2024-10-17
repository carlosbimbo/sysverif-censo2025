import { useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";

const SubMenu = ({ data }) => {
  const { pathname } = useLocation();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  return (
    <>
      <li
        className={`link ${pathname.includes(data.name) && "text-blue-600"}`}
        onClick={() => setSubMenuOpen(!subMenuOpen)}
      >
        <data.icon size={23} className="min-w-max" />
        <p className="flex-1 capitalize">DynamoDb-Captura</p>
        <IoIosArrowDown
          className={` ${subMenuOpen && "rotate-180"} duration-200 `}
        />
      </li>
      <motion.ul
        animate={
          subMenuOpen
            ? {
                height: "fit-content",
              }
            : {
                height: 0,
              }
        }
        className="flex h-0 flex-col pl-14 text-[0.8rem] font-normal overflow-hidden"
      >
        
        {data.menus?.map((menu) => (
        //menu?.map((det) => (

         /* <li key={menu.keymenu}>
            {}
            <NavLink
              to={`/${data.name}/${menu.keymenu}`}
              className="link !bg-transparent capitalize"
            >
              {menu.nombre}
            </NavLink>
          </li>*/

          <ul className="space-y-2">
          <li className="flex items-center">
            <svg className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="11" />
              <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
            </svg>
            <p className="ml-2">              
              <code className="text-sm font-bold text-gray-900">
              <NavLink
              to={`/${data.name}/${menu.keymenu}`}
              className="link !bg-transparent capitalize"
            >
              {menu.nombre}
            </NavLink>
              </code>
            </p>
          </li>
          </ul>


        //))
        ))}

      </motion.ul>
    </>
  );
};

export default SubMenu;
