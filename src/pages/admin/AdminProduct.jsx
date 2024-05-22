// import React from 'react'
import Rename from "../../assets/Rename.svg"
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {series} from "../../utilities/constant"
import Adminduct from "../../components/Adminduct"
import AddProductPop from "../../components/AddProductPop";

const AdminProduct = () => {

  return (
    <div>
      <div>
        <p className="text-xl font-bold">Product</p>
        <div className=" bg-cover bg-center w-[100%] " 
           style={{
            backgroundImage: `url(${Rename})`,
            height:'346px',
          }}>
            <div className="flex flex-col justify-start py-[60px] pl-40 gap-2 text-white">
              <p className=" font-semibold text-sm">September 12-22</p>
              <p className=" font-black text-4xl max-w-[420px] leading-[48px]">
                 Enjoy free home
                 delivery in this summer
              </p>
              <p className="font-semibold text-sm pb-4">Designer Dresses - Pick from trendy Designer Dress</p>
              <button className=" bg-[#FF8743] w-[156px] h-11 font-bold text-sm rounded-xl"> Get Started</button>
            </div>
              <div className="flex pl-[77px] gap-[780px] mt-[-200px]">
               <button>
                <MdOutlineKeyboardArrowLeft  size={40} className=" bg-[#E2EAF8] bg-opacity-20 rounded-full text-[#363636] "/>
               </button>
               <button className=" pl-5"> 
                 <MdOutlineKeyboardArrowRight  size={40} className=" bg-[#F4F4F4] bg-opacity-20 rounded-full text-[#363636] "/>
               </button>
               </div> 
        </div>

        <div className="flex gap-6 mb-16 ">
          {series.map((serie, index) =>(
            < Adminduct
             key={index}
             image={serie.image}
             title={serie.title} 
             price={serie.price}
            
             />
          ))}
        </div>
      <AddProductPop />
      </div>
    </div>
  )
}

export default AdminProduct
