import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../utilities/CartManager";

// const links = [
//   { title: "Home", path: "/" },
//   { title: "About", path: "/" },
//   { title: "cart", path: "/cart" },
//   { title: "Button", path: "/" },
// ];

const Header = () => {
  const { cart } = useContext(CartContext)
  
  return (
    <div className="py-7 w-full flex items-center justify-between">
      <Link to='/'><div className=" font-extrabold text-3xl ">fruitify</div></Link>
      <div className=" flex gap-8">
        <Link to="/">Home</Link>
        <Link>About</Link>
        <Link to='/cart'>
          <p>Cart</p>
          <p className="text-xs text-red-500">{cart.length}</p>
        </Link>
        <Link>Button</Link>
      </div>
    </div>
  );
};

export default Header;
