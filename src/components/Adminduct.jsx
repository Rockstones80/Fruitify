// import React from 'react'
import { MdFavoriteBorder } from "react-icons/md";



const Adminduct = ({product, setPopOpen, setSelectedProduct}) => {

  const editProduct = () => {
    setSelectedProduct(product)
    setPopOpen(true)
  }
    
  return (
    <div className=" bg-white rounded-2xl w-[326px] h-[420px] mb-9">
      <img src={product.image} alt="" className=" w-[305px] rounded-2xl"/>
      <div className="flex justify-between  p-5">
        <div>
        <p className=" font-bold text-[18px]">{product.title}</p>
        <p className=" font-bold text-sm text-[#4880FF] py-2">${product.price}</p>
        
        <button onClick={editProduct} className=" my-5 bg-[#E2EAF8] w-[126px] h-[38px] rounded-xl text-[14px] font-bold">Edit Product</button>
        </div>
        <button className=" w-11 h-11 bg-[#F9F9F9] rounded-full flex items-center justify-center mt-3">
        <MdFavoriteBorder size={20}/>
        </button>

      </div>
    </div>
  )
}

export default Adminduct
