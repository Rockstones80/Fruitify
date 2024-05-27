// import React from 'react'

import { NavLink } from "react-router-dom";
import { sideTop } from "../../utilities/constant";
import { useState } from "react";
// import { IoIosArrowBack } from "react-icons/io"

const AdminSidebar = ({ isOpen, setOpen }) => {
  const [isClick, setClick] = useState(isOpen);

  const handleClick = () => {
    setClick((s) => !s);
  };

  const handleLeave = () => {
    setTimeout(() => {
      setClick(false);
    }, 100);
  };

  return (
    <div
      className={`${
        isOpen || isClick ? "flex-1 w-full" : "flex w-[45px]"
      }  flex flex-col nav transition duration-[4000] ease-linear`}
      onMouseEnter={handleClick}
      onMouseLeave={handleLeave}
    >
      {sideTop.map((item, index) => (
        <NavLink
          key={index}
          className={`flex gap-3 mx-3 mt-4 py-2 px-4 ${
            isOpen || isClick ? "w-full" : "w-fit"
          } text-sm font-semibold rounded-md`}
          to={item.route}
        >
          <span className="my-auto w-fit text-base">{item.icon}</span>
          <p className={`${isOpen || isClick ? "flex" : "hidden"}`}>{item.label}</p>
        </NavLink>
      ))}

      {/* <div cla>
            <IoIosArrowBack />
          </div> */}
    </div>
  );
};

export default AdminSidebar;
