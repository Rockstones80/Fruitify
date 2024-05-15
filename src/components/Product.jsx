import { Link } from "react-router-dom";
import { Products } from "../../src/utilities/constant";

const Product = () => {
  return (
    <div className=" mt-16">
      <div className=" text-3xl font-bold">Products</div>
      <div className=" grid grid-cols-3 gap-6 py-6">
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
  );
};

export default Product;
