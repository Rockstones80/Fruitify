// import React from 'react'
import { IoMdMenu, IoMdSearch, IoIosArrowDropdown } from "react-icons/io";

const AdminNavbar = ({ setOpen, isOpen }) => {
  return (
    <div className="flex justify-between py-3 px-5 bg-white">
      <div className=" flex items-center gap-[63px]">
        <p className=" font-extrabold text-xl ml-5">
          <span className=" text-[#4880FF]">Dash</span>Stack
        </p>

        <div className="flex gap-6">
          <div className="flex gap-3 my-auto">
            <div
              onClick={() => setOpen(!isOpen)}
              className="my-auto cursor-pointer"
            >
              <IoMdMenu size={20} />
            </div>
            <div className="text-gray-300 relative">
              <input
                type="text"
                className="rounded-full w-[388px] px-6 h-9 text-sm bg-gray-100"
                placeholder="    Search..."
              />
              <div className="absolute top-3 px-4 z-20">
                <IoMdSearch />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="rounded-full h-10 w-10 overflow-hidden gap-3">
          <img src="/images/user.jpg" alt="" />
        </div>
        <div className=" flex items-center gap-6">
          <div>
            <p className="font-bold text-sm text-[#404040] ">Your Name</p>
            <p className="font-light text-sm">Admin</p>
          </div>
          <IoIosArrowDropdown size={18} color="grey" />
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
