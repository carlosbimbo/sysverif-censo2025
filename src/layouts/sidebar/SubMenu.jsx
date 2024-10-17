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

          <li key={menu.keymenu}>
            {/* className="hover:text-blue-600 hover:font-medium" */}
            <NavLink
              to={`/${data.name}/${menu.keymenu}`}
              className="link !bg-transparent capitalize"
            >
              {menu.nombre}
            </NavLink>
          </li>
        //))
        ))}

      </motion.ul>
    </>
  );
};

export default SubMenu;
