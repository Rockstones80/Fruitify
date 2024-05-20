// import React from 'react'

import { useContext, useEffect } from "react"
import { CartContext } from "../utilities/CartManager"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Cart = () => {
    const { cart, total, sumCart } = useContext(CartContext)
    useEffect(()=>{
        sumCart()
    }, [cart])
    
  return (
    <div>
      <Header />
      <div className=" px-20 py-6">
      {cart.map((item, i)=> (
        <div className="flex gap-2" key={i}>
            <div><img src={item.images} alt="" /></div>
            <div>
                <p className="text-xl font-semibold">{item.title}</p>
                <p className="text-sm text-gray-500 font-semibold">{item.price}</p>
            </div>
        </div>
      ))}
      <p className="text-xl font-bold">Total: {total}</p>
    </div>
      <Footer />
    </div>
  )
}

export default Cart
