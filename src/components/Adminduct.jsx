// import React from 'react'
import { MdFavoriteBorder } from "react-icons/md";



const Adminduct = ({image, title, price}) => {


    
  return (
    <div className=" bg-white rounded-2xl w-[326px] h-[420px] mb-9">
      <img src={image} alt="" className=" w-[305px] rounded-2xl"/>
      <div className="flex justify-between  p-4">
        <div>
        <p className=" font-bold text-[18px]">{title}</p>
        <p className=" font-bold text-sm text-[#4880FF] py-2">{price}</p>
        
        <button className=" my-5 bg-[#E2EAF8] w-[126px] h-[38px] rounded-xl text-[14px] font-bold"> 
           Edit Product 
        </button>
        </div>
        <button className=" w-11 h-11 bg-[#F9F9F9] rounded-full flex items-center justify-center mt-3">
        <MdFavoriteBorder size={20}/>
        </button>

      </div>
    </div>
  )
}

export default Adminduct
