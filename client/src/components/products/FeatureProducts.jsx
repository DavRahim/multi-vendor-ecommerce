import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import Ratings from "../Ratings";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import product1 from "../../assets/products/1.webp";
import product2 from "../../assets/products/2.webp";
import product3 from "../../assets/products/3.webp";
import product4 from "../../assets/products/4.webp";
import product5 from "../../assets/products/5.webp";
import product6 from "../../assets/products/6.webp";
import product7 from "../../assets/products/7.webp";

const FeatureProducts = () => {
  const products = [
    product1,
    product2,
    product3,
    product4,
    product4,
    product5,
    product6,
    product7,
  ];

  return (
    <div className="w-[85%] flex flex-wrap mx-auto">
      <div className="w-full">
        <div className="text-center flex justify-center items-center flex-col text-4xl text-slate-600 font-bold relative pb-[45px]">
          <h2>Feature Products</h2>
          <div className="w-[100px] h-[4px] bg-[#7fad39] mt-4 rounded"></div>
        </div>
      </div>
      <div className="w-full grid grid-cols-4 md-lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
        {products.map((p, i) => (
          <div
            key={i}
            className="border group transition-all duration-500 hover:shadow-md hover:-mt-3"
          >
            <div className="relative overflow-hidden">
              {p ? (
                <div className="flex justify-center items-center absolute text-white w-[38px] h-[38px] rounded-full bg-red-500 font-semibold text-xs left-2 top-2">
                  50%
                </div>
              ) : (
                ""
              )}
              <img
                className="sm:w-full w-full h-[240px]"
                src={p}
                alt="product image"
              />
              <ul className="flex transition-all duration-700 -bottom-10 justify-center items-center gap-2 absolute w-full group-hover:bottom-3">
                <li
                  //   onClick={() => add_wishlist(p)}
                  className="w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#7fad39] hover:text-white hover:rotate-[720deg] transition-all"
                >
                  <AiFillHeart />
                </li>
                <Link
                    to={`/product/details/opres`}
                  className="w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#7fad39] hover:text-white hover:rotate-[720deg] transition-all"
                >
                  <FaEye />
                </Link>
                <li
                  //   onClick={() => add_card(p._id)}
                  className="w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#7fad39] hover:text-white hover:rotate-[720deg] transition-all"
                >
                  <AiOutlineShoppingCart />
                </li>
              </ul>
            </div>
            <div className="py-3 text-slate-600 px-2">
              <h2>{"Mr.Noodles Magic Masala 35gm X 28pcs (Bucket)"}</h2>
              <div className="flex justify-start items-center gap-3">
                <span className="text-lg  font-bold">$ 70</span>
                <div className="flex">
                  <Ratings ratings={4} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureProducts;