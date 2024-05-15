import { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Products } from "../utilities/constant"
import { CartContext } from "../utilities/CartManager"

const Dynamic = () => {
    const [theProduct, setTheProduct] = useState(null)
    const { id } = useParams()
    const { addItemToCart } = useContext(CartContext)

    useEffect(()=>{
        setTheProduct(Products[id-1])
    }, [id])

    const addingItem = () => {
        addItemToCart(theProduct)
    }

  return (
    <div>
        <div className="flex justify-between">
            <div className="flex-1 rounded-md overflow-hidden p-10"><img className="w-full" src={theProduct?.images} alt="product img" /></div>
            <div className="flex-1 p-10 flex flex-col gap-5 w-full">
                <p className="text-4xl font-bold">{theProduct?.title}</p>
                <p className="font-semibold">${theProduct?.price}</p>
                <p className="text-sm text-gray-500">{theProduct?.about}</p>
                <button className="flex justify-center w-full text-center rounded-md bg-black text-white p-2" onClick={addingItem}>Add to cart</button>
            </div>
        </div>
        <div className="px-3 py-5">
            <p className="text-2xl font-semibold">Suggested Products</p>
            <div className="flex gap-1 flex-wrap">
                {Products.map((fruit, index) => (
                    <Link to={'/product/'+fruit.id} key={index}>
                        <div className=" font-medium">
                        <img src={fruit.images} alt="fruit" />
                        <p>{fruit.title}</p>
                        <p className="text-[#828282]">{fruit.desc}</p>
                        <p>${fruit.price}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Dynamic
