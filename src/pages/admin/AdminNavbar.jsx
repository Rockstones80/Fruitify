// import React from 'react'
import { IoMdMenu, IoMdSearch } from "react-icons/io";

const AdminNavbar = () => {
  return (
    <div className="flex justify-between py-3 px-20 bg-white">
      <div className="flex gap-6">
        <div className="my-auto"><img src="/images/Logo.png" alt="" /></div>
        <div className="flex gap-3 my-auto">
            <div className="my-auto"><IoMdMenu size={20} /></div>
            <div className="text-gray-300 relative">
                <input type="text" className="rounded-full w-[350px] px-6 h-8 text-sm bg-gray-100" placeholder="Search..." />
                <div className="absolute top-2 pl-2 z-20"><IoMdSearch /></div>
            </div>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="rounded-full h-10 w-10 overflow-hidden gap-3"><img src="/images/user.jpg" alt="" /></div>
        <div>
            <p className="font-semibold text-sm">Your Name</p>
            <p className="font-light text-sm">Administrator</p>
        </div>
      </div>
    </div>
  )
}

export default AdminNavbar
