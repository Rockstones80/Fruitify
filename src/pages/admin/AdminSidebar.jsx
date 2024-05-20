// import React from 'react'

import { NavLink } from "react-router-dom"
import { sideTop } from "../../utilities/constant"

const AdminSidebar = () => {
  return (
    <div className="flex-1 flex flex-col nav">
      {sideTop.map((item, index)=>(
        <NavLink
            key={index}
            className={'flex gap-3 mx-3 py-2 px-4 text-sm font-semibold rounded-md'}
            to={item.route}
        ><span className="my-auto">{item.icon}</span><p>{item.label}</p></NavLink>
      ))}
      
    </div>
  )
}

export default AdminSidebar
