// import React from 'react'
import { IoMdMenu, IoMdSearch, IoIosArrowDropdown } from "react-icons/io";
import { auth, provider } from "../../auth/firebase";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdminNavbar = ({ setOpen, isOpen }) => {
  const [isAuth, setAuth] = useState(false);
  const [username, setUsername] = useState(null)
  const [userEmail, setUserEmail] = useState(null)
  
  useEffect(() => {
    let authenticated = localStorage.getItem('auth')
    let theName = localStorage.getItem('username')
    let theEmail = localStorage.getItem('email')
    setUsername(theName)
    setUserEmail(theEmail)
    setAuth(authenticated)
  },[])

  const signOutUser = () => {
    signOut(auth)
    setAuth(false)
    localStorage.clear()
  }
  
  return (
    <div className="flex justify-between py-3 px-5 bg-white ">
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
      {isAuth ? <div onClick={signOutUser} className="flex gap-3">
        <div className="rounded-full h-10 w-10 overflow-hidden gap-3">
          <img src="/images/user.jpg" alt="" />
        </div>
        <div className=" flex items-center gap-6">
          <div>
            <p className="font-bold text-sm text-[#404040] ">{username}</p>
            <p className="font-light text-sm">{userEmail}</p>
          </div>
          <IoIosArrowDropdown size={18} color="grey" />
        </div>
      </div> : <div>
        <Link to='/login' className="py-3 px-6 bg-blue-600 text-white rounded-md">Login</Link>
      </div>}
    </div>
  );
};

export default AdminNavbar;
