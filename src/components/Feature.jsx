import Img from "../assets/Img.svg";
import Image from "../assets/Image.svg";
import Image3 from "../assets/Image3.svg";

const Feature = () => {
  return (
    <div className="mt-14">
      <p className="text-3xl font-bold">Featured Product</p>
      <div className=" flex justify-between gap-6 py-6">
        <div className=" font-medium">
          <img src={Img} alt="Featured product" />
          <p className=" mt-6"> Featured Product</p>
          <p className="text-[#828282] "> Description of featured product</p>
          <p> $10.99</p>
        </div>
        <div className=" grid grid-rows-2 ">
          <div className=" font-medium">
            <img src={Image} alt="" className=" mb-4" />
            <p> Featured Product</p>
            <p className="text-[#828282]"> Description of featured product</p>
            <p> $10.99</p>
          </div>
          <div className=" font-medium ">
            <img src={Image3} alt="" className=" mb-4" />
            <p> Featured Product</p>
            <p className=" text-[#828282]"> Description of featured product</p>
            <p> $10.99</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
