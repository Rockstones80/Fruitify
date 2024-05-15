import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0)

    const addItemToCart = (product) => {
        const productExists = cart.find((item) => item.id === product.id);

        if (!productExists) {
            setCart([...cart, product]);
        } else {
            console.log('Product already exists in the cart');
        }
    };

    const sumCart = () => {
        let sub = 0
        cart.map(item => {
            sub = item.price+sub
        })
        setTotal(sub)
    }
    
    let valueContents = {cart, setCart, sumCart, total, addItemToCart}
    return(
        <CartContext.Provider
            value={valueContents}
        >
            {children}
        </CartContext.Provider>
    )
}