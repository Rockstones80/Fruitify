// import React from 'react'

import { NavLink } from "react-router-dom"
import { sideTop } from "../../utilities/constant"
// import { IoIosArrowBack } from "react-icons/io"

const AdminSidebar = ({isOpen, setOpen}) => {
  
  return (

    <div className={`${isOpen ? 'flex-1 w-full' : 'flex w-[45px]'} flex flex-col nav`}>
      
      {sideTop.map((item, index)=>(
        <NavLink
            key={index}
            className={`flex gap-3 mx-3 mt-4 py-2 px-4 ${isOpen ? 'w-full' : 'w-fit'} text-sm font-semibold rounded-md`}
            to={item.route}
        ><span className="my-auto w-fit text-base">{item.icon}</span><p className={`${isOpen ? 'flex': 'hidden'}`}>{item.label}</p></NavLink>
      ))}
      
      {/* <div cla>
        <IoIosArrowBack />
      </div> */}
    </div>
   

  )
}

export default AdminSidebar
