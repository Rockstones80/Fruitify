import Image from "../assets/Image.svg";
import Image1 from "../assets/Image1.svg";
import Image2 from "../assets/Image2.svg";
import Image3 from "../assets/Image3.svg";
import Image4 from "../assets/Image4.svg";
import Image5 from "../assets/Image5.svg";

export const Products = [
  {
    id: 1,
    images: Image,
    title: "Cherry",
    price: 10.99,
    desc: "Description of first product.",
    about:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo voluptate, iusto voluptatum natus quos iste numquam, quisquam officia voluptatibus ipsum obcaecati sed aperiam recusandae cum incidunt nihil odio laudantium sequi!",
  },
  {
    id: 2,
    images: Image1,
    title: "Watermelon",
    price: 10.99,
    desc: "Description of Second product.",
    about:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo voluptate, iusto voluptatum natus quos iste numquam, quisquam officia voluptatibus ipsum obcaecati sed aperiam recusandae cum incidunt nihil odio laudantium sequi!",
  },
  {
    id: 3,
    images: Image2,
    title: "Grape",
    price: 10.99,
    desc: "Description of first product.",
    about:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo voluptate, iusto voluptatum natus quos iste numquam, quisquam officia voluptatibus ipsum obcaecati sed aperiam recusandae cum incidunt nihil odio laudantium sequi!",
  },
  {
    id: 4,
    images: Image3,
    title: "Mushroom",
    price: 10.99,
    desc: "Description of first product.",
    about:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo voluptate, iusto voluptatum natus quos iste numquam, quisquam officia voluptatibus ipsum obcaecati sed aperiam recusandae cum incidunt nihil odio laudantium sequi!",
  },
  {
    id: 5,
    images: Image4,
    title: "Mushroom",
    price: 10.99,
    desc: "Description of first product.",
    about:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo voluptate, iusto voluptatum natus quos iste numquam, quisquam officia voluptatibus ipsum obcaecati sed aperiam recusandae cum incidunt nihil odio laudantium sequi!",
  },
  {
    id: 6,
    images: Image5,
    title: "Mushroom",
    price: 10.99,
    desc: "Description of first product.",
    about:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo voluptate, iusto voluptatum natus quos iste numquam, quisquam officia voluptatibus ipsum obcaecati sed aperiam recusandae cum incidunt nihil odio laudantium sequi!",
  },
];

import { BsCompass } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";
import { FaRegHeart, FaListUl } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { RiFileListFill } from "react-icons/ri";

export const sideTop = [
  {
    id: 1,
    label: 'Dashboard',
    route: 'dashboard',
    icon: <BsCompass />
  },
  {
    id: 2,
    label: 'Products',
    route: 'product',
    icon: <RxDashboard />
  },
  {
    id: 3,
    label: 'Favourites',
    route: 'favourites',
    icon: <FaRegHeart />
  },
  {
    id: 4,
    label: 'Inbox',
    route: 'inbox',
    icon: <TiMessages />
  },
  {
    id: 4,
    label: 'Order list',
    route: 'order-list',
    icon: <FaListUl />
  },
  {
    id: 4,
    label: 'Product stock',
    route: 'stock',
    icon: <RiFileListFill />
  },
]
